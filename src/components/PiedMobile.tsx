'use client'

import { useEffect, useState, type ReactNode } from 'react'
import Link from 'next/link'
import { useTheme } from '@/lib/theme'
import { useDict } from '@/lib/i18n'

const LINKEDIN_URL = 'https://www.linkedin.com/in/bertrand-cabanes-1965b211/'
const EMAIL = 'contact@no-code-hub.fr'

type Onglet = 'legal' | 'contact' | 'menu'

/**
 * Pied de page figé du téléphone (décision BC du 23/10) — sous md seulement.
 *
 * Une barre basse à trois onglets, comme la barre de Tinder : Légal · Contact ·
 * Menu. Un appui fait monter un panneau avec la liste, la marque en tête
 * (logo, nom, accroche — comme le pied de page de cv-creator). Un second appui,
 * un appui hors du panneau ou Échap le referment.
 *
 * Il remplace sur téléphone le pied de page du kit (masqué par globals.css) :
 * on ne peut pas modifier le kit ici, et il affiche « [Adresse postale] ».
 * « Gérer mes cookies » clique le bouton du pied de page du kit, resté dans la
 * page : c'est lui que la bannière cookies écoute.
 */
export function PiedMobile() {
  const { lang } = useTheme()
  const t = useDict(lang)
  const m = t.mobileFooter
  const [ouvert, setOuvert] = useState<Onglet | null>(null)

  useEffect(() => {
    if (!ouvert) return
    const echap = (e: KeyboardEvent) => e.key === 'Escape' && setOuvert(null)
    window.addEventListener('keydown', echap)
    return () => window.removeEventListener('keydown', echap)
  }, [ouvert])

  const fermer = () => setOuvert(null)
  const basculer = (o: Onglet) => setOuvert((v) => (v === o ? null : o))

  const legal = [
    { href: '/mentions-legales', label: m.legalNotice },
    { href: '/politique-de-confidentialite', label: m.privacy },
    { href: '/cookies', label: m.cookies },
    { href: '/cgv', label: m.cgv },
    { href: '/cgu', label: m.cgu },
  ]
  const sections = [
    { href: '/#parcours', label: t.nav.parcours },
    { href: '/#erp', label: t.nav.jde },
    { href: '/#builder', label: t.nav.builder },
    { href: '/#methode', label: t.method.badge },
    { href: '/#projets', label: t.nav.projets },
    { href: '/#resultats', label: t.results.badge },
    { href: '/#faq', label: t.faq.badge },
    { href: '/produits', label: t.nav.produits },
  ]

  const lien = 'block rounded-xl px-4 py-3 text-base text-fg hover:bg-surface-3 transition-colors'

  return (
    <div className="md:hidden">
      {ouvert && (
        <button
          type="button"
          aria-label={m.close}
          onClick={fermer}
          className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-[1px]"
        />
      )}

      {ouvert && (
        <div
          id="pied-mobile-panneau"
          role="dialog"
          aria-label={m[ouvert]}
          className="fixed inset-x-0 z-50 max-h-[70vh] overflow-y-auto rounded-t-3xl border-t border-line bg-surface px-4 pb-4 pt-5 shadow-2xl"
          style={{ bottom: 'calc(4rem + env(safe-area-inset-bottom))' }}
        >
          {/* La marque en tête, comme le pied de page de cv-creator. */}
          <div className="mb-4 flex items-center gap-3 border-b border-line px-4 pb-4">
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-sm font-bold tracking-tight text-accent-fg"
              aria-hidden="true"
            >
              NH
            </span>
            <span>
              <span className="block font-bold text-fg">NO-CODE-HUB</span>
              <span className="block text-sm leading-snug text-fg-muted">{t.footer.baseline}</span>
            </span>
          </div>

          {ouvert === 'legal' && (
            <ul>
              {legal.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={lien} onClick={fermer}>
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  className={`${lien} w-full text-left`}
                  onClick={() => {
                    fermer()
                    document.getElementById('kit-open-cookie-prefs')?.click()
                  }}
                >
                  {m.manageCookies}
                </button>
              </li>
            </ul>
          )}

          {ouvert === 'contact' && (
            <ul>
              <li>
                <Link href="/#contact" className={`${lien} font-semibold text-accent`} onClick={fermer}>
                  {m.writeMessage} <span aria-hidden="true">→</span>
                </Link>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className={lien}>
                  {EMAIL}
                </a>
              </li>
              <li>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={lien}>
                  LinkedIn
                </a>
              </li>
            </ul>
          )}

          {ouvert === 'menu' && (
            <ul>
              {sections.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className={lien} onClick={fermer}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <nav
        aria-label={m.navLabel}
        className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-surface/95 backdrop-blur-sm"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <div className="grid h-16 grid-cols-3">
          <Onglet actif={ouvert === 'legal'} label={m.legal} onClick={() => basculer('legal')}>
            {/* balance */}
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m-7 0h14M5 7h14M5 7l-3 7a3 3 0 006 0L5 7zm14 0l-3 7a3 3 0 006 0l-3-7z" />
          </Onglet>
          <Onglet actif={ouvert === 'contact'} label={m.contact} onClick={() => basculer('contact')}>
            {/* enveloppe */}
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 6 9-6M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
          </Onglet>
          <Onglet actif={ouvert === 'menu'} label={m.menu} onClick={() => basculer('menu')}>
            {/* trois traits */}
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </Onglet>
        </div>
      </nav>
    </div>
  )
}

function Onglet({
  actif,
  label,
  onClick,
  children,
}: {
  actif: boolean
  label: string
  onClick: () => void
  children: ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={actif}
      aria-controls={actif ? 'pied-mobile-panneau' : undefined}
      className={`flex flex-col items-center justify-center gap-1 text-xs font-semibold transition-colors ${
        actif ? 'text-accent' : 'text-fg-muted hover:text-fg'
      }`}
    >
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        {children}
      </svg>
      {label}
    </button>
  )
}
