'use client'
import { useState, type FormEvent } from 'react'
import { useTheme } from '@/lib/theme'
import { useDict } from '@/lib/i18n'

type Status = 'idle' | 'sending' | 'ok' | 'error' | 'invalid'

export default function ContactForm() {
  const { lang } = useTheme()
  const t = useDict(lang).contact.form
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '', website: '' })

  async function submit(e: FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const r = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (r.ok) {
        setStatus('ok')
        setForm({ name: '', email: '', message: '', website: '' })
      } else {
        setStatus(r.status === 422 ? 'invalid' : 'error')
      }
    } catch {
      setStatus('error')
    }
  }

  const input =
    'w-full rounded-xl bg-white/95 text-slate-900 placeholder:text-slate-400 px-4 py-3 text-sm ' +
    'border border-white/40 focus:outline-none focus:ring-2 focus:ring-white/70'

  return (
    <form onSubmit={submit} className="text-left space-y-3" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          className={input}
          placeholder={t.name}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          maxLength={120}
          autoComplete="name"
        />
        <input
          className={input}
          type="email"
          placeholder={t.email}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          maxLength={200}
          autoComplete="email"
        />
      </div>
      <textarea
        className={input + ' min-h-[140px] resize-y'}
        placeholder={t.message}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        required
        minLength={10}
        maxLength={5000}
      />
      {/* Honeypot anti-spam : invisible pour un humain, rempli par les robots */}
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={(e) => setForm({ ...form, website: e.target.value })}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-white text-slate-900 hover:bg-white/90 font-semibold text-sm transition-colors shadow-lg disabled:opacity-60"
        >
          {status === 'sending' ? t.sending : t.send}
        </button>
        <p className="text-sm text-accent-fg/90" role="status" aria-live="polite">
          {status === 'ok' && '✅ ' + t.ok}
          {status === 'error' && '⚠️ ' + t.error}
          {status === 'invalid' && t.invalid}
        </p>
      </div>
    </form>
  )
}
