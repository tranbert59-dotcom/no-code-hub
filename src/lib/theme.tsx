'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

// ── Types & constantes ────────────────────────────────────────────────────

export type Theme = 'light' | 'dark'
export type Lang = 'fr' | 'en'
export type Accent = 'blue' | 'emerald' | 'violet' | 'amber' | 'rose' | 'cyan'

export const ACCENTS: { id: Accent; hex: string; labelFr: string; labelEn: string }[] = [
  { id: 'blue', hex: '#2563eb', labelFr: 'Bleu', labelEn: 'Blue' },
  { id: 'emerald', hex: '#059669', labelFr: 'Émeraude', labelEn: 'Emerald' },
  { id: 'violet', hex: '#7c3aed', labelFr: 'Violet', labelEn: 'Violet' },
  { id: 'amber', hex: '#d97706', labelFr: 'Ambre', labelEn: 'Amber' },
  { id: 'rose', hex: '#e11d48', labelFr: 'Rose', labelEn: 'Rose' },
  { id: 'cyan', hex: '#0891b2', labelFr: 'Cyan', labelEn: 'Cyan' },
]

const STORAGE = {
  theme: 'nch.theme',
  lang: 'nch.lang',
  accent: 'nch.accent',
} as const

const DEFAULTS = { theme: 'light' as Theme, lang: 'fr' as Lang, accent: 'blue' as Accent }

// ── Application au <html> ─────────────────────────────────────────────────

function apply(theme: Theme, lang: Lang, accent: Accent) {
  const root = document.documentElement
  root.classList.toggle('dark', theme === 'dark')
  root.dataset.accent = accent
  root.setAttribute('lang', lang)
  root.style.colorScheme = theme
}

// ── Contexte ──────────────────────────────────────────────────────────────

interface ThemeCtx {
  theme: Theme
  lang: Lang
  accent: Accent
  ready: boolean
  setTheme: (t: Theme) => void
  toggleTheme: () => void
  setLang: (l: Lang) => void
  toggleLang: () => void
  setAccent: (a: Accent) => void
}

const Ctx = createContext<ThemeCtx | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(DEFAULTS.theme)
  const [lang, setLangState] = useState<Lang>(DEFAULTS.lang)
  const [accent, setAccentState] = useState<Accent>(DEFAULTS.accent)
  const [ready, setReady] = useState(false)

  // Hydratation depuis le <html> (posé par le script anti-FOUC) + localStorage.
  useEffect(() => {
    const root = document.documentElement
    const initialTheme: Theme = root.classList.contains('dark') ? 'dark' : 'light'
    const initialAccent = (root.dataset.accent as Accent) || DEFAULTS.accent
    const initialLang = (root.getAttribute('lang') as Lang) || DEFAULTS.lang
    setThemeState(initialTheme)
    setAccentState(initialAccent)
    setLangState(initialLang)
    setReady(true)
    // Transitions activées seulement après le premier rendu (évite le flash).
    root.classList.add('theme-transition')
  }, [])

  const setTheme = (t: Theme) => {
    setThemeState(t)
    apply(t, lang, accent)
    try { localStorage.setItem(STORAGE.theme, t) } catch {}
  }
  const setLang = (l: Lang) => {
    setLangState(l)
    apply(theme, l, accent)
    try { localStorage.setItem(STORAGE.lang, l) } catch {}
  }
  const setAccent = (a: Accent) => {
    setAccentState(a)
    apply(theme, lang, a)
    try { localStorage.setItem(STORAGE.accent, a) } catch {}
  }

  const value: ThemeCtx = {
    theme, lang, accent, ready,
    setTheme,
    toggleTheme: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
    setLang,
    toggleLang: () => setLang(lang === 'fr' ? 'en' : 'fr'),
    setAccent,
  }

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useTheme() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}

/** Script inline injecté dans le <head> — applique le choix avant le premier paint. */
export const NO_FLASH_SCRIPT = `
(function(){
  try {
    var t = localStorage.getItem('${STORAGE.theme}');
    if (!t) t = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    var a = localStorage.getItem('${STORAGE.accent}') || '${DEFAULTS.accent}';
    var l = localStorage.getItem('${STORAGE.lang}') || '${DEFAULTS.lang}';
    var r = document.documentElement;
    if (t === 'dark') r.classList.add('dark');
    r.dataset.accent = a;
    r.setAttribute('lang', l);
    r.style.colorScheme = t;
  } catch (e) {}
})();
`
