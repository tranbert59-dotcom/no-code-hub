import { LegalPageLayout } from '@/components/kit/LegalPageLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation — NO-CODE-HUB",
}

export default function CGUPage() {
  return (
    <LegalPageLayout>
      <h1 className="text-3xl font-bold mb-2">{"Conditions Générales d'Utilisation"}</h1>
      <p className="text-sm text-gray-500 mb-10">Dernière mise à jour : avril 2026</p>

      <section className="space-y-8 text-sm leading-relaxed">

        <div>
          <h2 className="font-semibold text-base mb-2">1. Objet</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Les présentes Conditions Générales d&apos;Utilisation (CGU) régissent l&apos;accès et l&apos;utilisation
            du site no-code-hub.fr et de l&apos;ensemble des outils de l&apos;écosystème NO-CODE-HUB.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-base mb-2">2. Éditeur</h2>
          <p className="text-gray-600 dark:text-gray-400">
            CABANES BERTRAND — EI — SIREN 530 253 160 — contact@no-code-hub.fr
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-base mb-2">3. Accès aux services</h2>
          <p className="text-gray-600 dark:text-gray-400">
            L&apos;accès au site est libre et gratuit. Certains outils nécessitent la création d&apos;un compte.
            L&apos;utilisateur s&apos;engage à fournir des informations exactes lors de son inscription
            et à maintenir la confidentialité de ses identifiants.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-base mb-2">4. Comportement de l&apos;utilisateur</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-3">
            L&apos;utilisateur s&apos;engage à :
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
            <li>Utiliser les services de façon licite et éthique</li>
            <li>Ne pas tenter de contourner les mesures de sécurité</li>
            <li>Ne pas diffuser de contenus illicites, diffamatoires ou portant atteinte à des droits tiers</li>
            <li>Ne pas utiliser les services à des fins de spam ou d&apos;automatisation abusive</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-base mb-2">5. Propriété intellectuelle</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Tous les éléments du site (textes, graphismes, logos, icônes, code source) sont
            la propriété exclusive de CABANES BERTRAND. Toute reproduction sans autorisation
            expresse est interdite.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-base mb-2">6. Disponibilité du service</h2>
          <p className="text-gray-600 dark:text-gray-400">
            L&apos;éditeur s&apos;efforce de maintenir le site accessible 24h/24, 7j/7.
            Des interruptions peuvent survenir pour maintenance ou cas de force majeure.
            L&apos;éditeur ne saurait être tenu responsable de ces indisponibilités.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-base mb-2">7. Liens hypertextes</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Le site peut contenir des liens vers des sites tiers. L&apos;éditeur n&apos;est pas responsable
            du contenu de ces sites et ne les approuve pas nécessairement.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-base mb-2">8. Modification des CGU</h2>
          <p className="text-gray-600 dark:text-gray-400">
            L&apos;éditeur se réserve le droit de modifier les présentes CGU à tout moment.
            Les utilisateurs seront informés par une mise à jour de la date en haut de cette page.
            La poursuite de l&apos;utilisation du site vaut acceptation des nouvelles CGU.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-base mb-2">9. Droit applicable</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Les présentes CGU sont soumises au droit français.
            Tout litige sera soumis à la compétence des tribunaux français.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-base mb-2">10. Contact</h2>
          <p className="text-gray-600 dark:text-gray-400">
            <a href="mailto:contact@no-code-hub.fr" className="text-blue-600 hover:underline">
              contact@no-code-hub.fr
            </a>
          </p>
        </div>

      </section>
    </LegalPageLayout>
  )
}
