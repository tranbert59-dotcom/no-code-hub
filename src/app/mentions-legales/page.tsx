import { LegalPageLayout } from '@/components/kit/LegalPageLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales — NO-CODE-HUB',
  alternates: { canonical: '/mentions-legales' },
}

export default function MentionsLegalesPage() {
  return (
    <LegalPageLayout>
      <h1 className="text-3xl font-bold mb-2">Mentions légales</h1>
      <p className="text-sm text-fg-subtle mb-10">Dernière mise à jour : avril 2026</p>

      <section className="space-y-8 text-sm leading-relaxed">

        <div>
          <h2 className="font-semibold text-base mb-2">1. Éditeur du site</h2>
          <ul className="space-y-1 text-fg-muted">
            <li><strong className="text-fg">Nom :</strong> CABANES BERTRAND</li>
            <li><strong className="text-fg">Statut :</strong> Entrepreneur individuel (EI)</li>
            <li><strong className="text-fg">SIREN :</strong> 530 253 160</li>
            <li><strong className="text-fg">SIRET :</strong> 530 253 160 00010</li>
            <li><strong className="text-fg">Code APE :</strong> 6202A — Conseil en systèmes et logiciels informatiques</li>
            <li><strong className="text-fg">Site :</strong> no-code-hub.fr</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-base mb-2">2. Directeur de la publication</h2>
          <p className="text-fg-muted">Bertrand Cabanes</p>
        </div>

        <div>
          <h2 className="font-semibold text-base mb-2">3. Contact</h2>
          <p>
            <a href="mailto:contact@no-code-hub.fr" className="text-accent hover:underline">
              contact@no-code-hub.fr
            </a>
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-base mb-2">4. Hébergement</h2>
          <ul className="space-y-1 text-fg-muted">
            <li><strong className="text-fg">Hébergeur :</strong> Hostinger International Ltd</li>
            <li>61 Lordou Vironos Street, 6023 Larnaca, Chypre</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-base mb-2">5. Propriété intellectuelle</h2>
          <p className="text-fg-muted">
            L&apos;ensemble des contenus présents sur ce site (textes, images, logos, éléments graphiques, code)
            sont protégés par le droit de la propriété intellectuelle.
            Toute reproduction, distribution ou utilisation sans autorisation préalable est interdite.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-base mb-2">6. Responsabilité</h2>
          <p className="text-fg-muted">
            Les informations présentes sur ce site sont fournies à titre indicatif.
            L&apos;éditeur ne saurait être tenu responsable des erreurs, omissions ou résultats obtenus
            par un usage inapproprié de ces informations.
          </p>
        </div>

      </section>
    </LegalPageLayout>
  )
}
