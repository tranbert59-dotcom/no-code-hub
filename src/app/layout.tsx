import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CookieBanner } from '@/components/kit/CookieBanner'
import { ChatWidget } from '@/components/kit/ChatWidget'
import { ScrollReveal } from '@/components/ScrollReveal'
import { PiedMobile } from '@/components/PiedMobile'
import { ThemeProvider, NO_FLASH_SCRIPT } from '@/lib/theme'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://no-code-hub.fr'),
  title: {
    default: 'Bertrand Cabanes — Product Builder · NO-CODE-HUB',
    template: '%s | Bertrand Cabanes',
  },
  description: "Expert ERP/AS400 reconverti au développement numérique. Je construis des outils SaaS avec FastAPI, Next.js et l'IA. Découvrez NO-CODE-HUB.",
  // Canonique de l'accueil. `www.no-code-hub.fr` et la racine servent le même
  // site en 200 depuis la correction DNS du 20/10 : sans cette balise, Google
  // voit deux sites jumeaux et répartit les signaux entre eux.
  // Toute page déclarant `metadata` sans `alternates` hérite de celle-ci —
  // les pages légales posent donc la leur (voir src/app/(legal)).
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Bertrand Cabanes — Product Builder · NO-CODE-HUB',
    description: "Expert ERP/AS400 reconverti au développement numérique. Je construis des outils SaaS avec FastAPI, Next.js et l'IA.",
    siteName: 'NO-CODE-HUB',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Bertrand Cabanes — Product Builder',
    description: "Expert ERP reconverti. Je construis des SaaS avec FastAPI, Next.js et l'IA.",
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: NO_FLASH_SCRIPT }} />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
          <ScrollReveal />
          <CookieBanner />
          {/* `kit-chat` : sert à remonter la bulle au-dessus du pied de page figé du
              téléphone (globals.css) sans toucher au kit. */}
          <div className="kit-chat">
            <ChatWidget
              siteName="NO-CODE-HUB"
              greeting="Bonjour ! Je suis là pour vous aider à découvrir les outils NO-CODE-HUB. Que cherchez-vous ?"
              email="contact@no-code-hub.fr"
            />
          </div>
          <PiedMobile />
        </ThemeProvider>
      </body>
    </html>
  )
}
