import type { Metadata } from 'next'
import { getPosts } from '@/lib/blog'
import { BlogIndexView } from './BlogViews'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Notes de Product Builder : de l’ERP au no-code, de l’idée au produit en ligne.',
  alternates: { canonical: '/blog' },
}

export default function BlogPage() {
  return <BlogIndexView posts={getPosts()} />
}
