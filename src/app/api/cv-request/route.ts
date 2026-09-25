import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { promises as fs } from 'fs'
import path from 'path'

/**
 * POST /api/cv-request — demande de CV gatée par un mini-formulaire.
 *
 * 1. Valide les champs (nom + email + format + profil + consentement RGPD obligatoires).
 * 2. Enregistre le lead de façon persistante (NDJSON, `data/cv-leads.ndjson` — hors Git,
 *    surchargable par CV_LEADS_FILE).
 * 3. Notifie Bertrand par email (CV_TO, défaut prodbuild@no-code-hub.fr) via le SMTP
 *    déjà configuré pour le contact (CONTACT_SMTP_*). Best-effort : n'empêche pas la livraison.
 * 4. Renvoie l'URL du bon PDF selon le mapping (profil + format).
 *
 * Le profil (as400 | reconversion) vient du CONTEXTE (section d'où l'on clique), pas d'un choix.
 * Anti-spam : honeypot `website` + 5 demandes / 10 min par IP.
 */
export const runtime = 'nodejs'

// Source de vérité du mapping (profil × format → fichier de public/cv/).
const CV_FILES: Record<string, Record<string, string>> = {
  as400: {
    presentation: 'Bertrand_Cabanes_CV_JDE_AS400.pdf',
    ats: 'Bertrand_Cabanes_CV_JDE_AS400_ATS.pdf',
    ats100: 'Bertrand_Cabanes_CV_JDE_AS400_ATS_100.pdf',
    design: 'Bertrand_Cabanes_CV_JDE_AS400_Design.pdf',
  },
  reconversion: {
    presentation: 'Bertrand_Cabanes_CV_Reconversion.pdf',
    ats: 'Bertrand_Cabanes_CV_Reconversion_ATS.pdf',
    ats100: 'Bertrand_Cabanes_CV_Reconversion_ATS_100.pdf',
    design: 'Bertrand_Cabanes_CV_Reconversion_Design.pdf',
  },
}
const PROFILE_LABEL: Record<string, string> = { as400: 'AS400 / JD Edwards', reconversion: 'Reconversion (no-code / IA)' }
const FORMAT_LABEL: Record<string, string> = { presentation: 'Présentation', ats: 'ATS', ats100: 'ATS 100 %', design: 'Design' }

const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5
const hits = new Map<string, number[]>()

function rateLimited(ip: string): boolean {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > MAX_PER_WINDOW
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

async function persistLead(lead: Record<string, unknown>) {
  const file = process.env.CV_LEADS_FILE || path.join(process.cwd(), 'data', 'cv-leads.ndjson')
  await fs.mkdir(path.dirname(file), { recursive: true })
  await fs.appendFile(file, JSON.stringify(lead) + '\n', 'utf8')
}

async function notify(lead: Record<string, string>) {
  const { CONTACT_SMTP_HOST, CONTACT_SMTP_PORT, CONTACT_SMTP_USER, CONTACT_SMTP_PASS } = process.env
  if (!CONTACT_SMTP_HOST || !CONTACT_SMTP_USER || !CONTACT_SMTP_PASS) {
    console.warn('[cv-request] SMTP non configuré — notification non envoyée', { email: lead.email })
    return
  }
  const to = process.env.CV_TO || 'prodbuild@no-code-hub.fr'
  const transport = nodemailer.createTransport({
    host: CONTACT_SMTP_HOST,
    port: Number(CONTACT_SMTP_PORT || 587),
    secure: Number(CONTACT_SMTP_PORT) === 465,
    auth: { user: CONTACT_SMTP_USER, pass: CONTACT_SMTP_PASS },
  })
  await transport.sendMail({
    from: `"NO-CODE-HUB — demande CV" <${CONTACT_SMTP_USER}>`,
    to,
    replyTo: lead.email ? `"${(lead.name || '').replace(/"/g, '')}" <${lead.email}>` : undefined,
    subject: `[no-code-hub.fr] Demande de CV ${lead.profileLabel} — ${lead.name}`,
    text:
      `Nouvelle demande de CV\n\n` +
      `Profil    : ${lead.profileLabel}\n` +
      `Format    : ${lead.formatLabel} (${lead.file})\n` +
      `Nom       : ${lead.name}\n` +
      `Prénom    : ${lead.firstName || '—'}\n` +
      `Email     : ${lead.email}\n` +
      `Fonction  : ${lead.role || '—'}\n` +
      `Pourquoi  : ${lead.reason || '—'}\n` +
      `IP        : ${lead.ip}\n` +
      `Date      : ${lead.at}\n`,
  })
}

export async function POST(req: Request) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'invalid' }, { status: 400 })
  }

  // Honeypot : un humain ne remplit jamais ce champ (caché en CSS).
  if (typeof body.website === 'string' && body.website.trim() !== '') {
    return NextResponse.json({ ok: true })
  }

  const name = String(body.name ?? '').trim().slice(0, 120)
  const firstName = String(body.firstName ?? '').trim().slice(0, 120)
  const email = String(body.email ?? '').trim().slice(0, 200)
  const role = String(body.role ?? '').trim().slice(0, 120)
  const reason = String(body.reason ?? '').trim().slice(0, 2000)
  const profile = String(body.profile ?? '').trim()
  const format = String(body.format ?? '').trim()
  const consent = body.consent === true

  const file = CV_FILES[profile]?.[format]
  if (!name || !EMAIL_RE.test(email) || !file || !consent) {
    return NextResponse.json({ error: 'invalid' }, { status: 422 })
  }

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'local'
  if (rateLimited(ip)) {
    return NextResponse.json({ error: 'rate_limited' }, { status: 429 })
  }

  const lead = {
    name, firstName, email, role, reason, profile, format, file,
    profileLabel: PROFILE_LABEL[profile], formatLabel: FORMAT_LABEL[format],
    ip, at: new Date().toISOString(),
  }

  // Persistance (prioritaire) puis notification — best-effort, sans bloquer la livraison.
  try {
    await persistLead(lead)
  } catch (err) {
    console.error('[cv-request] persistance échouée', err)
  }
  try {
    await notify(lead)
  } catch (err) {
    console.error('[cv-request] notification échouée', err)
  }

  return NextResponse.json({ ok: true, url: `/cv/${file}`, filename: file })
}
