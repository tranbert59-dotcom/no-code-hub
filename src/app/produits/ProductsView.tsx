'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Footer } from '@/components/kit/Footer'
import { Navbar } from '@/components/Navbar'
import { ProductCard } from '@/components/ProductCard'
import { PRODUCTS, type ProductStatus } from '@/lib/products'
import { useTheme } from '@/lib/theme'
import { useDict } from '@/lib/i18n'

type Filter = 'all' | ProductStatus

const FILTERS: Filter[] = ['all', 'live', 'test', 'soon']

export function ProductsView() {
  const { lang } = useTheme()
  const t = useDict(lang)
  const [filter, setFilter] = useState<Filter>('all')

  const label = (f: Filter) => (f === 'all' ? t.products.filterAll : t.projects[f])
  const count = (f: Filter) => (f === 'all' ? PRODUCTS.length : PRODUCTS.filter((p) => p.status === f).length)

  // On garde l'index d'origine : les textes traduits sont indexés sur PRODUCTS.
  const visible = PRODUCTS.map((product, i) => ({ product, copy: t.projects.items[i] }))
    .filter(({ product }) => filter === 'all' || product.status === filter)

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Navbar />

      {/* ── EN-TÊTE ── */}
      <section className="px-6 pt-20 pb-12 bg-gradient-to-br from-surface-2 to-surface">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 px-4 py-1.5 rounded-full">
            {t.products.badge}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-fg mb-4">{t.products.title}</h1>
          <p className="text-fg-muted text-sm sm:text-base max-w-2xl mx-auto">{t.products.subtitle}</p>

          {/* Filtres par statut */}
          <div className="flex flex-wrap justify-center gap-2 mt-10" role="group" aria-label={t.products.badge}>
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-colors
                  ${filter === f
                    ? 'bg-accent text-accent-fg border-accent'
                    : 'bg-card text-fg-muted border-line hover:border-accent/50 hover:text-fg'}`}
              >
                {label(f)}
                <span className={`text-xs ${filter === f ? 'text-accent-fg/80' : 'text-fg-subtle'}`}>{count(f)}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATALOGUE ── */}
      <section className="px-6 py-12 bg-surface flex-1">
        <div className="max-w-5xl mx-auto">
          {visible.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {visible.map(({ product, copy }) => (
                <ProductCard key={product.name} product={product} copy={copy} labels={t.projects} detailed />
              ))}
            </div>
          ) : (
            <p className="text-center text-fg-muted text-sm py-12">{t.products.empty}</p>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 py-16 bg-accent/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-fg mb-3">{t.products.ctaTitle}</h2>
          <p className="text-fg-muted text-sm mb-8">{t.products.ctaText}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-accent hover:bg-accent-hover text-accent-fg font-semibold text-sm transition-colors shadow-lg shadow-accent/20"
            >
              {t.products.ctaContact}
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-line hover:border-fg-subtle text-fg-muted hover:text-fg font-semibold text-sm transition-colors"
            >
              <span aria-hidden="true">←</span>
              {t.products.back}
            </Link>
          </div>
        </div>
      </section>

      <Footer
        siteName="NO-CODE-HUB"
        baseline={t.footer.baseline}
        accentColor="rgb(var(--accent))"
        contact={{ email: 'contact@no-code-hub.fr' }}
      />
    </div>
  )
}
