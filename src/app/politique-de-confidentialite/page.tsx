import { LegalPageLayout } from '@/components/kit/LegalPageLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de confidentialité — NO-CODE-HUB',
}

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalPageLayout>
      <h1 className="text-3xl font-bold mb-2">Politique de confidentialité</h1>
      <p className="text-sm text-gray-500 mb-10">Dernière mise à jour : avril 2026</p>

      <section className="space-y-8 text-sm leading-relaxed">

        <div>
          <h2 className="font-semibold text-base mb-2">1. Responsable du traitement</h2>
          <p className="text-gray-600 dark:text-gray-400">
            CABANES BERTRAND — Entrepreneur individuel — SIREN 530 253 160<br />
            Email : <a href="mailto:contact@no-code-hub.fr" className="text-blue-600 hover:underline">contact@no-code-hub.fr</a>
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-base mb-2">2. Données collectées</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-3">
            Dans le cadre de l&apos;utilisation du site no-code-hub.fr, nous pouvons collecter :
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
            <li>Données de navigation (adresse IP, pages visitées, durée de session)</li>
            <li>Données transmises via les formulaires de contact (nom, email, message)</li>
            <li>Préférences cookies stockées en local</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-base mb-2">3. Finalités du traitement</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
            <li>Amélioration de l&apos;expérience utilisateur</li>
            <li>Réponse aux demandes de contact</li>
            <li>Analyse d&apos;audience anonymisée (si consentement)</li>
            <li>Sécurité et prévention des abus</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-base mb-2">4. Base légale</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Les traitements reposent sur votre consentement (art. 6.1.a RGPD) pour les cookies
            non essentiels, et sur l&apos;intérêt légitime (art. 6.1.f RGPD) pour la sécurité du site.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-base mb-2">5. Conservation des données</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Les données de navigation sont conservées pour une durée maximale de 13 mois.
            Les données de contact sont supprimées dès que la demande a été traitée et au plus tard 3 ans après le dernier contact.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-base mb-2">6. Vos droits</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-3">
            Conformément au RGPD, vous disposez des droits suivants :
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
            <li>Droit d&apos;accès à vos données</li>
            <li>Droit de rectification</li>
            <li>Droit à l&apos;effacement (droit à l&apos;oubli)</li>
            <li>Droit à la portabilité</li>
            <li>Droit d&apos;opposition au traitement</li>
          </ul>
          <p className="text-gray-600 dark:text-gray-400 mt-3">
            Pour exercer ces droits : <a href="mailto:contact@no-code-hub.fr" className="text-blue-600 hover:underline">contact@no-code-hub.fr</a>
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-base mb-2">7. Hébergement des données</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Les données sont hébergées en Europe par Hostinger International Ltd,
            61 Lordou Vironos Street, 6023 Larnaca, Chypre.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-base mb-2">8. Réclamation</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Vous pouvez introduire une réclamation auprès de la CNIL (
            <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.cnil.fr</a>
            ) si vous estimez que vos droits ne sont pas respectés.
          </p>
        </div>

      </section>
    </LegalPageLayout>
  )
}
