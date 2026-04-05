import { LegalPageLayout } from '@/components/kit/LegalPageLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique des cookies — NO-CODE-HUB',
}

export default function CookiesPage() {
  return (
    <LegalPageLayout>
      <h1 className="text-3xl font-bold mb-2">Politique des cookies</h1>
      <p className="text-sm text-gray-500 mb-10">Dernière mise à jour : avril 2026</p>

      <section className="space-y-8 text-sm leading-relaxed">

        <div>
          <h2 className="font-semibold text-base mb-2">1. Qu&apos;est-ce qu&apos;un cookie ?</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone)
            lors de votre visite sur notre site. Il permet de mémoriser des informations relatives à votre navigation.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-base mb-2">2. Cookies utilisés sur no-code-hub.fr</h2>

          <div className="space-y-4 mt-3">
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 border border-green-100 dark:border-green-800">
              <p className="font-semibold text-green-800 dark:text-green-300 mb-1">Cookies essentiels (obligatoires)</p>
              <p className="text-gray-600 dark:text-gray-400 text-xs">
                Nécessaires au fonctionnement du site. Ils ne peuvent pas être désactivés.
                Incluent la mémorisation de vos préférences de consentement.
              </p>
              <p className="text-xs text-gray-500 mt-1">Durée : session ou 12 mois</p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-100 dark:border-blue-800">
              <p className="font-semibold text-blue-800 dark:text-blue-300 mb-1">Cookies fonctionnels (optionnels)</p>
              <p className="text-gray-600 dark:text-gray-400 text-xs">
                Permettent de mémoriser vos préférences (thème, langue) pour améliorer votre expérience.
              </p>
              <p className="text-xs text-gray-500 mt-1">Durée : 12 mois</p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4 border border-yellow-100 dark:border-yellow-800">
              <p className="font-semibold text-yellow-800 dark:text-yellow-300 mb-1">Cookies analytics (optionnels)</p>
              <p className="text-gray-600 dark:text-gray-400 text-xs">
                Nous permettent de comprendre comment le site est utilisé (pages vues, durée de session)
                via une mesure d&apos;audience anonymisée.
              </p>
              <p className="text-xs text-gray-500 mt-1">Durée : 13 mois</p>
            </div>

            <div className="bg-gray-50 dark:bg-slate-800/50 rounded-xl p-4 border border-gray-100 dark:border-slate-700">
              <p className="font-semibold text-gray-700 dark:text-gray-300 mb-1">Cookies marketing (optionnels)</p>
              <p className="text-gray-600 dark:text-gray-400 text-xs">
                Non activés actuellement. Réservés à une future personnalisation des contenus.
              </p>
              <p className="text-xs text-gray-500 mt-1">Durée : non applicable</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-base mb-2">3. Gérer vos préférences</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Vous pouvez modifier vos préférences à tout moment en cliquant sur
            &quot;Gérer mes cookies&quot; dans le pied de page du site.
            Vous pouvez également configurer votre navigateur pour refuser les cookies,
            mais certaines fonctionnalités du site pourraient ne plus fonctionner correctement.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-base mb-2">4. Contact</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Pour toute question relative aux cookies :{' '}
            <a href="mailto:contact@no-code-hub.fr" className="text-blue-600 hover:underline">
              contact@no-code-hub.fr
            </a>
          </p>
        </div>

      </section>
    </LegalPageLayout>
  )
}
