import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CookieBanner } from '@/components/kit/CookieBanner'
import { ChatWidget } from '@/components/kit/ChatWidget'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'NO-CODE-HUB — Outils intelligents pour votre activité',
    template: '%s | NO-CODE-HUB',
  },
  description: "NO-CODE-HUB regroupe des outils intelligents pour créer, automatiser et sécuriser vos processus métiers grâce à l'IA et au no-code.",
  openGraph: {
    title: 'NO-CODE-HUB — Outils intelligents pour votre activité',
    description: "NO-CODE-HUB regroupe des outils intelligents pour créer, automatiser et sécuriser vos processus métiers grâce à l'IA et au no-code.",
    siteName: 'NO-CODE-HUB',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'NO-CODE-HUB',
    description: 'Des outils no-code pour créer, analyser, organiser.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
        <CookieBanner />
        <ChatWidget
          siteName="NO-CODE-HUB"
          greeting="Bonjour ! Je suis là pour vous aider à découvrir les outils NO-CODE-HUB. Que cherchez-vous ?"
          email="contact@no-code-hub.fr"
        />
      </body>
    </html>
  )
}
