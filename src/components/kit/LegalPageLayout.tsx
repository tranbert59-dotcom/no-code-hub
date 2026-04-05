import Link from 'next/link'
import { Footer } from './Footer'

export function LegalPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-gray-800 dark:text-gray-200">
      <div className="flex-1 max-w-3xl mx-auto w-full px-6 py-16">
        <Link href="/" className="text-sm text-blue-600 hover:underline mb-8 inline-block">
          ← Retour
        </Link>
        {children}
      </div>
      <Footer
        siteName="NO-CODE-HUB"
        baseline="Des outils no-code pour créer, analyser, organiser."
        contact={{ email: 'contact@no-code-hub.fr' }}
      />
    </div>
  )
}
