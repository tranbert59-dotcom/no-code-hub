'use client'

import Image from 'next/image'
import { Footer } from '@/components/kit/Footer'
import { Navbar } from '@/components/Navbar'
import { useTheme } from '@/lib/theme'
import { useDict } from '@/lib/i18n'
import ContactForm from '@/components/ContactForm'

const LINKEDIN_URL = 'https://www.linkedin.com/in/bertrand-cabanes-1965b211/'

// ── Prestation payante « cas clients » ────────────────────────────────────────
// Renseigner ces 3 URL quand elles existeront — les boutons s'activent tout seuls.
//  · paymentUrl : lien de paiement (Stripe Payment Link, Gumroad…) — vide = repli e-mail + « bientôt »
//  · notionUrl  : modèle Notion vierge à dupliquer — vide = bouton grisé « bientôt »
//  · formUrl    : formulaire (Tally / Typeform / Airtable) — vide = bouton grisé « bientôt »
const SERVICE = {
  paymentUrl: '',
  notionUrl: '',
  formUrl: '',
}
const SERVICE_EMAIL_FALLBACK = 'mailto:contact@no-code-hub.fr?subject=Analyse%20de%20mon%20projet'

// Données non traduisibles (noms de techno, versions) ou structurelles (icônes, liens).
const STACK = [
  'FastAPI', 'Next.js 14/15', 'PostgreSQL', 'Redis', 'Docker', 'Claude AI',
  'Python', 'TypeScript', 'Supabase', 'nginx', 'Whisper', 'Tailwind CSS',
]

const BUILDER_STACK = [
  'Python · FastAPI',
  'Next.js · TypeScript',
  'PostgreSQL · Redis',
  'Docker · nginx',
  'Claude AI · Whisper',
  'VPS · CI/CD',
]

const JDE_VERSIONS = ['World Software (AS400)', 'EnterpriseOne (OneWorld)', 'JDE 8.11+']

// Métadonnées projets — l'ordre correspond à dict.projects.items.
const PROJECTS_META = [
  {
    name: 'WorldCup 2026',
    href: 'https://worldcup.no-code-hub.fr',
    status: 'live' as const,
    stack: ['FastAPI', 'Next.js 14', 'Supabase', 'Discord Bot'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
  },
  {
    name: 'CV Creator',
    href: 'https://cv.no-code-hub.fr',
    status: 'test' as const,
    stack: ['Express', 'Next.js 14', 'Prisma', 'Claude AI'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    name: 'Élection 2027',
    href: 'https://civic.no-code-hub.fr',
    status: 'test' as const,
    stack: ['FastAPI', 'Next.js 15', 'Leaflet'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
      </svg>
    ),
  },
  {
    name: 'CyberHub SaaS',
    href: null,
    status: 'soon' as const,
    stack: ['FastAPI', 'PostgreSQL', 'Redis', 'Next.js 14'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    name: 'Gestion Immobilière',
    href: null,
    status: 'soon' as const,
    stack: ['FastAPI', 'PostgreSQL', 'MinIO', 'Next.js 15'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
]

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const { lang } = useTheme()
  const t = useDict(lang)

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="relative flex flex-col items-center justify-center text-center lg:text-left px-6 py-24 sm:py-32 bg-gradient-to-br from-surface-2 to-surface"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent/10 blur-3xl" />
        </div>

        {/* Logo NO-CODE-HUB, grand et centré, entre la barre et le badge */}
        <div className="relative w-full flex justify-center mb-10 sm:mb-14">
          <Image
            src="/logo.png"
            alt="NO-CODE-HUB"
            width={1024}
            height={1024}
            priority
            className="w-40 sm:w-52 lg:w-64 h-auto rounded-3xl shadow-2xl shadow-accent/30 ring-1 ring-line"
          />
        </div>

        <div className="relative max-w-6xl w-full grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Colonne texte */}
          <div>
            <span className="inline-block mb-5 text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 px-4 py-1.5 rounded-full">
              {t.hero.badge}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-fg leading-tight mb-5">
              Bertrand Cabanes
            </h1>
            <p className="text-xl sm:text-2xl text-accent font-medium mb-6">
              {t.hero.tagline}
            </p>
            <p className="text-base sm:text-lg text-fg-muted leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-accent hover:bg-accent-hover text-accent-fg font-semibold text-sm transition-colors shadow-lg shadow-accent/30"
              >
                <LinkedInIcon className="w-4 h-4" />
                {t.hero.ctaLinkedin}
              </a>
              <a
                href="#projets"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-line hover:border-fg-subtle text-fg-muted hover:text-fg font-semibold text-sm transition-colors"
              >
                {t.hero.ctaProjects}
              </a>
            </div>
          </div>

          {/* Colonne illustration */}
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/20 blur-2xl rounded-3xl" aria-hidden="true" />
            <img
              src="/img/hero-nocode-hub.webp"
              alt={t.hero.imageAlt}
              width={1400}
              height={933}
              className="relative w-full h-auto rounded-2xl shadow-2xl shadow-black/20 ring-1 ring-line"
            />
          </div>
        </div>
      </section>

      {/* ── PARCOURS ── */}
      <section id="parcours" className="py-20 px-6 bg-surface-2">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-fg mb-3">{t.parcours.title}</h2>
            <p className="text-fg-muted text-sm max-w-lg mx-auto">{t.parcours.subtitle}</p>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-accent/20 hidden sm:block" />
            <div className="space-y-8">
              {t.parcours.experiences.map((exp, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="hidden sm:flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-accent ring-4 ring-accent/15 mt-1.5 shrink-0" />
                  </div>
                  <div className="bg-card rounded-2xl p-6 shadow-sm border border-line flex-1">
                    <span className="text-xs font-mono text-accent font-semibold">{exp.years}</span>
                    <h3 className="font-bold text-fg mt-1 mb-1">{exp.label}</h3>
                    <p className="text-sm text-fg-muted">{exp.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Valeurs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
            {t.parcours.stats.map((s) => (
              <div key={s.label} className="bg-card rounded-2xl p-5 text-center shadow-sm border border-line">
                <div className="text-3xl font-bold text-accent mb-1">{s.val}</div>
                <div className="text-xs text-fg-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ERP / AS400 (accent ambre fixe = héritage/legacy) ── */}
      <section id="erp" className="py-20 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400 bg-amber-500/10 px-4 py-1.5 rounded-full">
              {t.erp.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-fg mb-3">{t.erp.title}</h2>
            <p className="text-fg-muted text-sm max-w-xl mx-auto">{t.erp.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Modules maîtrisés */}
            <div className="bg-card rounded-2xl p-6 border border-line shadow-sm">
              <h3 className="text-fg font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center text-sm">⚙</span>
                {t.erp.modulesTitle}
              </h3>
              <div className="flex flex-wrap gap-2">
                {t.erp.modules.map((m) => (
                  <span key={m} className="text-xs bg-card-2 text-fg-muted px-3 py-1.5 rounded-lg border border-line">
                    {m}
                  </span>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-line">
                <p className="text-xs text-fg-subtle mb-2 font-semibold uppercase tracking-wide">{t.erp.versionsLabel}</p>
                <div className="flex flex-wrap gap-2">
                  {JDE_VERSIONS.map((v) => (
                    <span key={v} className="text-xs bg-amber-500/10 text-amber-700 dark:text-amber-300 px-3 py-1.5 rounded-lg border border-amber-500/20 font-mono">
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Clients & secteurs */}
            <div className="bg-card rounded-2xl p-6 border border-line shadow-sm">
              <h3 className="text-fg font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-accent/15 text-accent flex items-center justify-center text-sm">🏢</span>
                {t.erp.clientsTitle}
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {t.erp.clients.map((c) => (
                  <div key={c.name} className="flex items-center justify-between bg-card-2/60 rounded-lg px-3 py-2">
                    <span className="text-sm font-semibold text-fg">{c.name}</span>
                    <span className="text-xs text-fg-muted">{c.sector}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ce que je faisais concrètement */}
          <div className="bg-card rounded-2xl p-6 border border-line shadow-sm mb-8">
            <h3 className="text-fg font-bold mb-5">{t.erp.concreteTitle}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {t.erp.concrete.map((item) => (
                <div key={item.title} className="bg-card-2/60 rounded-xl p-4">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h4 className="text-fg font-semibold text-sm mb-2">{item.title}</h4>
                  <p className="text-fg-muted text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA recruteurs ERP */}
          <div className="text-center">
            <p className="text-fg-muted text-sm mb-5">{t.erp.ctaText}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/cv/Bertrand_Cabanes_CV_JDE_AS400.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold text-sm transition-colors"
              >
                <DownloadIcon className="w-4 h-4" />
                {t.erp.ctaDownload}
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-line hover:border-fg-subtle text-fg-muted hover:text-fg font-semibold text-sm transition-colors"
              >
                {t.erp.ctaLinkedin}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT BUILDER / NO-CODE ── */}
      <section id="builder" className="py-20 px-6 bg-surface-2">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 px-4 py-1.5 rounded-full">
              {t.builder.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-fg mb-3">{t.builder.title}</h2>
            <p className="text-fg-muted text-sm max-w-xl mx-auto">{t.builder.subtitle}</p>
          </div>

          {/* Compétences Product Builder — UnCode School */}
          <div className="bg-card rounded-2xl p-6 border border-line shadow-sm mb-8">
            <div className="text-center mb-6">
              <h3 className="text-fg font-bold mb-2">{t.builder.nocode.title}</h3>
              <p className="text-fg-muted text-sm max-w-2xl mx-auto">{t.builder.nocode.intro}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {t.builder.nocode.groups.map((g) => (
                <div key={g.cat} className="bg-accent/5 rounded-xl p-4 border border-accent/15">
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent mb-3">{g.cat}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {g.tools.map((tool) => (
                      <span key={tool} className="text-xs bg-card-2/70 text-fg-muted px-2.5 py-1 rounded-md font-mono">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {/* Cas clients à la demande */}
            <div className="flex items-start gap-3 bg-accent/10 rounded-xl p-4 border border-accent/20">
              <span className="text-2xl shrink-0" aria-hidden="true">🎯</span>
              <div>
                <h4 className="text-fg font-semibold text-sm mb-1">{t.builder.nocode.coachTitle}</h4>
                <p className="text-fg-muted text-xs leading-relaxed">{t.builder.nocode.coachDesc}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Stack & compétences */}
            <div className="bg-card rounded-2xl p-6 border border-line shadow-sm">
              <h3 className="text-fg font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-accent/15 text-accent flex items-center justify-center text-sm">⌨</span>
                {t.builder.stackTitle}
              </h3>
              <div className="flex flex-wrap gap-2">
                {BUILDER_STACK.map((s) => (
                  <span key={s} className="text-xs bg-accent/10 text-accent px-3 py-1.5 rounded-lg border border-accent/20 font-mono">
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-line">
                <p className="text-xs text-fg-subtle mb-2 font-semibold uppercase tracking-wide">{t.builder.approachLabel}</p>
                <p className="text-sm text-fg-muted leading-relaxed">{t.builder.approachText}</p>
              </div>
            </div>

            {/* Certifications & formation */}
            <div className="bg-card rounded-2xl p-6 border border-line shadow-sm">
              <h3 className="text-fg font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-accent/15 text-accent flex items-center justify-center text-sm">🎓</span>
                {t.builder.certsTitle}
              </h3>
              <div className="space-y-3">
                {t.builder.certs.map((c) => (
                  <div key={c.label} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-fg">{c.label}</p>
                      <p className="text-xs text-fg-muted">{c.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Le pont entre les deux mondes */}
          <div className="bg-card rounded-2xl p-6 border border-line shadow-sm mb-8">
            <h3 className="text-fg font-bold mb-2 text-center">{t.builder.bridgeTitle}</h3>
            <p className="text-fg-muted text-sm text-center mb-6 max-w-2xl mx-auto">{t.builder.bridgeSubtitle}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.builder.bridge.map((col) => (
                <div key={col.title} className="bg-accent/5 rounded-xl p-5 border border-accent/15">
                  <div className="text-2xl mb-2">{col.icon}</div>
                  <h4 className="text-fg font-semibold text-sm mb-3">{col.title}</h4>
                  <ul className="space-y-2">
                    {col.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-xs text-fg-muted leading-relaxed">
                        <span className="text-accent mt-0.5">→</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* CTA reconversion + CV */}
          <div className="text-center">
            <p className="text-fg-muted text-sm mb-5">{t.builder.ctaText}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/cv/Bertrand_Cabanes_CV_Reconversion.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-accent-hover text-accent-fg font-semibold text-sm transition-colors shadow-lg shadow-accent/20"
              >
                <DownloadIcon className="w-4 h-4" />
                {t.builder.ctaDownload}
              </a>
              <a
                href="#projets"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-accent/40 hover:border-accent text-accent font-semibold text-sm transition-colors"
              >
                {t.builder.ctaProjects}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRESTATION PAYANTE — un problème à résoudre ── */}
      <section id="service" className="py-20 px-6 bg-accent/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 px-4 py-1.5 rounded-full">
              {t.service.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-fg mb-3">{t.service.title}</h2>
            <p className="text-fg-muted text-sm max-w-xl mx-auto">{t.service.subtitle}</p>
          </div>

          {/* Étapes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {t.service.steps.map((s) => (
              <div key={s.n} className="bg-card rounded-2xl p-5 border border-line shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-accent text-accent-fg font-bold flex items-center justify-center mb-3">
                  {s.n}
                </div>
                <h3 className="text-fg font-semibold text-sm mb-1">{s.title}</h3>
                <p className="text-fg-muted text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Carte CTA — paiement + livrables */}
          <div className="bg-card rounded-2xl p-6 border border-accent/20 shadow-sm text-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full mb-5">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              {t.service.paid}
            </span>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a
                href={SERVICE.paymentUrl || SERVICE_EMAIL_FALLBACK}
                {...(SERVICE.paymentUrl ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-accent hover:bg-accent-hover text-accent-fg font-semibold text-sm transition-colors shadow-lg shadow-accent/20"
              >
                {t.service.ctaPay}
              </a>

              {SERVICE.notionUrl ? (
                <a
                  href={SERVICE.notionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-line hover:border-accent text-fg-muted hover:text-fg font-semibold text-sm transition-colors"
                >
                  {t.service.notion}
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-line text-fg-subtle text-sm font-semibold opacity-70 cursor-not-allowed">
                  {t.service.notion} · {t.service.soonTag}
                </span>
              )}

              {SERVICE.formUrl ? (
                <a
                  href={SERVICE.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-line hover:border-accent text-fg-muted hover:text-fg font-semibold text-sm transition-colors"
                >
                  {t.service.form}
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-line text-fg-subtle text-sm font-semibold opacity-70 cursor-not-allowed">
                  {t.service.form} · {t.service.soonTag}
                </span>
              )}
            </div>

            {!SERVICE.paymentUrl && (
              <p className="text-xs text-fg-subtle mt-4">{t.service.soon}</p>
            )}
          </div>
        </div>
      </section>

      {/* ── PROJETS ── */}
      <section id="projets" className="py-20 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-fg mb-3">{t.projects.title}</h2>
            <p className="text-fg-muted text-sm max-w-md mx-auto">{t.projects.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PROJECTS_META.map((project, i) => {
              const copy = t.projects.items[i]
              const isLive = project.status === 'live'
              const isTest = project.status === 'test'
              return (
                <div
                  key={project.name}
                  className={`group bg-card border rounded-2xl p-6 shadow-sm flex flex-col transition-all
                    ${isLive
                      ? 'border-green-500/30 hover:border-green-500/60 hover:shadow-md'
                      : isTest
                        ? 'border-amber-500/30 hover:border-amber-500/60 hover:shadow-md'
                        : 'border-line hover:border-accent/40 hover:shadow-sm opacity-90'
                    }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center
                      ${isLive ? 'bg-green-500/10 text-green-600 dark:text-green-400'
                        : isTest ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                        : 'bg-accent/10 text-accent'}`}>
                      {project.icon}
                    </div>
                    {isLive ? (
                      <span className="flex items-center gap-1.5 text-xs font-semibold text-green-700 dark:text-green-400 bg-green-500/10 px-3 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        {t.projects.live}
                      </span>
                    ) : isTest ? (
                      <span className="flex items-center gap-1.5 text-xs font-semibold text-amber-700 dark:text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        {t.projects.test}
                      </span>
                    ) : (
                      <span className="text-xs font-medium text-fg-subtle bg-card-2/60 px-3 py-1 rounded-full">
                        {t.projects.soon}
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-fg text-base mb-1">{project.name}</h3>
                  <p className="text-xs font-semibold text-accent mb-3">{copy.baseline}</p>
                  <p className="text-sm text-fg-muted leading-relaxed flex-1 mb-4">{copy.description}</p>

                  {/* Stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.stack.map((s) => (
                      <span key={s} className="text-xs bg-card-2/70 text-fg-muted px-2 py-0.5 rounded-md font-mono">
                        {s}
                      </span>
                    ))}
                  </div>

                  {project.href ? (
                    <div className="flex items-center justify-between gap-2">
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors
                          ${isTest
                            ? 'text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300'
                            : 'text-green-700 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300'}`}
                      >
                        {isTest ? t.projects.testView : t.projects.view}
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      {isTest && (
                        <span className="inline-flex items-center gap-1 text-xs text-fg-subtle">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                          {t.projects.protected}
                        </span>
                      )}
                    </div>
                  ) : (
                    <span className="text-xs text-fg-subtle italic">{t.projects.inDev}</span>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── STACK ── */}
      <section className="py-16 px-6 bg-surface-2">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold text-fg mb-2">{t.stack.title}</h2>
          <p className="text-fg-muted text-sm mb-10">{t.stack.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {STACK.map((label) => (
              <span key={label} className="px-4 py-2 rounded-xl bg-card border border-line text-sm text-fg-muted font-mono hover:border-accent hover:text-fg transition-colors">
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 px-6 bg-accent">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-accent-fg mb-4">{t.contact.title}</h2>
          <p className="text-accent-fg/80 text-sm mb-10 leading-relaxed">{t.contact.subtitle}</p>
          <ContactForm />
          <p className="text-accent-fg/60 text-xs my-6 uppercase tracking-wider">{t.contact.form.or}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white text-slate-900 hover:bg-white/90 font-semibold text-sm transition-colors shadow-lg"
            >
              <LinkedInIcon className="w-4 h-4" />
              {t.contact.ctaLinkedin}
            </a>
            <a
              href="mailto:contact@no-code-hub.fr"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-white/50 hover:border-white text-accent-fg font-semibold text-sm transition-colors"
            >
              contact@no-code-hub.fr
            </a>
          </div>
        </div>
      </section>

      <Footer
        siteName="NO-CODE-HUB"
        baseline={t.footer.baseline}
        accentColor="rgb(var(--accent))"
        contact={{ email: 'contact@no-code-hub.fr' }}
      />
    </div>
  )
}
