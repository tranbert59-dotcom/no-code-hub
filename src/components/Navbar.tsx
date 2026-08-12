'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Logo } from '@/components/Logo'

const LINKEDIN_URL = 'https://www.linkedin.com/in/bertrand-cabanes-1965b211/'

const NAV_LINKS = [
  { href: '#parcours', label: 'Parcours' },
  { href: '#erp', label: 'JDE · AS400', accent: 'text-amber-500 hover:text-amber-400 font-medium' },
  { href: '#builder', label: 'Product Builder', accent: 'text-blue-400 hover:text-blue-300 font-medium' },
  { href: '#projets', label: 'Projets' },
  { href: '#contact', label: 'Contact' },
]

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <nav className="sticky top-0 z-30 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="group" onClick={close}>
          <Logo size={36} textClassName="group-hover:text-blue-400 transition-colors text-lg" />
        </Link>

        {/* Nav desktop */}
        <div className="hidden sm:flex items-center gap-6 text-sm text-gray-400">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className={l.accent ?? 'hover:text-white transition-colors'}>
              {l.label}
            </a>
          ))}
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
          >
            <LinkedInIcon className="w-4 h-4" />
            LinkedIn
          </a>
        </div>

        {/* Bouton hamburger (mobile) */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          className="sm:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 rounded-lg text-gray-300 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Panneau mobile déroulant */}
      {open && (
        <div className="sm:hidden border-t border-slate-800 bg-slate-900/95 backdrop-blur-sm">
          <div className="px-6 py-4 flex flex-col">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                className={`py-3 border-b border-slate-800/70 text-base transition-colors ${
                  l.accent ?? 'text-gray-300 hover:text-white'
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="mt-4 flex items-center justify-center gap-1.5 px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
            >
              <LinkedInIcon className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
