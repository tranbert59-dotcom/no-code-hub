'use client'
import { useState, useRef, useEffect } from 'react'

export interface ChatWidgetConfig {
  siteName?:   string
  greeting?:   string
  email?:      string
  quickLinks?: { label: string; href?: string; action?: () => void }[]
}

interface Message {
  from:    'bot' | 'user'
  text:    string
}

const DEFAULT_QUICK_LINKS = [
  { label: '🛠️ Quels outils proposez-vous ?' },
  { label: '💡 C\'est quoi le no-code ?' },
  { label: '🔒 Mes données sont-elles sécurisées ?' },
  { label: '🚀 Comment démarrer ?' },
  { label: '✉️ Contacter le support' },
]

const FAQ: Record<string, string> = {
  '🛠️ Quels outils proposez-vous ?':
    "NO-CODE-HUB propose CV Creator (CV professionnel), CyberHub (cybersécurité), Gestion Immobilière (biens locatifs) et Video Analyzer (analyse vidéo par IA).",
  '💡 C\'est quoi le no-code ?':
    "Le no-code permet de créer et automatiser des processus métiers sans écrire de code. Nos outils sont conçus pour être accessibles à tous les professionnels.",
  '🔒 Mes données sont-elles sécurisées ?':
    "Oui ! Nos données sont hébergées en Europe, nous respectons le RGPD et utilisons des protocoles de sécurité modernes.",
  '🚀 Comment démarrer ?':
    "Cliquez sur \"Découvrir les outils\" pour explorer nos produits. Chaque outil dispose d'un accès gratuit ou d'une période d'essai.",
  '✉️ Contacter le support':
    '__email__',
}

export function ChatWidget({
  siteName   = 'NO-CODE-HUB',
  greeting   = 'Bonjour ! Comment puis-je vous aider ?',
  email      = 'contact@no-code-hub.fr',
  quickLinks = DEFAULT_QUICK_LINKS,
}: ChatWidgetConfig) {
  const [open, setOpen]       = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { from: 'bot', text: greeting },
  ])
  const [showQuick, setShowQuick] = useState(true)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  function handleQuick(label: string) {
    setShowQuick(false)
    setMessages((prev) => [...prev, { from: 'user', text: label }])

    const answer = FAQ[label]
    setTimeout(() => {
      if (answer === '__email__') {
        setMessages((prev) => [
          ...prev,
          {
            from: 'bot',
            text: `Envoyez-nous un email à ${email} — nous répondons sous 24h. 🙌`,
          },
        ])
      } else if (answer) {
        setMessages((prev) => [...prev, { from: 'bot', text: answer }])
      } else {
        // Lien externe
        const link = quickLinks.find((q) => q.label === label)
        if (link?.href) window.open(link.href, '_blank')
        if (link?.action) link.action()
      }
    }, 400)
  }

  function handleReset() {
    setMessages([{ from: 'bot', text: greeting }])
    setShowQuick(true)
  }

  return (
    <>
      {/* Bulle flottante */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Fermer le chat' : 'Ouvrir le chat'}
        aria-expanded={open}
        className="fixed bottom-6 right-6 z-40 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:outline-none"
        style={{ width: 52, height: 52 }}
      >
        {open ? (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3-2-2z" />
          </svg>
        )}
      </button>

      {/* Fenêtre */}
      {open && (
        <div
          role="dialog"
          aria-label={`Assistant ${siteName}`}
          className="fixed bottom-20 right-3 left-3 sm:left-auto sm:right-6 sm:w-80 z-40 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-slate-700 flex flex-col overflow-hidden"
          style={{ maxHeight: '70vh' }}
        >
          {/* Header */}
          <div className="bg-blue-600 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white font-semibold text-sm">{siteName}</span>
            </div>
            <button
              onClick={handleReset}
              aria-label="Recommencer la conversation"
              title="Recommencer"
              className="text-blue-200 hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-white focus-visible:outline-none rounded"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-3 py-2 rounded-xl text-xs leading-relaxed ${
                  msg.from === 'user'
                    ? 'bg-blue-600 text-white rounded-br-sm'
                    : 'bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-gray-200 rounded-bl-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Questions rapides */}
            {showQuick && (
              <div className="space-y-1.5 pt-1">
                {quickLinks.map((q) => (
                  <button
                    key={q.label}
                    onClick={() => handleQuick(q.label)}
                    className="w-full text-left text-xs px-3 py-2 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:border-blue-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Footer */}
          <div className="border-t border-gray-100 dark:border-slate-800 px-4 py-2.5 flex items-center justify-between">
            <a
              href={`mailto:${email}`}
              className="text-xs text-blue-600 hover:underline"
            >
              ✉️ Email direct
            </a>
            <span className="text-xs text-gray-400">
              Réponse sous 24h
            </span>
          </div>
        </div>
      )}
    </>
  )
}
