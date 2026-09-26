'use client'

import type { ProductMeta } from '@/lib/products'

type Labels = {
  live: string
  test: string
  soon: string
  view: string
  testView: string
  protected: string
  inDev: string
}

type Props = {
  product: ProductMeta
  copy: { baseline: string; description: string; features?: string[] }
  labels: Labels
  /** Affiche la liste des fonctionnalités (page /produits). */
  detailed?: boolean
}

export function ProductCard({ product, copy, labels, detailed = false }: Props) {
  const isLive = product.status === 'live'
  const isTest = product.status === 'test'

  return (
    <div
      className={`group bg-card border rounded-2xl p-6 shadow-sm flex flex-col transition-all
        ${isLive
          ? 'border-green-500/30 hover:border-green-500/60 hover:shadow-md'
          : isTest
            ? 'border-amber-500/30 hover:border-amber-500/60 hover:shadow-md'
            : 'border-line hover:border-accent/40 hover:shadow-sm opacity-90'
        }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center
          ${isLive ? 'bg-green-500/10 text-green-600 dark:text-green-400'
            : isTest ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
            : 'bg-accent/10 text-accent'}`}>
          {product.icon}
        </div>
        {isLive ? (
          <span className="flex items-center gap-1.5 text-xs font-semibold text-green-700 dark:text-green-400 bg-green-500/10 px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            {labels.live}
          </span>
        ) : isTest ? (
          <span className="flex items-center gap-1.5 text-xs font-semibold text-amber-700 dark:text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            {labels.test}
          </span>
        ) : (
          <span className="text-xs font-medium text-fg-subtle bg-card-2/60 px-3 py-1 rounded-full">
            {labels.soon}
          </span>
        )}
      </div>

      <h3 className="font-bold text-fg text-base mb-1">{product.name}</h3>
      <p className="text-xs font-semibold text-accent mb-3">{copy.baseline}</p>
      <p className={`text-sm text-fg-muted leading-relaxed mb-4 ${detailed ? '' : 'flex-1'}`}>{copy.description}</p>

      {detailed && copy.features && (
        <ul className="space-y-2 mb-5 flex-1">
          {copy.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-xs text-fg-muted leading-relaxed">
              <span className="text-accent mt-0.5">✓</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Stack tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {product.stack.map((s) => (
          <span key={s} className="text-xs bg-card-2/70 text-fg-muted px-2 py-0.5 rounded-md font-mono">
            {s}
          </span>
        ))}
      </div>

      {product.href ? (
        <div className="flex items-center justify-between gap-2">
          <a
            href={product.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors
              ${isTest
                ? 'text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300'
                : 'text-green-700 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300'}`}
          >
            {isTest ? labels.testView : labels.view}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          {isTest && (
            <span className="inline-flex items-center gap-1 text-xs text-fg-subtle">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              {labels.protected}
            </span>
          )}
        </div>
      ) : (
        <span className="text-xs text-fg-subtle italic">{labels.inDev}</span>
      )}
    </div>
  )
}
