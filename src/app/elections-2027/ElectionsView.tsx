'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Footer } from '@/components/kit/Footer'
import { Navbar } from '@/components/Navbar'
import { useTheme } from '@/lib/theme'
import { useDict } from '@/lib/i18n'

/** Premier tour : dimanche 18 avril 2027 (Conseil des ministres du 1ᵉʳ juillet 2026). */
const PREMIER_TOUR = Date.UTC(2027, 3, 18)

export function ElectionsView() {
  const { lang } = useTheme()
  const t = useDict(lang)

  // Le décompte ne se calcule qu'au navigateur : rendu côté serveur et côté
  // client tomberaient sur des jours différents selon le fuseau, et React
  // signalerait une divergence d'hydratation. D'où l'état initial nul.
  const [jours, setJours] = useState<number | null>(null)
  useEffect(() => {
    const maintenant = new Date()
    const aujourdhui = Date.UTC(maintenant.getFullYear(), maintenant.getMonth(), maintenant.getDate())
    setJours(Math.max(0, Math.round((PREMIER_TOUR - aujourdhui) / 86_400_000)))
  }, [])

  const mailto = `mailto:contact@no-code-hub.fr?subject=${encodeURIComponent(t.elections.accessSubject)}`

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Navbar />

      {/* ── EN-TÊTE ── */}
      <section className="px-6 pt-20 pb-14 bg-gradient-to-br from-surface-2 to-surface">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 px-4 py-1.5 rounded-full">
            {t.elections.badge}
          </span>
          <h1 className="text-title font-extrabold text-fg mb-4">{t.elections.title}</h1>
          <p className="text-fg-muted text-sm sm:text-base max-w-2xl mx-auto">{t.elections.subtitle}</p>

          {/* Décompte — en jours seulement */}
          <div className="mt-10 inline-flex flex-col items-center gap-1 px-8 py-5 rounded-2xl bg-card border border-line">
            <span
              className="text-4xl sm:text-5xl font-extrabold text-accent tabular-nums"
              aria-live="polite"
            >
              {jours === null ? '—' : jours.toLocaleString(lang === 'fr' ? 'fr-FR' : 'en-GB')}
            </span>
            <span className="text-xs uppercase tracking-widest text-fg-subtle">
              {jours === 1 ? t.elections.countdownDay : t.elections.countdownDays}{' '}
              {t.elections.countdownLabel}
            </span>
          </div>

          <p className="mt-6 text-xs text-fg-subtle max-w-xl mx-auto">{t.elections.dates}</p>
        </div>
      </section>

      {/* ── CE QUE LE SITE CONTIENT ── */}
      <section className="px-6 py-14 bg-surface flex-1">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-fg text-center mb-3">{t.elections.whatTitle}</h2>
          <p className="text-fg-muted text-sm text-center max-w-2xl mx-auto mb-10">{t.elections.whatIntro}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.elections.items.map((item) => (
              <div
                key={item.l}
                className="min-w-0 rounded-2xl bg-card border border-line p-5 flex flex-col gap-1"
              >
                <span className="text-2xl font-extrabold text-accent tabular-nums">{item.n}</span>
                <span className="text-sm font-semibold text-fg">{item.l}</span>
                <span className="text-xs text-fg-muted">{item.d}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-fg-subtle text-center">{t.elections.figuresNote}</p>
        </div>
      </section>

      {/* ── NEUTRALITÉ ── */}
      <section className="px-6 py-14 bg-surface-2">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-fg mb-3">{t.elections.neutralTitle}</h2>
          <p className="text-fg-muted text-sm leading-relaxed">{t.elections.neutralText}</p>
        </div>
      </section>

      {/* ── ACCÈS ── */}
      <section className="px-6 py-16 bg-accent/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-fg mb-3">{t.elections.accessTitle}</h2>
          <p className="text-fg-muted text-sm mb-8">{t.elections.accessText}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={mailto}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-accent hover:bg-accent-hover text-accent-fg font-semibold text-sm transition-colors shadow-lg shadow-accent/20"
            >
              {t.elections.accessCta}
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-line hover:border-fg-subtle text-fg-muted hover:text-fg font-semibold text-sm transition-colors"
            >
              <span aria-hidden="true">←</span>
              {t.elections.back}
            </Link>
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
