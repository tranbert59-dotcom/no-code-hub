import { LegalPageLayout } from '@/components/kit/LegalPageLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales — NO-CODE-HUB',
}

export default function MentionsLegalesPage() {
  return (
    <LegalPageLayout>
      <h1 className="text-3xl font-bold mb-2">Mentions légales</h1>
      <p className="text-sm text-gray-500 mb-10">Dernière mise à jour : avril 2026</p>

      <section className="space-y-8 text-sm leading-relaxed">

        <div>
          <h2 className="font-semibold text-base mb-2">1. Éditeur du site</h2>
          <ul className="space-y-1 text-gray-600 dark:text-gray-400">
            <li><strong className="text-gray-800 dark:text-gray-200">Nom :</strong> CABANES BERTRAND</li>
            <li><strong className="text-gray-800 dark:text-gray-200">Statut :</strong> Entrepreneur individuel (EI)</li>
            <li><strong className="text-gray-800 dark:text-gray-200">SIREN :</strong> 530 253 160</li>
            <li><strong className="text-gray-800 dark:text-gray-200">SIRET :</strong> 530 253 160 00010</li>
            <li><strong className="text-gray-800 dark:text-gray-200">Code APE :</strong> 6202A — Conseil en systèmes et logiciels informatiques</li>
            <li><strong className="text-gray-800 dark:text-gray-200">Site :</strong> no-code-hub.fr</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-base mb-2">2. Directeur de la publication</h2>
          <p className="text-gray-600 dark:text-gray-400">Bertrand Cabanes</p>
        </div>

        <div>
          <h2 className="font-semibold text-base mb-2">3. Contact</h2>
          <p>
            <a href="mailto:contact@no-code-hub.fr" className="text-blue-600 hover:underline">
              contact@no-code-hub.fr
            </a>
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-base mb-2">4. Hébergement</h2>
          <ul className="space-y-1 text-gray-600 dark:text-gray-400">
            <li><strong className="text-gray-800 dark:text-gray-200">Hébergeur :</strong> Hostinger International Ltd</li>
            <li>61 Lordou Vironos Street, 6023 Larnaca, Chypre</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-base mb-2">5. Propriété intellectuelle</h2>
          <p className="text-gray-600 dark:text-gray-400">
            L&apos;ensemble des contenus présents sur ce site (textes, images, logos, éléments graphiques, code)
            sont protégés par le droit de la propriété intellectuelle.
            Toute reproduction, distribution ou utilisation sans autorisation préalable est interdite.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-base mb-2">6. Responsabilité</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Les informations présentes sur ce site sont fournies à titre indicatif.
            L&apos;éditeur ne saurait être tenu responsable des erreurs, omissions ou résultats obtenus
            par un usage inapproprié de ces informations.
          </p>
        </div>

      </section>
    </LegalPageLayout>
  )
}
