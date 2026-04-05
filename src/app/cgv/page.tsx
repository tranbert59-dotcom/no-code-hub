import { LegalPageLayout } from '@/components/kit/LegalPageLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente — NO-CODE-HUB',
}

export default function CGVPage() {
  return (
    <LegalPageLayout>
      <h1 className="text-3xl font-bold mb-2">Conditions Générales de Vente</h1>
      <p className="text-sm text-gray-500 mb-10">Dernière mise à jour : avril 2026</p>

      <section className="space-y-8 text-sm leading-relaxed">

        <div>
          <h2 className="font-semibold text-base mb-2">1. Vendeur</h2>
          <ul className="space-y-1 text-gray-600 dark:text-gray-400">
            <li><strong className="text-gray-800 dark:text-gray-200">Nom :</strong> CABANES BERTRAND</li>
            <li><strong className="text-gray-800 dark:text-gray-200">Statut :</strong> Entrepreneur individuel (EI)</li>
            <li><strong className="text-gray-800 dark:text-gray-200">SIREN :</strong> 530 253 160</li>
            <li><strong className="text-gray-800 dark:text-gray-200">SIRET :</strong> 530 253 160 00010</li>
            <li><strong className="text-gray-800 dark:text-gray-200">APE :</strong> 6202A</li>
            <li>
              <strong className="text-gray-800 dark:text-gray-200">Contact :</strong>{' '}
              <a href="mailto:contact@no-code-hub.fr" className="text-blue-600 hover:underline">contact@no-code-hub.fr</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-base mb-2">2. Champ d&apos;application</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Les présentes Conditions Générales de Vente (CGV) s&apos;appliquent à toute commande
            de services numériques (abonnements, licences, prestations) passée via les outils
            de l&apos;écosystème NO-CODE-HUB.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-base mb-2">3. Services proposés</h2>
          <p className="text-gray-600 dark:text-gray-400">
            NO-CODE-HUB propose des outils SaaS à destination des professionnels :
            CV Creator, CyberHub, Gestion Immobilière, Video Analyzer.
            Les caractéristiques de chaque service sont détaillées sur la page dédiée de chaque outil.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-base mb-2">4. Prix</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Les prix sont indiqués en euros, toutes taxes comprises (TTC).
            Le vendeur se réserve le droit de modifier ses tarifs à tout moment.
            Les commandes sont facturées au tarif en vigueur au moment de la validation.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-base mb-2">5. Commande et paiement</h2>
          <p className="text-gray-600 dark:text-gray-400">
            La commande est validée après confirmation du paiement. Le paiement est sécurisé
            et traité par un prestataire tiers certifié. En cas d&apos;échec du paiement,
            la commande est automatiquement annulée.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-base mb-2">6. Droit de rétractation</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Conformément à l&apos;article L221-28 du Code de la consommation, le droit de rétractation
            ne s&apos;applique pas aux services pleinement exécutés avant la fin du délai de rétractation
            avec l&apos;accord préalable du consommateur.
            Pour les abonnements, vous disposez de 14 jours calendaires à compter de la souscription
            pour exercer votre droit de rétractation, sauf si le service a été entièrement fourni.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-base mb-2">7. Responsabilité</h2>
          <p className="text-gray-600 dark:text-gray-400">
            NO-CODE-HUB s&apos;engage à fournir ses services avec soin et professionnalisme.
            La responsabilité du vendeur ne saurait être engagée en cas d&apos;interruption de service
            due à des causes indépendantes de sa volonté (force majeure, panne d&apos;hébergeur, etc.).
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-base mb-2">8. Droit applicable</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Les présentes CGV sont soumises au droit français.
            En cas de litige, les parties rechercheront une solution amiable avant tout recours judiciaire.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-base mb-2">9. Contact</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Pour toute question relative à une commande :{' '}
            <a href="mailto:contact@no-code-hub.fr" className="text-blue-600 hover:underline">
              contact@no-code-hub.fr
            </a>
          </p>
        </div>

      </section>
    </LegalPageLayout>
  )
}
