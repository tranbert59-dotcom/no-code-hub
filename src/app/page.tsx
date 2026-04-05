import Link from 'next/link'
import { Footer } from '@/components/kit/Footer'

// ── Données produits ──────────────────────────────────────────────────────────

const PRODUCTS = [
  {
    name: 'CV Creator',
    baseline: 'Créez votre CV professionnel',
    description: "Personnalisez et exportez votre CV en minutes grâce à des templates modernes et l'aide de l'IA.",
    href: '#',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    name: 'CyberHub',
    baseline: 'Gérez votre cybersécurité',
    description: 'Alertes, incidents, conformité et remédiation — tout en un pour les équipes IT.',
    href: '#',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    name: 'Gestion Immobilière',
    baseline: 'Gérez vos biens locatifs',
    description: 'Locataires, paiements, contrats et documents en une seule plateforme.',
    href: '#',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    name: 'Video Analyzer',
    baseline: 'Analysez vos vidéos par IA',
    description: 'Transcription automatique, résumé et extraction de points clés depuis vos vidéos.',
    href: '#',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
]

const BENEFITS = [
  {
    icon: '⚡',
    title: 'Gain de temps',
    desc: "Automatisez les tâches répétitives et concentrez-vous sur l'essentiel.",
  },
  {
    icon: '🔒',
    title: 'Sécurité',
    desc: 'Outils pensés pour la conformité RGPD et la sécurité des données.',
  },
  {
    icon: '🧠',
    title: 'IA intégrée',
    desc: 'Claude AI et Gemini au cœur de nos outils pour des résultats intelligents.',
  },
  {
    icon: '🎯',
    title: 'Simplicité',
    desc: 'No-code, prise en main immédiate sans compétences techniques.',
  },
]

const PROBLEMS = [
  {
    problem: 'Création de CV manuel',
    solution: 'CV Creator automatise en minutes',
  },
  {
    problem: 'Cybersécurité complexe',
    solution: 'CyberHub simplifie la gestion',
  },
  {
    problem: 'Vidéos non exploitées',
    solution: 'Video Analyzer transcrit et résume',
  },
]

// ── Composants ────────────────────────────────────────────────────────────────

function Navbar() {
  return (
    <nav className="sticky top-0 z-30 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="font-bold text-white text-lg tracking-tight group-hover:text-blue-400 transition-colors">
            NO-CODE-HUB
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden sm:flex items-center gap-6 text-sm text-gray-300">
          <a href="#produits" className="hover:text-white transition-colors">Produits</a>
          <a href="#a-propos" className="hover:text-white transition-colors">À propos</a>
          <a href="mailto:contact@no-code-hub.fr" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* ── Section 2 : Hero ── */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-6 py-28 sm:py-40"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}
      >
        {/* Halo décoratif */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-3xl" />
        </div>

        <div className="relative max-w-3xl">
          <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-900/40 px-4 py-1.5 rounded-full">
            Écosystème NO-CODE
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Sécurisez, automatisez<br className="hidden sm:block" /> et accélérez votre activité.
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
            NO-CODE-HUB regroupe des outils intelligents pour créer, automatiser et sécuriser
            vos processus métiers grâce à l&apos;IA et au no-code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#produits"
              className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors shadow-lg shadow-blue-900/40"
            >
              Découvrir les outils
            </a>
            <a
              href="mailto:contact@no-code-hub.fr"
              className="px-8 py-3.5 rounded-xl border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-semibold text-sm transition-colors"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>

      {/* ── Section 3 : Problème / Solution ── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Vous perdez du temps sur des tâches répétitives.
          </h2>
          <p className="text-gray-500 mb-12 max-w-xl mx-auto text-sm">
            Nos outils transforment vos contraintes quotidiennes en processus fluides et automatisés.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {PROBLEMS.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-left">
                <p className="text-sm text-red-500 font-medium mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-xs">✗</span>
                  {item.problem}
                </p>
                <p className="text-sm text-green-700 font-medium flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-xs">✓</span>
                  {item.solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4 : Grille produits ── */}
      <section id="produits" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Nos outils</h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              Des solutions pensées pour les professionnels et les indépendants.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((product) => (
              <div
                key={product.name}
                className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-100 transition-all flex flex-col"
              >
                {/* Icône */}
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                  {product.icon}
                </div>

                {/* Badge */}
                <span className="inline-block text-xs font-medium text-green-700 bg-green-50 px-2.5 py-0.5 rounded-full mb-3 w-fit">
                  Disponible
                </span>

                <h3 className="font-bold text-gray-900 text-base mb-1">{product.name}</h3>
                <p className="text-xs font-medium text-blue-600 mb-3">{product.baseline}</p>
                <p className="text-xs text-gray-500 leading-relaxed flex-1 mb-5">{product.description}</p>

                <a
                  href={product.href}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1"
                >
                  Découvrir
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5 : Bénéfices ── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Pourquoi NO-CODE-HUB ?</h2>
            <p className="text-gray-500 text-sm">Conçu pour simplifier votre quotidien professionnel.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((b) => (
              <div key={b.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">{b.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6 : Crédibilité ── */}
      <section id="a-propos" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Conçu par des développeurs, pour des professionnels.
          </h2>
          <p className="text-gray-500 text-sm mb-10 max-w-xl mx-auto">
            France · Données hébergées en Europe · Stack moderne (FastAPI, Next.js, Claude AI)
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['🇫🇷 Made in France', '🔒 RGPD', '🌐 Open Source friendly'].map((badge) => (
              <span
                key={badge}
                className="px-5 py-2.5 rounded-full border border-gray-200 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 7 : CTA final ── */}
      <section className="py-24 px-6 bg-blue-600">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Prêt à simplifier votre activité ?
          </h2>
          <p className="text-blue-100 text-sm mb-10">
            Découvrez nos outils ou contactez-nous pour un accompagnement personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#produits"
              className="px-8 py-3.5 rounded-xl bg-white text-blue-600 hover:bg-blue-50 font-semibold text-sm transition-colors shadow-lg"
            >
              Explorer les outils
            </a>
            <a
              href="mailto:contact@no-code-hub.fr"
              className="px-8 py-3.5 rounded-xl border border-blue-400 hover:border-white text-white font-semibold text-sm transition-colors"
            >
              contact@no-code-hub.fr
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <Footer
        siteName="NO-CODE-HUB"
        baseline="Des outils no-code pour créer, analyser, organiser."
        accentColor="#2563eb"
        contact={{ email: 'contact@no-code-hub.fr' }}
      />
    </div>
  )
}
