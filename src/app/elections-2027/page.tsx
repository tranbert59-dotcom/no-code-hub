import type { Metadata } from 'next'
import { ElectionsView } from './ElectionsView'

export const metadata: Metadata = {
  title: 'Les élections 2027 — NO-CODE-HUB',
  description:
    'Le site citoyen des élections 2027 : qui gouverne, qui se présente, où en est le pays. Données publiques, neutres et sourcées. Accès sur invitation pendant les dernières relectures.',
  alternates: { canonical: '/elections-2027' },
}

export default function Elections2027Page() {
  return <ElectionsView />
}
