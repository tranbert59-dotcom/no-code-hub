'use client'
import Link from 'next/link'

export interface FooterConfig {
  siteName: string
  baseline: string
  logoHref?: string
  accentColor?: string
  nav?: { label: string; href: string }[]
  contact?: { email?: string; address?: string }
}

const DEFAULT_NAV = [
  { label: 'Mentions légales',            href: '/mentions-legales' },
  { label: 'Politique de confidentialité', href: '/politique-de-confidentialite' },
  { label: 'Cookies',                      href: '/cookies' },
  { label: 'CGV',                          href: '/cgv' },
  { label: 'CGU',                          href: '/cgu' },
]

const PRODUCTS_NAV = [
  { label: 'WorldCup 2026',          href: 'https://worldcup.no-code-hub.fr', soon: false },
  { label: 'CyberHub',               href: null, soon: true },
  { label: 'CV Creator',             href: null, soon: true },
  { label: 'Gestion Immobilière',    href: null, soon: true },
  { label: 'Video Analyzer',         href: null, soon: true },
]

const YEAR = new Date().getFullYear()

export function Footer({
  siteName    = 'NO-CODE-HUB',
  baseline    = 'Des outils no-code pour créer, analyser, organiser.',
  logoHref    = '/',
  accentColor = '#2563eb',
  nav         = DEFAULT_NAV,
  contact     = {},
}: Partial<FooterConfig>) {
  return (
    <footer className="bg-gray-950 text-gray-400 mt-auto">
      {/* Bande supérieure */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

        {/* Bloc marque */}
        <div className="lg:col-span-2">
          <Link href={logoHref} className="flex items-center gap-2 mb-3 group">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: accentColor }}
            >
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="font-bold text-white text-lg group-hover:text-gray-200 transition-colors">
              {siteName}
            </span>
          </Link>
          <p className="text-sm leading-relaxed max-w-xs">{baseline}</p>
        </div>

        {/* Liens légaux */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Légal</p>
          <ul className="space-y-2">
            {nav.map((item) => (
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
                Gérer mes cookies
              </button>
            </li>
          </ul>
        </div>

        {/* Produits */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Produits</p>
          <ul className="space-y-2">
            {PRODUCTS_NAV.map((item) => (
              <li key={item.label} className="flex items-center gap-2">
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span className="text-sm text-gray-600 flex items-center gap-1.5">
                    {item.label}
                    <span className="text-xs bg-gray-800 text-gray-500 px-1.5 py-0.5 rounded font-medium">
                      bientôt
                    </span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Contact</p>
          <ul className="space-y-2 text-sm">
            {contact.email ? (
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors">
                  {contact.email}
                </a>
              </li>
            ) : (
              <li className="text-gray-600 italic">[email@exemple.com]</li>
            )}
            {contact.address ? (
              <li className="leading-snug">{contact.address}</li>
            ) : (
              <li className="text-gray-600 italic">[Adresse postale]</li>
            )}
          </ul>
        </div>
      </div>

      {/* Ligne copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600">
          <span>© {YEAR} {siteName}. Tous droits réservés.</span>
          <span>Fait avec soin · France</span>
        </div>
      </div>
    </footer>
  )
}
