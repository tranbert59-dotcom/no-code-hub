'use client'

import { useEffect, useRef, useState } from 'react'
import { ACCENTS, useTheme } from '@/lib/theme'
import { useDict } from '@/lib/i18n'

function SunIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  )
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  )
}

const btn =
  'inline-flex items-center justify-center rounded-lg text-fg-muted hover:text-fg hover:bg-surface-3 transition-colors'

export function SettingsControls({ className = '' }: { className?: string }) {
  const { theme, toggleTheme, lang, toggleLang, accent, setAccent } = useTheme()
  const t = useDict(lang)
  const [open, setOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)

  // Fermeture du popover couleur au clic extérieur / Échap.
  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {/* Thème clair / sombre */}
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={`${t.settings.theme} — ${theme === 'dark' ? t.settings.light : t.settings.dark}`}
        title={theme === 'dark' ? t.settings.light : t.settings.dark}
        className={`${btn} w-9 h-9`}
      >
        {theme === 'dark' ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
      </button>

      {/* Langue FR / EN */}
      <button
        type="button"
        onClick={toggleLang}
        aria-label={`${t.settings.language} — ${lang === 'fr' ? 'English' : 'Français'}`}
        title={lang === 'fr' ? 'English' : 'Français'}
        className={`${btn} h-9 px-2.5 text-xs font-semibold tracking-wide`}
      >
        <span className={lang === 'fr' ? 'text-fg' : ''}>FR</span>
        <span className="mx-1 text-fg-subtle">/</span>
        <span className={lang === 'en' ? 'text-fg' : ''}>EN</span>
      </button>

      {/* Couleur d'accent */}
      <div ref={wrapRef} className="relative">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={t.settings.color}
          aria-expanded={open}
          title={t.settings.color}
          className={`${btn} w-9 h-9`}
        >
          <span className="w-4 h-4 rounded-full bg-accent ring-2 ring-line" />
        </button>

        {open && (
          <div
            role="menu"
            className="absolute right-0 mt-2 p-3 rounded-xl bg-surface-2 border border-line shadow-xl shadow-black/10 z-50"
          >
            <p className="text-[11px] font-semibold uppercase tracking-wider text-fg-subtle mb-2 px-0.5">
              {t.settings.color}
            </p>
            <div className="grid grid-cols-3 gap-2">
              {ACCENTS.map((a) => {
                const active = a.id === accent
                return (
                  <button
                    key={a.id}
                    type="button"
                    onClick={() => { setAccent(a.id); setOpen(false) }}
                    aria-label={lang === 'fr' ? a.labelFr : a.labelEn}
                    aria-pressed={active}
                    title={lang === 'fr' ? a.labelFr : a.labelEn}
                    className={`w-9 h-9 rounded-lg flex items-center justify-center transition-transform hover:scale-105 ${
                      active ? 'ring-2 ring-offset-2 ring-offset-surface-2 ring-fg' : ''
                    }`}
                    style={{ background: a.hex }}
                  >
                    {active && (
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
