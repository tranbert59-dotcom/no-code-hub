import fs from 'node:fs'
import path from 'node:path'

// Blog en Markdown dans le repo : un fichier par article dans content/blog/<slug>.md.
// En-tête (front-matter) entre deux lignes « --- » :
//   title: Titre            (obligatoire)
//   date: 2026-09-27        (obligatoire, AAAA-MM-JJ)
//   description: Résumé     (liste + balise meta)
//   tags: no-code, ERP      (optionnel, séparés par des virgules)
//   draft: true             (optionnel — visible en dev, invisible en prod)
// Pas de dépendance : le rendu Markdown ci-dessous couvre titres, paragraphes, listes,
// citations, blocs de code, gras/italique/code en ligne, liens et séparateurs.

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export type PostMeta = {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
  draft: boolean
  readingMinutes: number
}

export type Post = PostMeta & { html: string }

const showDrafts = process.env.NODE_ENV !== 'production'

function parseFrontMatter(raw: string): { data: Record<string, string>; body: string } {
  const text = raw.replace(/\r\n/g, '\n')
  const m = /^---\n([\s\S]*?)\n---\n?/.exec(text)
  if (!m) return { data: {}, body: text }
  const data: Record<string, string> = {}
  for (const line of m[1].split('\n')) {
    const i = line.indexOf(':')
    if (i > 0) data[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^["']|["']$/g, '')
  }
  return { data, body: text.slice(m[0].length) }
}

function readPost(slug: string): (PostMeta & { body: string }) | null {
  const file = path.join(BLOG_DIR, `${slug}.md`)
  if (!fs.existsSync(file)) return null
  const { data, body } = parseFrontMatter(fs.readFileSync(file, 'utf8'))
  if (!data.title || !data.date) return null
  const words = body.split(/\s+/).filter(Boolean).length
  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description ?? '',
    tags: data.tags ? data.tags.split(',').map((t) => t.trim()).filter(Boolean) : [],
    draft: data.draft === 'true',
    readingMinutes: Math.max(1, Math.round(words / 220)),
    body,
  }
}

function allSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md')).map((f) => f.slice(0, -3))
}

/** Articles visibles, du plus récent au plus ancien (brouillons exclus en prod). */
export function getPosts(): PostMeta[] {
  return allSlugs()
    .map(readPost)
    .filter((p): p is PostMeta & { body: string } => !!p && (showDrafts || !p.draft))
    .sort((a, b) => b.date.localeCompare(a.date))
    .map(({ body, ...meta }) => { void body; return meta })
}

/** Un article visible, ou null (inexistant, ou brouillon en prod). */
export function getPost(slug: string): Post | null {
  const post = readPost(slug)
  if (!post || (post.draft && !showDrafts)) return null
  const { body, ...meta } = post
  return { ...meta, html: renderMarkdown(body) }
}

// ── Rendu Markdown minimal ────────────────────────────────────────────────────

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function inline(s: string): string {
  const codes: string[] = []
  let out = escapeHtml(s).replace(/`([^`]+)`/g, (_, c) => `\u0000${codes.push(c) - 1}\u0000`)
  out = out
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*([^*\s][^*]*)\*/g, '$1<em>$2</em>')
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, text, href) => {
      const external = /^https?:\/\//.test(href)
      const safe = /^(https?:\/\/|\/|#|mailto:)/.test(href) ? href : '#'
      return `<a href="${safe}"${external ? ' target="_blank" rel="noopener noreferrer"' : ''}>${text}</a>`
    })
  return out.replace(/\u0000(\d+)\u0000/g, (_, i) => `<code>${codes[Number(i)]}</code>`)
}

export function renderMarkdown(md: string): string {
  const lines = md.replace(/\r\n/g, '\n').split('\n')
  const html: string[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (!line.trim()) { i++; continue }

    // Bloc de code ```
    if (line.startsWith('```')) {
      const buf: string[] = []
      i++
      while (i < lines.length && !lines[i].startsWith('```')) buf.push(lines[i++])
      i++
      html.push(`<pre><code>${escapeHtml(buf.join('\n'))}</code></pre>`)
      continue
    }

    const h = /^(#{1,4})\s+(.*)$/.exec(line)
    if (h) {
      const level = Math.max(h[1].length, 2) // # et ## → h2 : le h1 est le titre de l'article
      html.push(`<h${level}>${inline(h[2])}</h${level}>`)
      i++
      continue
    }

    if (/^(-{3,}|\*{3,})$/.test(line.trim())) { html.push('<hr />'); i++; continue }

    if (line.startsWith('>')) {
      const buf: string[] = []
      while (i < lines.length && lines[i].startsWith('>')) buf.push(lines[i++].replace(/^>\s?/, ''))
      html.push(`<blockquote><p>${inline(buf.join(' '))}</p></blockquote>`)
      continue
    }

    const ul = /^[-*]\s+/, ol = /^\d+\.\s+/
    if (ul.test(line) || ol.test(line)) {
      const re = ul.test(line) ? ul : ol
      const tag = re === ul ? 'ul' : 'ol'
      const items: string[] = []
      while (i < lines.length && re.test(lines[i])) items.push(`<li>${inline(lines[i++].replace(re, ''))}</li>`)
      html.push(`<${tag}>${items.join('')}</${tag}>`)
      continue
    }

    const buf: string[] = []
    while (
      i < lines.length && lines[i].trim() &&
      !/^(#{1,4}\s|```|>|[-*]\s|\d+\.\s)/.test(lines[i]) && !/^(-{3,}|\*{3,})$/.test(lines[i].trim())
    ) buf.push(lines[i++])
    html.push(`<p>${inline(buf.join(' '))}</p>`)
  }

  return html.join('\n')
}
