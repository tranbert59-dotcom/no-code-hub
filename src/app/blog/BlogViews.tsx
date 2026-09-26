'use client'

import Link from 'next/link'
import { Footer } from '@/components/kit/Footer'
import { Navbar } from '@/components/Navbar'
import { useTheme } from '@/lib/theme'
import { useDict } from '@/lib/i18n'
import type { PostMeta } from '@/lib/blog'

function formatDate(iso: string, lang: string) {
  const d = new Date(`${iso}T12:00:00`)
  return isNaN(d.getTime()) ? iso : d.toLocaleDateString(lang === 'en' ? 'en-GB' : 'fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
}

function Shell({ children }: { children: React.ReactNode }) {
  const { lang } = useTheme()
  const t = useDict(lang)
  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer
        siteName="NO-CODE-HUB"
        baseline={t.footer.baseline}
        accentColor="rgb(var(--accent))"
        contact={{ email: 'contact@no-code-hub.fr' }}
      />
    </div>
  )
}

function Meta({ post }: { post: PostMeta }) {
  const { lang } = useTheme()
  const t = useDict(lang)
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-fg-subtle">
      <time dateTime={post.date}>{formatDate(post.date, lang)}</time>
      <span aria-hidden="true">·</span>
      <span>{post.readingMinutes} {t.blog.minutes}</span>
      {post.draft && (
        <span className="font-semibold text-amber-700 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full">
          {t.blog.draft}
        </span>
      )}
    </div>
  )
}

export function BlogIndexView({ posts }: { posts: PostMeta[] }) {
  const { lang } = useTheme()
  const t = useDict(lang)
  return (
    <Shell>
      <section className="px-6 pt-20 pb-10 bg-gradient-to-br from-surface-2 to-surface">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 px-4 py-1.5 rounded-full">
            {t.blog.badge}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-fg mb-4">{t.blog.title}</h1>
          <p className="text-fg-muted text-sm sm:text-base">{t.blog.subtitle}</p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-3xl mx-auto space-y-5">
          {posts.length === 0 && <p className="text-center text-fg-muted text-sm py-12">{t.blog.empty}</p>}
          {posts.map((post) => (
            <article key={post.slug} className="bg-card rounded-2xl p-6 border border-line shadow-sm hover:border-accent/40 transition-colors">
              <Meta post={post} />
              <h2 className="text-lg font-bold text-fg mt-2 mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-accent transition-colors">{post.title}</Link>
              </h2>
              {post.description && <p className="text-sm text-fg-muted leading-relaxed mb-4">{post.description}</p>}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-card-2/70 text-fg-muted px-2 py-0.5 rounded-md font-mono">{tag}</span>
                  ))}
                </div>
                <Link href={`/blog/${post.slug}`} className="text-sm font-semibold text-accent hover:text-accent-hover">
                  {t.blog.read} <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Shell>
  )
}

export function BlogPostView({ post, html }: { post: PostMeta; html: string }) {
  const { lang } = useTheme()
  const t = useDict(lang)
  return (
    <Shell>
      <article className="px-6 pt-16 pb-20">
        <div className="max-w-2xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-fg-muted hover:text-accent mb-8">
            <span aria-hidden="true">←</span> {t.blog.back}
          </Link>
          <Meta post={post} />
          <h1 className="text-3xl sm:text-4xl font-bold text-fg mt-3 mb-4 leading-tight">{post.title}</h1>
          {post.description && <p className="text-lg text-fg-muted mb-10">{post.description}</p>}
          {/* Contenu issu des fichiers Markdown du repo (auteur de confiance), échappé par renderMarkdown. */}
          <div className="blog-prose" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </article>
    </Shell>
  )
}
