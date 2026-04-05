'use client'
import { useState, useEffect, useRef } from 'react'
import { useCookieConsent } from './useCookieConsent'

interface Props {
  onClose: () => void
}

interface Category {
  key:         'functional' | 'analytics' | 'marketing'
  label:       string
  description: string
  required?:   boolean
}

const CATEGORIES: Category[] = [
  {
    key:         'functional',
    label:       'Fonctionnels',
    description: 'Mémorisent vos préférences (thème, langue, etc.) pour améliorer votre expérience.',
  },
  {
    key:         'analytics',
    label:       'Analytics',
    description: "Mesure d'audience anonymisée pour comprendre comment le site est utilisé et l'améliorer.",
  },
  {
    key:         'marketing',
    label:       'Marketing',
    description: "Personnalisation des contenus et publicités selon vos centres d'intérêt (non activé actuellement).",
  },
]

export function CookiePreferencesModal({ onClose }: Props) {
  const { consent, acceptAll, rejectAll, saveCustom } = useCookieConsent()
  const closeRef = useRef<HTMLButtonElement>(null)

  const [prefs, setPrefs] = useState({
    functional: consent.functional,
    analytics:  consent.analytics,
    marketing:  consent.marketing,
  })

  // Focus le bouton fermer à l'ouverture
  useEffect(() => {
    closeRef.current?.focus()
  }, [])

  // Fermeture clavier Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  function toggle(key: 'functional' | 'analytics' | 'marketing') {
    setPrefs((p) => ({ ...p, [key]: !p[key] }))
  }

  function handleSave() {
    saveCustom(prefs)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-bold text-gray-900 dark:text-white text-lg">
              Préférences cookies
            </h2>
            <button
              ref={closeRef}
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-400 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
              aria-label="Fermer les préférences cookies"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
            Gérez vos préférences par catégorie. Les cookies essentiels ne peuvent pas être désactivés.
          </p>

          {/* Catégorie essentielle (locked) */}
          <div className="flex items-start gap-4 py-4 border-b border-gray-100 dark:border-slate-800">
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm text-gray-900 dark:text-white">Essentiels</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                Nécessaires au fonctionnement du site (authentification, sécurité). Ne peuvent pas être désactivés.
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-1.5 text-xs text-green-600 font-medium mt-0.5">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Toujours actif
            </div>
          </div>

          {/* Catégories configurables */}
          {CATEGORIES.map((cat) => (
            <div key={cat.key} className="flex items-start gap-4 py-4 border-b border-gray-100 dark:border-slate-800 last:border-0">
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm text-gray-900 dark:text-white">{cat.label}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{cat.description}</p>
              </div>
              <button
                role="switch"
                aria-checked={prefs[cat.key]}
                aria-label={`${cat.label} — ${prefs[cat.key] ? 'activé' : 'désactivé'}`}
                onClick={() => toggle(cat.key)}
                className={`shrink-0 mt-0.5 relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none ${
                  prefs[cat.key] ? 'bg-blue-600' : 'bg-gray-200 dark:bg-slate-700'
                }`}
              >
                <span
                  className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition-transform ${
                    prefs[cat.key] ? 'translate-x-[18px]' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>
          ))}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-2 mt-6">
            <button
              onClick={() => { rejectAll(); onClose() }}
              className="flex-1 text-sm px-4 py-2.5 rounded-xl border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
            >
              Tout refuser
            </button>
            <button
              onClick={() => { acceptAll(); onClose() }}
              className="flex-1 text-sm px-4 py-2.5 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
            >
              Tout accepter
            </button>
            <button
              onClick={handleSave}
              className="flex-1 text-sm px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
            >
              Enregistrer
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
