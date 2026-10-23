// Métadonnées produits — partagées par la home (#projets) et la page /produits.
// L'ordre correspond à dict.projects.items (textes traduits).

export type ProductStatus = 'live' | 'test' | 'soon'

export type ProductMeta = {
  name: string
  href: string | null
  status: ProductStatus
  stack: string[]
  icon: React.ReactNode
  /** Capture de l'écran d'accueil (public/img/produits/…), 800×500. */
  image?: string
  /** Test sur invitation : on entre en écrivant à Bertrand (décision BC du 23/10). */
  invitation?: boolean
}

export const PRODUCTS: ProductMeta[] = [
  {
    name: 'WorldCup 2026',
    href: 'https://worldcup.no-code-hub.fr',
    status: 'live',
    image: '/img/produits/worldcup.webp',
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
    status: 'test',
    image: '/img/produits/cv.webp',
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
    status: 'test',
    invitation: true,
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
    status: 'soon',
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
    href: 'https://immo.no-code-hub.fr',
    status: 'test',
    invitation: true,
    stack: ['FastAPI', 'PostgreSQL', 'MinIO', 'Next.js 15'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
]
