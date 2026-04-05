'use client'
import { useState, useEffect } from 'react'
import { useCookieConsent } from './useCookieConsent'
import { CookiePreferencesModal } from './CookiePreferencesModal'
import Link from 'next/link'

export function CookieBanner() {
  const { consent, acceptAll, rejectAll } = useCookieConsent()
  const [visible, setVisible]   = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  // Afficher le bandeau seulement si aucun choix n'a été fait
  useEffect(() => {
    if (!consent.decided) setVisible(true)
    else setVisible(false)
  }, [consent.decided])

  // Écouter le bouton "Gérer mes cookies" du footer
  useEffect(() => {
    // Retry car le footer peut se monter après le CookieBanner
    const attach = () => {
      const btn = document.getElementById('kit-open-cookie-prefs')
      if (!btn) return
      const handler = () => setModalOpen(true)
      btn.addEventListener('click', handler)
      return () => btn.removeEventListener('click', handler)
    }
    const cleanup = attach()
    // Second essai après hydratation complète
    const timer = setTimeout(attach, 500)
    return () => { cleanup?.(); clearTimeout(timer) }
  }, [])

  if (!visible && !modalOpen) return null

  return (
    <>
      {/* Bandeau */}
      {visible && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Gestion des cookies"
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
        >
          <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-2xl shadow-2xl p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                  Nous utilisons des cookies
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  Des cookies essentiels sont nécessaires au fonctionnement du site.
                  D&apos;autres nous aident à améliorer votre expérience.{' '}
                  <Link href="/cookies" className="text-blue-600 hover:underline">
                    En savoir plus
                  </Link>
                </p>
              </div>
              <div className="flex flex-wrap gap-2 shrink-0">
                <button
                  onClick={rejectAll}
                  className="text-xs px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                >
                  Refuser
                </button>
                <button
                  onClick={() => setModalOpen(true)}
                  className="text-xs px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                >
                  Personnaliser
                </button>
                <button
                  onClick={acceptAll}
                  className="text-xs px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400 focus-visible:outline-none"
                >
                  Tout accepter
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal préférences */}
      {modalOpen && (
        <CookiePreferencesModal onClose={() => setModalOpen(false)} />
      )}
    </>
  )
}
