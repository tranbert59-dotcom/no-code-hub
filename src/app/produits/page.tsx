import type { Metadata } from 'next'
import { ProductsView } from './ProductsView'

export const metadata: Metadata = {
  title: 'Produits NO-CODE-HUB',
  description:
    'Les outils SaaS construits par Bertrand Cabanes : pronostics Coupe du Monde, créateur de CV, site citoyen 2027, cybersécurité PME, gestion locative.',
  alternates: { canonical: '/produits' },
}

export default function ProduitsPage() {
  return <ProductsView />
}
