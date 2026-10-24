'use client'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { useTheme } from '@/lib/theme'
import { useDict } from '@/lib/i18n'

export interface FooterConfig {
  siteName: string
  baseline: string
  logoHref?: string
  accentColor?: string
  nav?: { label: string; href: string }[]
  contact?: { email?: string; address?: string }
  /** Logo du site ; absent = carré à l'accent avec l'icône document. */
  logo?: ReactNode
}

// 23/10/2026 : seulement ce qui est réellement en ligne (CyberHub, Video Analyzer et Pokédex
// pointaient vers des adresses qui n'existent pas).
const PRODUCTS_NAV = [
  { label: 'CV Creator',  href: 'https://cv.no-code-hub.fr' },
  { label: 'NO-CODE-HUB', href: 'https://no-code-hub.fr' },
]

// Autres projets de l'écosystème (statut : 'testing' = en test, 'dev' = en développement,
// 'invite' = test sur invitation)
const PROJECTS_NAV: { label: string; href?: string; status?: 'testing' | 'dev' | 'invite' }[] = [
  { label: 'WorldCup 2026',       href: 'https://worldcup.no-code-hub.fr' },
  { label: 'Élection 2027',       href: 'https://civic.no-code-hub.fr', status: 'invite' },
  { label: 'Gestion immobilière', href: 'https://immo.no-code-hub.fr', status: 'invite' },
]

const YEAR = new Date().getFullYear()

export function Footer({
  siteName    = 'CV Creator',
  baseline    = 'Créez votre CV professionnel en quelques minutes.',
  logoHref    = '/',
  accentColor = '#2563eb',
  nav,
  contact     = {},
  logo,
}: Partial<FooterConfig>) {
  const { lang } = useTheme()
  const t = useDict(lang)
  const legalNav = nav ?? [
    { label: t.footer.links.legalNotice, href: '/mentions-legales' },
    { label: t.footer.links.privacy,     href: '/politique-de-confidentialite' },
    { label: t.footer.links.cookies,     href: '/cookies' },
    { label: t.footer.links.cgv,         href: '/cgv' },
    { label: t.footer.links.cgu,         href: '/cgu' },
  ]
  return (
    // `kit-footer` : masqué sur téléphone quand le pied figé (PiedMobile) est là — globals.css.
    <footer className="kit-footer bg-gray-950 text-gray-400 mt-auto">
      {/* Bande supérieure */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">

        {/* Bloc marque */}
        <div className="lg:col-span-2">
          <Link href={logoHref} className="flex items-center gap-2 mb-3 group">
            {logo ?? (
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: accentColor }}
              >
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            )}
            <span className="font-bold text-white text-lg group-hover:text-gray-200 transition-colors">
              {siteName}
            </span>
          </Link>
          <p className="text-sm leading-relaxed max-w-xs">{baseline}</p>
        </div>

        {/* Liens légaux */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">{t.footer.legal}</p>
          <ul className="space-y-2">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                id="kit-open-cookie-prefs"
                className="text-sm hover:text-white transition-colors text-left"
              >
                {t.footer.manageCookies}
              </button>
            </li>
          </ul>
        </div>

        {/* Produits */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">{t.footer.products}</p>
          <ul className="space-y-2">
            {PRODUCTS_NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm hover:text-white transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">{t.footer.contact}</p>
          <ul className="space-y-2 text-sm">
            {/* Rien d'affiché sans valeur : « [Adresse postale] » apparaissait en production. */}
            {contact.email && (
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors">
                  {contact.email}
                </a>
              </li>
            )}
            {contact.address && <li className="leading-snug">{contact.address}</li>}
          </ul>
        </div>

        {/* Projets */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">{t.footer.projects}</p>
          <ul className="space-y-2">
            {PROJECTS_NAV.map((p) => (
              <li key={p.label} className="text-sm">
                {p.href ? (
                  <a href={p.href} className="hover:text-white transition-colors">{p.label}</a>
                ) : (
                  <span className="text-gray-400">{p.label}</span>
                )}
                {p.status && (
                  <span className="ml-1.5 text-[10px] uppercase tracking-wide text-gray-500">
                    · {p.status === 'testing' ? t.footer.statusTesting : p.status === 'invite' ? t.footer.statusInvite : t.footer.statusDev}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Ligne copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600">
          <span>© {YEAR} {siteName}. {t.footer.rights}</span>
          <span>{t.footer.madeWith}</span>
        </div>
      </div>
    </footer>
  )
}
