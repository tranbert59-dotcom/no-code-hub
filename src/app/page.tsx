import Link from 'next/link'
import { Footer } from '@/components/kit/Footer'
import { Logo } from '@/components/Logo'

const STACK = [
  { label: 'FastAPI', category: 'Backend' },
  { label: 'Next.js 14/15', category: 'Frontend' },
  { label: 'PostgreSQL', category: 'Base de données' },
  { label: 'Redis', category: 'Cache' },
  { label: 'Docker', category: 'Infrastructure' },
  { label: 'Claude AI', category: 'IA' },
  { label: 'Python', category: 'Backend' },
  { label: 'TypeScript', category: 'Frontend' },
  { label: 'Supabase', category: 'Base de données' },
  { label: 'nginx', category: 'Infrastructure' },
  { label: 'Whisper', category: 'IA' },
  { label: 'Tailwind CSS', category: 'Frontend' },
]

const EXPERIENCES = [
  { years: '1994 – 2023', label: 'Consultant ERP / JD Edwards AS400', detail: 'Total · Bonduelle · Bureau Veritas · Reckitt · Nexity…' },
  { years: '2023 – 2024', label: 'Certifications Google', detail: 'Cybersécurité (8 modules, 83–96 %) · Project Management' },
  { years: '2024 – auj.', label: 'Product Builder', detail: 'FastAPI · Next.js · Docker · Claude AI · VPS Hostinger' },
]

const JDE_CLIENTS = [
  { name: 'Total', sector: 'Énergie' },
  { name: 'Bonduelle', sector: 'Agroalimentaire' },
  { name: 'Bureau Veritas', sector: 'Certification' },
  { name: 'Reckitt Benckiser', sector: 'Grande conso.' },
  { name: 'Nexity', sector: 'Immobilier' },
  { name: 'Alcon', sector: 'Médical' },
  { name: 'SmithKline', sector: 'Pharma' },
  { name: 'Givenchy', sector: 'Luxe' },
  { name: 'Soufflet', sector: 'Agriculture' },
  { name: 'PFSWeb', sector: 'Logistique' },
]

const JDE_MODULES = [
  'Finance (CG, Clients, Fournisseurs)',
  'Distribution (commandes, stock)',
  'Production & CBN',
  'Clôtures comptables',
  'Contrats & Temps/Frais',
  'ECS Pétrole-Chimie',
  'Interfaces EDI / XML',
  'RPG 400 & GAP3',
  'DB2 / WinSQL',
  'PRMS · CA-PRMS',
]

const PROJECTS = [
  {
    name: 'WorldCup 2026',
    baseline: 'App de pronostics Coupe du Monde 2026',
    description: 'Groupes de pronos, classements, bot Discord, badges communauté, export Excel premium — 100 % custom.',
    href: 'https://worldcup.no-code-hub.fr',
    status: 'live',
    stack: ['FastAPI', 'Next.js 14', 'Supabase', 'Discord Bot'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
  },
  {
    name: 'CyberHub SaaS',
    baseline: 'Plateforme de cybersécurité multi-tenant',
    description: 'MFA, RBAC, audit logs, détection d\'incidents, formation — SaaS B2B pour PME.',
    href: null,
    status: 'soon',
    stack: ['FastAPI', 'PostgreSQL', 'Redis', 'Next.js 14'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    name: 'CV Creator',
    baseline: 'Créer votre CV professionnel en minutes',
    description: 'Templates modernes, export PDF/Word, suggestions IA, import LinkedIn.',
    href: null,
    status: 'soon',
    stack: ['Express', 'Next.js 14', 'Prisma', 'Claude AI'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    name: 'Gestion Immobilière',
    baseline: 'Gérez vos biens locatifs simplement',
    description: 'Locataires, quittances PDF, paiements, documents — tout en une plateforme.',
    href: null,
    status: 'soon',
    stack: ['FastAPI', 'PostgreSQL', 'MinIO', 'Next.js 15'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
]

// ── Composants ────────────────────────────────────────────────────────────────

function Navbar() {
  return (
    <nav className="sticky top-0 z-30 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="group">
          <Logo size={36} textClassName="group-hover:text-blue-400 transition-colors text-lg" />
        </Link>
        <div className="hidden sm:flex items-center gap-6 text-sm text-gray-400">
          <a href="#parcours" className="hover:text-white transition-colors">Parcours</a>
          <a href="#erp" className="hover:text-amber-400 transition-colors font-medium text-amber-500">JDE · AS400</a>
          <a href="#projets" className="hover:text-white transition-colors">Projets</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a
            href="https://www.linkedin.com/in/bertrand-cabanes-1965b211/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
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

      {/* ── HERO ── */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-6 py-32 sm:py-44"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-600/10 blur-3xl" />
        </div>

        <div className="relative max-w-3xl">
          <div className="flex justify-center mb-8">
            <Logo size={120} textClassName="text-3xl" />
          </div>
          <span className="inline-block mb-5 text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-900/40 px-4 py-1.5 rounded-full">
            Product Builder · NO-CODE-HUB
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Bertrand Cabanes
          </h1>
          <p className="text-xl sm:text-2xl text-blue-300 font-medium mb-6">
            De l&apos;ERP AS400 à l&apos;IA — je construis des outils qui tournent en production.
          </p>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            30 ans d&apos;expertise en systèmes d&apos;information (JD Edwards, AS400), reconverti en développeur
            full-stack et entrepreneur numérique. Je crée des SaaS utiles pour les professionnels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/bertrand-cabanes-1965b211/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors shadow-lg shadow-blue-900/40"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Me suivre sur LinkedIn
            </a>
            <a
              href="#projets"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-semibold text-sm transition-colors"
            >
              Voir mes projets
            </a>
          </div>
        </div>
      </section>

      {/* ── PARCOURS ── */}
      <section id="parcours" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Mon parcours</h2>
            <p className="text-gray-500 text-sm max-w-lg mx-auto">
              Une reconversion construite sur 30 ans d&apos;expérience en systèmes d&apos;information.
            </p>
          </div>

          <div className="relative">
            {/* Ligne verticale */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-blue-100 hidden sm:block" />

            <div className="space-y-8">
              {EXPERIENCES.map((exp, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="hidden sm:flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-600 ring-4 ring-blue-50 mt-1.5 shrink-0" />
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex-1">
                    <span className="text-xs font-mono text-blue-500 font-semibold">{exp.years}</span>
                    <h3 className="font-bold text-gray-900 mt-1 mb-1">{exp.label}</h3>
                    <p className="text-sm text-gray-500">{exp.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Valeurs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
            {[
              { val: '30+', label: 'ans en SI' },
              { val: '10+', label: 'projets construits' },
              { val: '1', label: 'app en production' },
              { val: '100%', label: 'autonome' },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-blue-600 mb-1">{s.val}</div>
                <div className="text-xs text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ERP / AS400 ── */}
      <section id="erp" className="py-20 px-6 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-widest text-amber-400 bg-amber-900/30 px-4 py-1.5 rounded-full">
              Expertise ERP · disponible en mission
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              30 ans sur JD Edwards & AS400
            </h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">
              Consultant technico-fonctionnel senior sur JD Edwards World Software et EnterpriseOne.
              Développement RPG 400, paramétrage, TMA, migration et accompagnement utilisateurs —
              en industrie, finance, agroalimentaire, santé et énergie.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Modules maîtrisés */}
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-amber-900/50 text-amber-400 flex items-center justify-center text-sm">⚙</span>
                Modules & compétences JDE
              </h3>
              <div className="flex flex-wrap gap-2">
                {JDE_MODULES.map((m) => (
                  <span key={m} className="text-xs bg-slate-700 text-gray-300 px-3 py-1.5 rounded-lg border border-slate-600">
                    {m}
                  </span>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-slate-700">
                <p className="text-xs text-gray-400 mb-2 font-semibold uppercase tracking-wide">Versions JDE</p>
                <div className="flex flex-wrap gap-2">
                  {['World Software (AS400)', 'EnterpriseOne (OneWorld)', 'JDE 8.11+'].map((v) => (
                    <span key={v} className="text-xs bg-amber-900/30 text-amber-300 px-3 py-1.5 rounded-lg border border-amber-900/50 font-mono">
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Clients & secteurs */}
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-blue-900/50 text-blue-400 flex items-center justify-center text-sm">🏢</span>
                Clients & secteurs
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {JDE_CLIENTS.map((c) => (
                  <div key={c.name} className="flex items-center justify-between bg-slate-700/50 rounded-lg px-3 py-2">
                    <span className="text-sm font-semibold text-white">{c.name}</span>
                    <span className="text-xs text-gray-400">{c.sector}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ce que je faisais concrètement */}
          <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 mb-8">
            <h3 className="text-white font-bold mb-5">Ce que j&apos;ai fait concrètement</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: '🔧',
                  title: 'Développement & TMA',
                  desc: 'Développements spécifiques RPG 400 / GAP3, maintenance corrective et évolutive, gestion des clôtures comptables, interfaces EDI/XML.',
                },
                {
                  icon: '📋',
                  title: 'Paramétrage & Analyse',
                  desc: "Rédaction des dossiers d'analyse, paramétrage des modules JDE, tests unitaires, documentation fonctionnelle et technique.",
                },
                {
                  icon: '👥',
                  title: 'Support & Formation',
                  desc: "Accompagnement utilisateurs métier, conduite du changement, support Run, coordination d'éditeurs (Infor, Talentia, Cegid).",
                },
              ].map((item) => (
                <div key={item.title} className="bg-slate-700/50 rounded-xl p-4">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h4 className="text-white font-semibold text-sm mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA recruteurs ERP */}
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-5">
              Vous recherchez un consultant JD Edwards / AS400 ? Je reste ouvert aux missions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://www.linkedin.com/in/bertrand-cabanes-1965b211/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold text-sm transition-colors"
              >
                Voir mon profil LinkedIn complet
              </a>
              <a
                href="mailto:bertrand.cabanes.59@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-600 hover:border-slate-400 text-gray-300 hover:text-white font-semibold text-sm transition-colors"
              >
                bertrand.cabanes.59@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJETS ── */}
      <section id="projets" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Ce que je construis</h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              Des outils SaaS pensés pour les professionnels — en production ou en cours de développement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PROJECTS.map((project) => (
              <div
                key={project.name}
                className={`group bg-white border rounded-2xl p-6 shadow-sm flex flex-col transition-all
                  ${project.status === 'live'
                    ? 'border-green-200 hover:border-green-400 hover:shadow-md'
                    : 'border-gray-100 hover:border-blue-100 hover:shadow-sm opacity-80'
                  }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center
                    ${project.status === 'live' ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-blue-400'}`}>
                    {project.icon}
                  </div>
                  {project.status === 'live' ? (
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      En ligne
                    </span>
                  ) : (
                    <span className="text-xs font-medium text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
                      Bientôt
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-gray-900 text-base mb-1">{project.name}</h3>
                <p className="text-xs font-semibold text-blue-600 mb-3">{project.baseline}</p>
                <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">{project.description}</p>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.stack.map((s) => (
                    <span key={s} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-mono">
                      {s}
                    </span>
                  ))}
                </div>

                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-700 hover:text-green-900 transition-colors"
                  >
                    Voir le projet
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <span className="text-xs text-gray-400 italic">En développement</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STACK ── */}
      <section className="py-16 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold text-white mb-2">Ma stack technique</h2>
          <p className="text-gray-400 text-sm mb-10">Les outils avec lesquels je construis chaque jour.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {STACK.map((s) => (
              <span key={s.label} className="px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-sm text-gray-300 font-mono hover:border-blue-500 hover:text-white transition-colors">
                {s.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 px-6 bg-blue-600">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Vous avez un projet ? Parlons-en.
          </h2>
          <p className="text-blue-100 text-sm mb-10 leading-relaxed">
            Expert ERP disponible pour des missions de consulting, développement sur mesure
            ou collaboration sur des projets SaaS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/bertrand-cabanes-1965b211/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white text-blue-600 hover:bg-blue-50 font-semibold text-sm transition-colors shadow-lg"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Me contacter sur LinkedIn
            </a>
            <a
              href="mailto:bertrand.cabanes.59@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-blue-400 hover:border-white text-white font-semibold text-sm transition-colors"
            >
              bertrand.cabanes.59@gmail.com
            </a>
          </div>
        </div>
      </section>

      <Footer
        siteName="NO-CODE-HUB"
        baseline="Des outils no-code pour créer, analyser, organiser."
        accentColor="#2563eb"
        contact={{ email: 'contact@no-code-hub.fr' }}
      />
    </div>
  )
}
