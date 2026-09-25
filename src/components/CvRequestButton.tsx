'use client'

import { useEffect, useRef, useState, type FormEvent } from 'react'
import { useTheme } from '@/lib/theme'
import { useDict } from '@/lib/i18n'

type Profile = 'as400' | 'reconversion'
type FormatKey = 'presentation' | 'ats' | 'ats100' | 'design'
type Status = 'idle' | 'sending' | 'ok' | 'error' | 'invalid'

const FORMAT_KEYS: FormatKey[] = ['presentation', 'ats', 'ats100', 'design']

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  )
}

export function CvRequestButton({
  profile,
  label,
  className,
}: {
  profile: Profile
  label: string
  className: string
}) {
  const { lang } = useTheme()
  const t = useDict(lang).cv
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState<Status>('idle')
  const [result, setResult] = useState<{ url: string; filename: string } | null>(null)
  const [form, setForm] = useState({
    name: '', firstName: '', email: '', role: '', reason: '', format: '' as '' | FormatKey, consent: false, website: '',
  })
  const firstFieldRef = useRef<HTMLInputElement>(null)

  // Ouverture : focus + fermeture à Échap + blocage du scroll de fond.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(false); reset() } }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    const id = window.setTimeout(() => firstFieldRef.current?.focus(), 50)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      window.clearTimeout(id)
    }
  }, [open])

  function reset() {
    setStatus('idle')
    setResult(null)
    setForm({ name: '', firstName: '', email: '', role: '', reason: '', format: '', consent: false, website: '' })
  }

  function triggerDownload(url: string, filename: string) {
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    a.rel = 'noopener'
    document.body.appendChild(a)
    a.click()
    a.remove()
  }

  async function submit(e: FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const r = await fetch('/api/cv-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, profile }),
      })
      if (r.ok) {
        const data = (await r.json()) as { url: string; filename: string }
        setResult(data)
        setStatus('ok')
        triggerDownload(data.url, data.filename)
      } else {
        setStatus(r.status === 422 ? 'invalid' : 'error')
      }
    } catch {
      setStatus('error')
    }
  }

  const input =
    'w-full rounded-xl bg-surface text-fg placeholder:text-fg-subtle px-4 py-2.5 text-sm border border-line ' +
    'focus:outline-none focus:ring-2 focus:ring-accent/50'
  const fmtDesc = form.format ? t.formats[form.format].desc : ''

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        <DownloadIcon className="w-4 h-4" />
        {label}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cv-modal-title"
        >
          {/* Fond */}
          <button
            type="button"
            aria-label={t.close}
            onClick={() => { setOpen(false); reset() }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Panneau */}
          <div className="relative w-full sm:max-w-lg max-h-[92vh] overflow-y-auto bg-card border border-line rounded-t-2xl sm:rounded-2xl shadow-2xl">
            <div className="sticky top-0 flex items-start justify-between gap-3 bg-card/95 backdrop-blur-sm border-b border-line px-6 py-4">
              <div>
                <h3 id="cv-modal-title" className="text-lg font-bold text-fg">{t.title}</h3>
                <p className="text-xs text-fg-muted mt-0.5">{t.intro}</p>
              </div>
              <button
                type="button"
                onClick={() => { setOpen(false); reset() }}
                aria-label={t.close}
                className="shrink-0 w-8 h-8 rounded-lg text-fg-muted hover:text-fg hover:bg-surface-3 flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {status === 'ok' ? (
              <div className="px-6 py-8 text-center">
                <div className="w-12 h-12 rounded-full bg-green-500/15 text-green-600 dark:text-green-400 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-fg mb-5">{t.ok}</p>
                {result && (
                  <a
                    href={result.url}
                    download={result.filename}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-accent-hover text-accent-fg font-semibold text-sm transition-colors"
                  >
                    <DownloadIcon className="w-4 h-4" />
                    {t.download}
                  </a>
                )}
                <div>
                  <button
                    type="button"
                    onClick={() => { setOpen(false); reset() }}
                    className="mt-4 text-xs text-fg-muted hover:text-fg underline"
                  >
                    {t.close}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} className="px-6 py-5 space-y-3" noValidate>
                {/* Profil (lecture seule, issu du contexte) */}
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-fg-subtle uppercase tracking-wide font-semibold">{t.profileLabel}</span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-accent/10 text-accent font-semibold">
                    {t.profiles[profile]}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="block">
                    <span className="text-xs font-medium text-fg-muted">{t.name} *</span>
                    <input
                      ref={firstFieldRef}
                      className={input + ' mt-1'}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required maxLength={120} autoComplete="family-name"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-medium text-fg-muted">{t.firstName} <span className="text-fg-subtle">({t.optional})</span></span>
                    <input
                      className={input + ' mt-1'}
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      maxLength={120} autoComplete="given-name"
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="block">
                    <span className="text-xs font-medium text-fg-muted">{t.email} *</span>
                    <input
                      className={input + ' mt-1'} type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required maxLength={200} autoComplete="email"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-medium text-fg-muted">{t.role} <span className="text-fg-subtle">({t.optional})</span></span>
                    <input
                      className={input + ' mt-1'}
                      placeholder={t.rolePlaceholder}
                      value={form.role}
                      onChange={(e) => setForm({ ...form, role: e.target.value })}
                      maxLength={120}
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="text-xs font-medium text-fg-muted">{t.formatLabel} *</span>
                  <select
                    className={input + ' mt-1'}
                    value={form.format}
                    onChange={(e) => setForm({ ...form, format: e.target.value as FormatKey })}
                    required
                  >
                    <option value="" disabled>{t.formatPlaceholder}</option>
                    {FORMAT_KEYS.map((k) => (
                      <option key={k} value={k}>{t.formats[k].label}</option>
                    ))}
                  </select>
                  {fmtDesc && <span className="block mt-1 text-xs text-fg-subtle">{fmtDesc}</span>}
                </label>

                <label className="block">
                  <span className="text-xs font-medium text-fg-muted">{t.reason} <span className="text-fg-subtle">({t.optional})</span></span>
                  <textarea
                    className={input + ' mt-1 min-h-[72px] resize-y'}
                    placeholder={t.reasonPlaceholder}
                    value={form.reason}
                    onChange={(e) => setForm({ ...form, reason: e.target.value })}
                    maxLength={2000}
                  />
                </label>

                {/* Honeypot */}
                <input
                  type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true"
                  value={form.website}
                  onChange={(e) => setForm({ ...form, website: e.target.value })}
                  className="absolute -left-[9999px] h-0 w-0 opacity-0"
                />

                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                    required
                    className="mt-0.5 w-4 h-4 rounded border-line text-accent focus:ring-accent/50"
                  />
                  <span className="text-xs text-fg-muted leading-relaxed">{t.consent}</span>
                </label>

                <p className="text-[11px] text-fg-subtle leading-relaxed">🔒 {t.privacy}</p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-1">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-accent-hover text-accent-fg font-semibold text-sm transition-colors shadow-lg shadow-accent/20 disabled:opacity-60"
                  >
                    <DownloadIcon className="w-4 h-4" />
                    {status === 'sending' ? t.sending : t.submit}
                  </button>
                  <p className="text-xs" role="status" aria-live="polite">
                    {status === 'error' && <span className="text-red-600 dark:text-red-400">⚠️ {t.error}</span>}
                    {status === 'invalid' && <span className="text-amber-600 dark:text-amber-400">{t.invalid}</span>}
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
