import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

/**
 * POST /api/contact — formulaire de contact du site.
 *
 * Envoi SMTP via CONTACT_SMTP_HOST / PORT / USER / PASS, vers CONTACT_TO
 * (défaut : contact@no-code-hub.fr). Sans SMTP configuré → 503 explicite,
 * le front propose alors le mail direct. Anti-spam : champ honeypot `website`
 * + 5 envois / 10 min par IP (mémoire process — suffisant pour un site vitrine).
 */
export const runtime = 'nodejs'

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

export async function POST(req: Request) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'invalid' }, { status: 400 })
  }

  // Honeypot : un humain ne remplit jamais ce champ (caché en CSS)
  if (typeof body.website === 'string' && body.website.trim() !== '') {
    return NextResponse.json({ ok: true })
  }

  const name = String(body.name ?? '').trim().slice(0, 120)
  const email = String(body.email ?? '').trim().slice(0, 200)
  const message = String(body.message ?? '').trim().slice(0, 5000)
  if (!name || !EMAIL_RE.test(email) || message.length < 10) {
    return NextResponse.json({ error: 'invalid' }, { status: 422 })
  }

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'local'
  if (rateLimited(ip)) {
    return NextResponse.json({ error: 'rate_limited' }, { status: 429 })
  }

  const { CONTACT_SMTP_HOST, CONTACT_SMTP_PORT, CONTACT_SMTP_USER, CONTACT_SMTP_PASS } = process.env
  const to = process.env.CONTACT_TO || 'contact@no-code-hub.fr'
  if (!CONTACT_SMTP_HOST || !CONTACT_SMTP_USER || !CONTACT_SMTP_PASS) {
    console.warn('[contact] SMTP non configuré — message non envoyé', { name, email })
    return NextResponse.json({ error: 'smtp_not_configured' }, { status: 503 })
  }

  try {
    const transport = nodemailer.createTransport({
      host: CONTACT_SMTP_HOST,
      port: Number(CONTACT_SMTP_PORT || 587),
      secure: Number(CONTACT_SMTP_PORT) === 465,
      auth: { user: CONTACT_SMTP_USER, pass: CONTACT_SMTP_PASS },
    })
    await transport.sendMail({
      from: `"NO-CODE-HUB — formulaire" <${CONTACT_SMTP_USER}>`,
      to,
      replyTo: `"${name.replace(/"/g, '')}" <${email}>`,
      subject: `[no-code-hub.fr] Contact de ${name}`,
      text: `Nom : ${name}\nEmail : ${email}\nIP : ${ip}\n\n${message}`,
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact] envoi échoué', err)
    return NextResponse.json({ error: 'send_failed' }, { status: 502 })
  }
}
