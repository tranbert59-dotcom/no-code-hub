'use client'

import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PRODUCTS } from '@/lib/products'
import { ProductCard } from '@/components/ProductCard'
import { Footer } from '@/components/kit/Footer'
import { Navbar } from '@/components/Navbar'
import { useTheme } from '@/lib/theme'
import { useDict } from '@/lib/i18n'
import ContactForm from '@/components/ContactForm'
import { CvRequestButton } from '@/components/CvRequestButton'

const LINKEDIN_URL = 'https://www.linkedin.com/in/bertrand-cabanes-1965b211/'

// ── Prestation payante « cas clients » ────────────────────────────────────────
// Renseigner ces 3 URL quand elles existeront — les boutons s'activent tout seuls.
//  · paymentUrl : lien de paiement (Stripe Payment Link, Gumroad…) — vide = repli e-mail + « bientôt »
//  · notionUrl  : modèle Notion vierge à dupliquer — vide = bouton grisé « bientôt »
//  · formUrl    : formulaire (Tally / Typeform / Airtable) — vide = bouton grisé « bientôt »
const SERVICE = {
  paymentUrl: '',
  notionUrl: '',
  formUrl: '',
}
// Nombre de produits dans le premier panneau de la pile « Ce que je
// construis » : au-delà, ils remontent par-dessus. À ajuster si la
// liste des produits change de taille.
// 0 depuis les captures (#31) : une carte illustrée fait ~350 px de plus, et
// un panneau figé plus haut que l'écran rend son bas inaccessible (à 650 px
// de haut : 698 px mesurés pour 586 disponibles). Le titre se fige seul ; les
// cartes, dans le dernier panneau, n'ont pas de limite de hauteur.
const PRODUITS_PANNEAU_1 = 0

const SERVICE_EMAIL_FALLBACK = 'mailto:contact@no-code-hub.fr?subject=Analyse%20de%20mon%20projet'

// Données non traduisibles (noms de techno, versions) ou structurelles (icônes, liens).
const STACK = [
  'FastAPI', 'Next.js 14/15', 'PostgreSQL', 'Redis', 'Docker', 'Claude AI',
  'Python', 'TypeScript', 'Supabase', 'nginx', 'Whisper', 'Tailwind CSS',
]

const BUILDER_STACK = [
  'Python · FastAPI',
  'Next.js · TypeScript',
  'PostgreSQL · Redis',
  'Docker · nginx',
  'Claude AI · Whisper',
  'VPS · CI/CD',
]

const JDE_VERSIONS = ['World Software (AS400)', 'EnterpriseOne (OneWorld)', 'JDE 8.11+']

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

/**
 * Titre dont la portion entourée d'astérisques passe en écriture manuscrite.
 * « Mon *parcours* » → Mon <span manuscrit>parcours</span>
 *
 * La graisse est forcée à 600 : c'est la seule embarquée pour Caveat, et le
 * h2 parent est en 800. Sans ce garde-fou, faux gras garanti.
 */
function Titre({ texte }: { texte: string }) {
  return (
    <>
      {texte.split(/\*([^*]+)\*/).map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="font-hand font-semibold text-accent text-[1.2em]">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  )
}

/**
 * Carte dont une pastille chevauche le bord supérieur : moitié dehors, moitié
 * dedans. C'est le procédé d'agenceseo — le relief vient du débordement, pas
 * d'une ombre. Le mt-7 réserve la place de la moitié qui dépasse, le pt-9
 * celle de la moitié qui rentre.
 */
function CarteChevauchee({
  badge,
  children,
  className = '',
}: {
  badge: ReactNode
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={
        'relative mt-7 rounded-2xl border border-line bg-card px-5 pb-5 pt-9 ' +
        'text-center shadow-sm ' +
        className
      }
    >
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">{badge}</div>
      {children}
    </div>
  )
}

/** Pastille à lueur : le gabarit commun de tous les badges à cheval. */
function Pastille({
  children,
  ton = 'accent',
}: {
  children: ReactNode
  ton?: 'accent' | 'ambre'
}) {
  const tons = {
    accent: 'bg-accent text-accent-fg shadow-accent/50',
    ambre: 'bg-amber-500 text-slate-900 shadow-amber-500/50',
  }
  return (
    <span
      className={
        'flex h-12 min-w-[3rem] items-center justify-center rounded-xl px-3 ' +
        'text-xl font-black shadow-lg ' +
        tons[ton]
      }
    >
      {children}
    </span>
  )
}

function IconeDocument({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  )
}

/**
 * Défilement en pile, à la manière des panneaux d'agents d'agenceseo.
 *
 * On lui passe des BLOCS ENTIERS, pas des cartes isolées : chaque bloc se
 * fige en haut de l'écran, et le bloc suivant monte par-dessus pour prendre
 * sa place. Le `top` augmente d'un cran à chaque bloc — c'est ce décalage
 * qui laisse voir la tranche de ceux déjà empilés dessous.
 *
 * Quatre conditions à ne pas casser :
 *  1. chaque bloc a un fond OPAQUE, sinon il ne recouvre rien ;
 *  2. aucun ancêtre ne passe en `overflow: hidden` ;
 *  3. la pile reste plus haute que l'écran, sinon rien ne défile ;
 *  4. CHAQUE BLOC FIGÉ TIENT DANS L'ÉCRAN. Un bloc figé ne défile plus :
 *     ce qui dépasse la hauteur visible est définitivement inaccessible.
 *     D'où deux conséquences : le figement ne démarre qu'à partir de md,
 *     car en une colonne les blocs font deux fois la hauteur d'écran ; et
 *     le dernier bloc n'est jamais figé, donc sa hauteur est libre.
 */
function Pile({
  children,
  decalage = 22,
}: {
  children: ReactNode[]
  decalage?: number
}) {
  return (
    <div>
      {children.map((enfant, i) => (
        <div
          key={i}
          // Le dernier ne se fige pas : rien ne vient le recouvrir, il n'a
          // qu'à remonter. Il échappe donc à la contrainte de hauteur.
          // L'ombre vers le haut est portée par tous SAUF le premier : c'est
          // elle qui fait lire le glissement, les panneaux étant de la même
          // couleur que la section. Sans elle, on ne voit que des cartes
          // coupées net.
          className={[
            // `relative` sur TOUS : un élément positionné se peint au-dessus
            // d'un élément statique quel que soit l'ordre du document. Sans
            // lui, le panneau figé repasserait devant celui qui monte.
            'relative',
            i < children.length - 1 ? 'md:sticky' : '',
            // Clair : ombre portée. Sombre : lisere lumineux + halo bleu,
            // une ombre noire ne se voyant pas sur un fond noir.
            i > 0
              ? 'md:shadow-[0_-16px_36px_-18px_rgba(2,6,23,0.22)] ' +
                'md:dark:shadow-[0_-1px_0_0_rgba(125,211,252,0.55),0_-16px_38px_-18px_rgba(59,130,246,0.32)]'
              : '',
          ]
            .filter(Boolean)
            .join(' ')}
          style={{ top: 64 + i * decalage }}
        >
          {enfant}
        </div>
      ))}
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const { lang } = useTheme()
  const t = useDict(lang)

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="relative flex flex-col items-center justify-center text-center lg:text-left px-6 py-24 sm:py-32 bg-gradient-to-br from-surface-2 to-surface"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent/10 blur-3xl" />
        </div>

        {/* Logo NO-CODE-HUB, grand et centré, entre la barre et le badge */}
        <div className="relative w-full flex justify-center mb-10 sm:mb-14">
          <Image
            src="/logo.webp"
            alt="NO-CODE-HUB"
            width={512}
            height={512}
            priority
            className="w-40 sm:w-52 lg:w-64 h-auto rounded-2xl shadow-2xl shadow-accent/30 ring-1 ring-line"
          />
        </div>

        <div className="relative max-w-6xl w-full grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Colonne texte */}
          <div>
            <span className="inline-block mb-5 text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 px-4 py-1.5 rounded-full">
              {t.hero.badge}
            </span>
            <h1 className="text-display font-black text-fg mb-5">
              Bertrand Cabanes
            </h1>
            <p className="text-xl sm:text-2xl text-accent font-medium mb-6">
              {t.hero.tagline}
            </p>
            <p className="text-base sm:text-lg text-fg-muted leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-accent hover:bg-accent-hover text-accent-fg font-semibold text-base transition-colors shadow-lg shadow-accent/30"
              >
                <LinkedInIcon className="w-4 h-4" />
                {t.hero.ctaLinkedin}
              </a>
              <a
                href="#projets"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-line hover:border-fg-subtle text-fg-muted hover:text-fg font-semibold text-base transition-colors"
              >
                {t.hero.ctaProjects}
              </a>
            </div>
          </div>

          {/* Colonne illustration */}
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/20 blur-2xl rounded-2xl" aria-hidden="true" />
            <img
              src="/img/hero-nocode-hub.webp"
              alt={t.hero.imageAlt}
              width={1400}
              height={933}
              className="relative w-full h-auto rounded-2xl ring-1 ring-line shadow-2xl shadow-black/30
                         lg:-rotate-[2.5deg] lg:scale-[1.06] transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* ── PARCOURS ── */}
      <section id="parcours" className="py-20 px-6 bg-surface-2">
        <div className="max-w-4xl mx-auto">
          <Pile>
            {/* Panneau 1 — il se fige, le suivant viendra le recouvrir. */}
            <div className="bg-surface-2 pb-2">
              <div className="text-center mb-10">
                <h2 className="text-title font-extrabold text-fg mb-3">
                  <Titre texte={t.parcours.title} />
                </h2>
                <p className="text-fg-muted text-base max-w-lg mx-auto">{t.parcours.subtitle}</p>
              </div>

              <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-accent/20 hidden sm:block" />
            <div className="space-y-8">
              {t.parcours.experiences.map((exp, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="hidden sm:flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-accent ring-4 ring-accent/15 mt-1.5 shrink-0" />
                  </div>
                  <div className="bg-card rounded-2xl p-6 shadow-sm border border-line flex-1">
                    <span className="text-xs font-mono text-accent font-semibold">{exp.years}</span>
                    <h3 className="font-bold text-fg mt-1 mb-1">{exp.label}</h3>
                    <p className="text-base text-fg-muted">{exp.detail}</p>
                  </div>
                </div>
              ))}
                </div>
              </div>
            </div>

            {/* Panneau 2 — la rangée entière monte prendre la place du titre.
                La hauteur n'est pas décorative : c'est elle qui détermine
                combien de temps le panneau 1 reste figé pendant la remontée.
                Trop court, et l'effet passe inaperçu. */}
            <div className="flex md:min-h-[55vh] items-center bg-surface-2 pb-16 pt-14">
              <div className="grid w-full grid-cols-2 sm:grid-cols-4 gap-4">
                {t.parcours.stats.map((s) => (
                  <CarteChevauchee
                    key={s.label}
                    badge={<Pastille>{s.val}</Pastille>}
                    className="pb-4 pt-8"
                  >
                    <div className="text-sm text-fg-muted">{s.label}</div>
                  </CarteChevauchee>
                ))}
              </div>
            </div>
          </Pile>
        </div>
      </section>

      {/* ── EXPERTISE ERP / AS400 (accent ambre fixe = héritage/legacy) ── */}
      <section id="erp" className="py-20 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">

          <Pile>
            {/* Panneau 1 — se fige pendant que le bloc CV JDE remonte. */}
            <div className="bg-surface pb-2">
              <div className="text-center mb-10">
                <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400 bg-amber-500/10 px-4 py-1.5 rounded-full">
                  {t.erp.badge}
                </span>
                <h2 className="text-title font-extrabold text-fg mb-3">
                  <Titre texte={t.erp.title} />
                </h2>
                <p className="text-fg-muted text-base max-w-xl mx-auto">{t.erp.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {/* Modules maîtrisés */}
                <div className="bg-card rounded-2xl p-6 border border-line shadow-sm">
                  <h3 className="text-fg font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center text-sm">⚙</span>
                    {t.erp.modulesTitle}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {t.erp.modules.map((m) => (
                      <span key={m} className="text-xs bg-card-2 text-fg-muted px-3 py-1.5 rounded-lg border border-line">
                        {m}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 pt-5 border-t border-line">
                    <p className="text-xs text-fg-subtle mb-2 font-semibold uppercase tracking-wide">{t.erp.versionsLabel}</p>
                    <div className="flex flex-wrap gap-2">
                      {JDE_VERSIONS.map((v) => (
                        <span key={v} className="text-xs bg-amber-500/10 text-amber-700 dark:text-amber-300 px-3 py-1.5 rounded-lg border border-amber-500/20 font-mono">
                          {v}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Clients & secteurs */}
                <div className="bg-card rounded-2xl p-6 border border-line shadow-sm">
                  <h3 className="text-fg font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-accent/15 text-accent flex items-center justify-center text-sm">🏢</span>
                    {t.erp.clientsTitle}
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {t.erp.clients.map((c) => (
                      <div key={c.name} className="flex items-center justify-between bg-card-2/60 rounded-lg px-3 py-2">
                        <span className="text-sm font-semibold text-fg">{c.name}</span>
                        <span className="text-xs text-fg-muted">{c.sector}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Panneau 2 — le détail des missions remonte. */}
            <div className="flex md:min-h-[55vh] items-center bg-surface pb-16 pt-14">
              <div className="w-full">
              {/* Ce que je faisais concrètement */}
              <div className="bg-card rounded-2xl p-6 border border-line shadow-sm mb-8">
                <h3 className="text-fg font-bold mb-5">{t.erp.concreteTitle}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {t.erp.concrete.map((item) => (
                    <div key={item.title} className="bg-card-2/60 rounded-xl p-4">
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <h4 className="text-fg font-semibold text-base mb-2">{item.title}</h4>
                      <p className="text-fg-muted text-base leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              </div>
            </div>

            {/* Panneau 3 — l'appel à l'action remonte en dernier. */}
            <div className="flex md:min-h-[55vh] items-center bg-surface pb-16 pt-14">
              <div className="w-full">
                {/* CTA recruteurs ERP */}
                <CarteChevauchee
                  className="mx-auto max-w-2xl"
                  badge={
                    <Pastille ton="ambre">
                      <IconeDocument className="h-6 w-6" />
                    </Pastille>
                  }
                >
                  <p className="text-fg-muted text-base mb-5">{t.erp.ctaText}</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <CvRequestButton
                      profile="as400"
                      label={t.erp.ctaDownload}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold text-base transition-colors"
                    />
                    <a
                      href={LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-line hover:border-fg-subtle text-fg-muted hover:text-fg font-semibold text-base transition-colors"
                    >
                      {t.erp.ctaLinkedin}
                    </a>
                  </div>
                </CarteChevauchee>
              </div>
            </div>
          </Pile>
        </div>
      </section>

      {/* ── PRODUCT BUILDER / NO-CODE ── */}
      <section id="builder" className="py-20 px-6 bg-surface-2">
        <div className="max-w-5xl mx-auto">

          <Pile>
            {/* Panneau 1 — se fige pendant que le bloc CV reconversion remonte. */}
            <div className="bg-surface-2 pb-2">
              <div className="text-center mb-10">
                <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 px-4 py-1.5 rounded-full">
                  {t.builder.badge}
                </span>
                <h2 className="text-title font-extrabold text-fg mb-3">
                  <Titre texte={t.builder.title} />
                </h2>
                <p className="text-fg-muted text-base max-w-xl mx-auto">{t.builder.subtitle}</p>
              </div>

              {/* Compétences Product Builder — UnCode School */}
              <div className="bg-card rounded-2xl p-6 border border-line shadow-sm mb-8">
                <div className="text-center mb-6">
                  <h3 className="text-fg font-bold mb-2">{t.builder.nocode.title}</h3>
                  <p className="text-fg-muted text-sm max-w-2xl mx-auto">{t.builder.nocode.intro}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {t.builder.nocode.groups.map((g) => (
                    <div key={g.cat} className="bg-accent/5 rounded-xl p-4 border border-accent/15">
                      <p className="text-xs font-semibold uppercase tracking-wide text-accent mb-3">{g.cat}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {g.tools.map((tool) => (
                          <span key={tool} className="text-xs bg-card-2/70 text-fg-muted px-2.5 py-1 rounded-lg font-mono">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                {/* Cas clients à la demande */}
                <div className="flex items-start gap-3 bg-accent/10 rounded-xl p-4 border border-accent/20">
                  <span className="text-2xl shrink-0" aria-hidden="true">🎯</span>
                  <div>
                    <h4 className="text-fg font-semibold text-base mb-1">{t.builder.nocode.coachTitle}</h4>
                    <p className="text-fg-muted text-base leading-relaxed">{t.builder.nocode.coachDesc}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Panneau 2 — stack et certifications. */}
            <div className="flex md:min-h-[55vh] items-center bg-surface-2 pb-16 pt-14">
              <div className="w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {/* Stack & compétences */}
                <div className="bg-card rounded-2xl p-6 border border-line shadow-sm">
                  <h3 className="text-fg font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-accent/15 text-accent flex items-center justify-center text-sm">⌨</span>
                    {t.builder.stackTitle}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {BUILDER_STACK.map((s) => (
                      <span key={s} className="text-xs bg-accent/10 text-accent px-3 py-1.5 rounded-lg border border-accent/20 font-mono">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 pt-5 border-t border-line">
                    <p className="text-xs text-fg-subtle mb-2 font-semibold uppercase tracking-wide">{t.builder.approachLabel}</p>
                    <p className="text-base text-fg-muted leading-relaxed">{t.builder.approachText}</p>
                  </div>
                </div>

                {/* Certifications & formation */}
                <div className="bg-card rounded-2xl p-6 border border-line shadow-sm">
                  <h3 className="text-fg font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-accent/15 text-accent flex items-center justify-center text-sm">🎓</span>
                    {t.builder.certsTitle}
                  </h3>
                  <div className="space-y-3">
                    {t.builder.certs.map((c) => (
                      <div key={c.label} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-fg">{c.label}</p>
                          <p className="text-xs text-fg-muted">{c.issuer}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              </div>
            </div>

            {/* Panneau 3 — le pont entre les deux mondes. */}
            <div className="flex md:min-h-[55vh] items-center bg-surface-2 pb-16 pt-14">
              <div className="w-full">
              {/* Le pont entre les deux mondes */}
              <div className="bg-card rounded-2xl p-6 border border-line shadow-sm mb-8">
                <h3 className="text-fg font-bold mb-2 text-center">{t.builder.bridgeTitle}</h3>
                <p className="text-fg-muted text-sm text-center mb-6 max-w-2xl mx-auto">{t.builder.bridgeSubtitle}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {t.builder.bridge.map((col) => (
                    <div key={col.title} className="bg-accent/5 rounded-xl p-5 border border-accent/15">
                      <div className="text-2xl mb-2">{col.icon}</div>
                      <h4 className="text-fg font-semibold text-sm mb-3">{col.title}</h4>
                      <ul className="space-y-2">
                        {col.points.map((p) => (
                          <li key={p} className="flex items-start gap-2 text-base text-fg-muted leading-relaxed">
                            <span className="text-accent mt-0.5">→</span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              </div>
            </div>

            {/* Panneau 4 — l'appel à l'action remonte en dernier. */}
            <div className="flex md:min-h-[55vh] items-center bg-surface-2 pb-16 pt-14">
              <div className="w-full">
                {/* CTA reconversion + CV */}
                <CarteChevauchee
                  className="mx-auto max-w-2xl"
                  badge={
                    <Pastille>
                      <IconeDocument className="h-6 w-6" />
                    </Pastille>
                  }
                >
                  <p className="text-fg-muted text-base mb-5">{t.builder.ctaText}</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <CvRequestButton
                      profile="reconversion"
                      label={t.builder.ctaDownload}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-accent-hover text-accent-fg font-semibold text-base transition-colors shadow-lg shadow-accent/20"
                    />
                    <a
                      href="#projets"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-accent/40 hover:border-accent text-accent font-semibold text-base transition-colors"
                    >
                      {t.builder.ctaProjects}
                    </a>
                  </div>
                </CarteChevauchee>
              </div>
            </div>
          </Pile>
        </div>
      </section>

      {/* ── MÉTHODE — comment je travaille ── */}
      <section id="methode" className="py-20 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <Pile>
            {/* Panneau 1 — les quatre étapes, puis il se fige. */}
            <div className="bg-surface pb-2">
              <div className="text-center mb-12">
                <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 px-4 py-1.5 rounded-full">
                  {t.method.badge}
                </span>
                <h2 className="text-title font-extrabold text-fg mb-3">
                  <Titre texte={t.method.title} />
                </h2>
                <p className="text-fg-muted text-base max-w-xl mx-auto">{t.method.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {t.method.steps.map((s) => (
                  <CarteChevauchee key={s.n} badge={<Pastille>{s.n}</Pastille>}>
                    <h3 className="text-fg font-semibold text-base mb-1">{s.title}</h3>
                    <p className="text-fg-muted text-base leading-relaxed">{s.desc}</p>
                  </CarteChevauchee>
                ))}
              </div>
            </div>

            {/* Panneau 2 — ce qui est automatisé, ce qui ne l'est pas. */}
            <div className="flex md:min-h-[55vh] items-center bg-surface pb-16 pt-14">
              <div className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {t.method.columns.map((c) => (
                    <div key={c.title} className="bg-card rounded-2xl p-6 border border-line shadow-sm">
                      <div className="text-2xl mb-2" aria-hidden="true">{c.icon}</div>
                      <h3 className="text-fg font-semibold text-base mb-2">{c.title}</h3>
                      <p className="text-fg-muted text-base leading-relaxed">{c.text}</p>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-10">
                  <a
                    href="#service"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-accent/40 hover:border-accent text-accent font-semibold text-base transition-colors"
                  >
                    {t.method.cta}
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </Pile>
        </div>
      </section>

      {/* ── PRESTATION PAYANTE — un problème à résoudre ── */}
      <section id="service" className="py-20 px-6 bg-surface-2">
        <div className="max-w-4xl mx-auto">

          <Pile>
            {/* Panneau 1 — se fige pendant que la carte de réservation remonte. */}
            <div className="bg-surface-2 pb-2">
              <div className="text-center mb-12">
                <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 px-4 py-1.5 rounded-full">
                  {t.service.badge}
                </span>
                <h2 className="text-title font-extrabold text-fg mb-3">
                  <Titre texte={t.service.title} />
                </h2>
                <p className="text-fg-muted text-base max-w-xl mx-auto">{t.service.subtitle}</p>
              </div>

              {/* Étapes */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {t.service.steps.map((s) => (
                  <CarteChevauchee key={s.n} badge={<Pastille>{s.n}</Pastille>}>
                    <h3 className="text-fg font-semibold text-base mb-1">{s.title}</h3>
                    <p className="text-fg-muted text-base leading-relaxed">{s.desc}</p>
                  </CarteChevauchee>
                ))}
              </div>
            </div>

            {/* Panneau 2 — remonte et recouvre le panneau 1. Sa hauteur
                détermine la durée pendant laquelle le panneau 1 reste figé. */}
            <div className="flex md:min-h-[55vh] items-center bg-surface-2 pb-16 pt-14">
              <div className="w-full">
                {/* Carte CTA — paiement + livrables */}
                <CarteChevauchee
                  className="border-accent/20"
                  badge={
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-xs font-bold text-accent-fg shadow-lg shadow-accent/40">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      {t.service.paid}
                    </span>
                  }
                >
                  <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                    <a
                      href={SERVICE.paymentUrl || SERVICE_EMAIL_FALLBACK}
                      {...(SERVICE.paymentUrl ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-accent hover:bg-accent-hover text-accent-fg font-semibold text-base transition-colors shadow-lg shadow-accent/20"
                    >
                      {t.service.ctaPay}
                    </a>

                    {SERVICE.notionUrl ? (
                      <a
                        href={SERVICE.notionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-line hover:border-accent text-fg-muted hover:text-fg font-semibold text-base transition-colors"
                      >
                        {t.service.notion}
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-line text-fg-subtle text-base font-semibold opacity-70 cursor-not-allowed">
                        {t.service.notion} · {t.service.soonTag}
                      </span>
                    )}

                    {SERVICE.formUrl ? (
                      <a
                        href={SERVICE.formUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-line hover:border-accent text-fg-muted hover:text-fg font-semibold text-base transition-colors"
                      >
                        {t.service.form}
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-line text-fg-subtle text-base font-semibold opacity-70 cursor-not-allowed">
                        {t.service.form} · {t.service.soonTag}
                      </span>
                    )}
                  </div>

                  {!SERVICE.paymentUrl && (
                    <p className="text-xs text-fg-subtle mt-4">{t.service.soon}</p>
                  )}
                </CarteChevauchee>
              </div>
            </div>
          </Pile>
        </div>
      </section>

      {/* ── PROJETS ── */}
      <section id="projets" className="py-20 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <Pile>
            {/* Panneau 1 — le titre seul, qui se fige. */}
            <div className="bg-surface pb-2">
              <div className="text-center mb-10">
                <h2 className="text-title font-extrabold text-fg mb-3">
                  <Titre texte={t.projects.title} />
                </h2>
                <p className="text-fg-muted text-base max-w-md mx-auto">{t.projects.subtitle}</p>
              </div>

              {PRODUITS_PANNEAU_1 > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {PRODUCTS.slice(0, PRODUITS_PANNEAU_1).map((product, i) => (
                    <ProductCard key={product.name} product={product} copy={t.projects.items[i]} labels={t.projects} />
                  ))}
                </div>
              )}
            </div>

            {/* Panneau 2 — le reste des produits remonte par-dessus. */}
            <div className="flex md:min-h-[55vh] items-center bg-surface pb-16 pt-14">
              <div className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {PRODUCTS.slice(PRODUITS_PANNEAU_1).map((product, i) => (
                  <ProductCard
                    key={product.name}
                    product={product}
                    copy={t.projects.items[i + PRODUITS_PANNEAU_1]}
                    labels={t.projects}
                  />
                ))}
              </div>

          <div className="text-center mt-10">
            <Link
              href="/produits"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-accent/40 hover:border-accent text-accent font-semibold text-base transition-colors"
            >
              {t.projects.all}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
              </div>
            </div>
          </Pile>
        </div>
      </section>

      {/* ── RÉSULTATS — ce que ça donne ── */}
      <section id="resultats" className="py-20 px-6 bg-surface-2">
        <div className="max-w-5xl mx-auto">
          <Pile>
            {/* Panneau 1 — les outils, avec leur état exact. */}
            <div className="bg-surface-2 pb-2">
              <div className="text-center mb-10">
                <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 px-4 py-1.5 rounded-full">
                  {t.results.badge}
                </span>
                <h2 className="text-title font-extrabold text-fg mb-3">
                  <Titre texte={t.results.title} />
                </h2>
                <p className="text-fg-muted text-base max-w-xl mx-auto">{t.results.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {t.results.items.map((it) => (
                  <div key={it.name} className="bg-card rounded-2xl p-6 border border-line shadow-sm flex flex-col">
                    <h3 className="text-fg font-bold text-base mb-2">{it.name}</h3>
                    <p className="text-xs font-semibold text-accent mb-1">{it.state}</p>
                    <p className="text-xs text-fg-subtle mb-4">{it.since}</p>
                    <p className="text-base text-fg-muted leading-relaxed mb-4 flex-1">{it.detail}</p>
                    <p className="text-xs text-fg-subtle border-t border-line pt-3">
                      <span className="font-semibold uppercase tracking-wide">{t.results.forLabel}</span> · {it.who}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Panneau 2 — les outils internes, puis le renvoi vers le catalogue. */}
            <div className="flex md:min-h-[55vh] items-center bg-surface-2 pb-16 pt-14">
              <div className="w-full">
                <CarteChevauchee
                  className="mx-auto max-w-2xl"
                  badge={
                    <Pastille>
                      <span aria-hidden="true">⚙</span>
                    </Pastille>
                  }
                >
                  <h3 className="text-fg font-semibold text-base mb-2">{t.results.internalTitle}</h3>
                  <p className="text-fg-muted text-base leading-relaxed">{t.results.internalText}</p>
                </CarteChevauchee>
                <div className="text-center mt-10">
                  <Link
                    href="/produits"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-accent/40 hover:border-accent text-accent font-semibold text-base transition-colors"
                  >
                    {t.results.all}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </Pile>
        </div>
      </section>

      {/* ── FAQ — questions avant de commencer ── */}
      <section id="faq" className="py-20 px-6 bg-surface">
        <div className="max-w-3xl mx-auto">
          <Pile>
            {/* Panneau 1 — le titre seul : un panneau figé ne peut pas contenir
                d'accordéon, il grandirait au-delà de l'écran à l'ouverture. */}
            <div className="bg-surface pb-2">
              <div className="text-center mb-10">
                <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 px-4 py-1.5 rounded-full">
                  {t.faq.badge}
                </span>
                <h2 className="text-title font-extrabold text-fg mb-3">
                  <Titre texte={t.faq.title} />
                </h2>
                <p className="text-fg-muted text-base max-w-md mx-auto">{t.faq.subtitle}</p>
              </div>
            </div>

            {/* Panneau 2 — les questions. Dernier panneau : hauteur libre. */}
            <div className="bg-surface pb-16 pt-14">
              <div className="space-y-3">
                {t.faq.items.map((it) => (
                  <details
                    key={it.q}
                    className="group rounded-2xl border border-line bg-card shadow-sm open:border-accent/40"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left font-semibold text-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent [&::-webkit-details-marker]:hidden">
                      {it.q}
                      <svg
                        className="h-5 w-5 shrink-0 text-accent transition-transform group-open:rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-5 pb-5 text-base leading-relaxed text-fg-muted">
                      <p>{it.a}</p>
                      {it.href && (
                        <p className="mt-3">
                          {it.href.startsWith('/') ? (
                            <Link href={it.href} className="font-semibold text-accent hover:underline">
                              {it.hrefLabel} →
                            </Link>
                          ) : (
                            <a href={it.href} className="font-semibold text-accent hover:underline">
                              {it.hrefLabel} →
                            </a>
                          )}
                        </p>
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </Pile>
        </div>
      </section>

      {/* ── STACK ── */}
      <section className="py-16 px-6 bg-surface-2">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold text-fg mb-2">{t.stack.title}</h2>
          <p className="text-fg-muted text-sm mb-10">{t.stack.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {STACK.map((label) => (
              <span key={label} className="px-4 py-2 rounded-xl bg-card border border-line text-sm text-fg-muted font-mono hover:border-accent hover:text-fg transition-colors">
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 px-6 bg-accent">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-title font-extrabold text-accent-fg mb-4">
            <Titre texte={t.contact.title} />
          </h2>
          <p className="text-accent-fg/80 text-sm mb-10 leading-relaxed">{t.contact.subtitle}</p>
          <ContactForm />
          <p className="text-accent-fg/60 text-xs my-6 uppercase tracking-wider">{t.contact.form.or}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white text-slate-900 hover:bg-white/90 font-semibold text-base transition-colors shadow-lg"
            >
              <LinkedInIcon className="w-4 h-4" />
              {t.contact.ctaLinkedin}
            </a>
            <a
              href="mailto:contact@no-code-hub.fr"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-white/50 hover:border-white text-accent-fg font-semibold text-base transition-colors"
            >
              contact@no-code-hub.fr
            </a>
          </div>
        </div>
      </section>

      <Footer
        siteName="NO-CODE-HUB"
        baseline={t.footer.baseline}
        accentColor="rgb(var(--accent))"
        contact={{ email: 'contact@no-code-hub.fr' }}
      />
    </div>
  )
}
