'use client'

import { useEffect, useState } from 'react'
import { CvRequestButton } from '@/components/CvRequestButton'
import { useTheme } from '@/lib/theme'
import { useDict } from '@/lib/i18n'

/**
 * Pastille « CV » du téléphone (décision BC du 23/10) — sous md seulement.
 * Collée au bord droit, à mi-hauteur : un appui ouvre un petit panneau avec les
 * deux CV à télécharger (JDE / AS400 et reconversion), qui passent par le même
 * formulaire que les boutons de la page.
 *
 * Centrée par flex et non par `translate` : un ancêtre transformé ferait du
 * conteneur la référence des éléments `fixed` qu'il contient.
 */
export function PastilleCv() {
  const { lang } = useTheme()
  const t = useDict(lang)
  const [ouvert, setOuvert] = useState(false)

  useEffect(() => {
    if (!ouvert) return
    const echap = (e: KeyboardEvent) => e.key === 'Escape' && setOuvert(false)
    window.addEventListener('keydown', echap)
    return () => window.removeEventListener('keydown', echap)
  }, [ouvert])

  const bouton =
    'flex w-full items-center gap-2 rounded-xl px-4 py-3 text-left text-sm font-semibold transition-colors'

  return (
    <div className="pointer-events-none fixed inset-y-0 right-0 z-20 flex items-center md:hidden">
      {ouvert && (
        <div
          id="pastille-cv-panneau"
          className="pointer-events-auto mr-2 w-64 rounded-2xl border border-line bg-card p-3 shadow-2xl"
        >
          <div className="mb-2 flex items-center justify-between px-1">
            <p className="text-sm font-bold text-fg">{t.cvPill.title}</p>
            <button
              type="button"
              onClick={() => setOuvert(false)}
              aria-label={t.cvPill.close}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-fg-muted hover:bg-surface-3 hover:text-fg"
            >
              <span aria-hidden="true">✕</span>
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <CvRequestButton
              profile="as400"
              label={t.erp.ctaDownload}
              className={`${bouton} bg-amber-500 text-slate-900 hover:bg-amber-400`}
            />
            <CvRequestButton
              profile="reconversion"
              label={t.builder.ctaDownload}
              className={`${bouton} bg-accent text-accent-fg hover:bg-accent-hover`}
            />
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOuvert((v) => !v)}
        aria-expanded={ouvert}
        aria-controls={ouvert ? 'pastille-cv-panneau' : undefined}
        aria-label={t.cvPill.open}
        className="pointer-events-auto flex flex-col items-center gap-1 rounded-l-2xl bg-accent px-2 py-3 text-accent-fg shadow-lg shadow-accent/30"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        <span className="text-xs font-bold">CV</span>
      </button>
    </div>
  )
}
