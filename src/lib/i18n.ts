import type { Lang } from './theme'

// Dictionnaire complet FR/EN. `fr` fait foi ; `en` doit garder la même forme.

export const DICT = {
  fr: {
    nav: {
      parcours: 'Parcours',
      jde: 'JDE · AS400',
      builder: 'Product Builder',
      projets: 'Projets',
      contact: 'Contact',
    },
    settings: {
      theme: 'Thème',
      light: 'Clair',
      dark: 'Sombre',
      language: 'Langue',
      color: 'Couleur',
      openMenu: 'Ouvrir le menu',
      closeMenu: 'Fermer le menu',
      settings: 'Préférences d’affichage',
    },
    hero: {
      badge: 'Product Builder · NO-CODE-HUB',
      tagline: 'De l’ERP AS400 à l’IA — je construis des outils qui tournent en production.',
      description:
        '30 ans d’expertise en systèmes d’information (JD Edwards, AS400), reconverti en Product Builder — no-code, automatisation et IA. Je conçois et j’assemble des SaaS utiles pour les professionnels, jusqu’à la mise en production.',
      ctaLinkedin: 'Me suivre sur LinkedIn',
      ctaProjects: 'Voir mes projets',
      imageAlt: 'Illustration : de l’ERP AS400 vers l’avenir — IA, no-code et automatisation',
    },
    parcours: {
      title: 'Mon parcours',
      subtitle: 'Une reconversion construite sur 30 ans d’expérience en systèmes d’information.',
      experiences: [
        { years: '1994 – 2023', label: 'Consultant ERP / JD Edwards AS400', detail: 'Total · Bonduelle · Bureau Veritas · Reckitt · Nexity…' },
        { years: '2023 – 2024', label: 'Certifications Google', detail: 'Cybersécurité (8 modules, 83–96 %) · Project Management' },
        { years: '2024 – auj.', label: 'Product Builder', detail: 'FastAPI · Next.js · Docker · Claude AI · VPS Hostinger' },
      ],
      stats: [
        { val: '30+', label: 'ans en SI' },
        { val: '10+', label: 'projets construits' },
        { val: '1', label: 'app en production' },
        { val: '100%', label: 'autonome' },
      ],
    },
    erp: {
      badge: 'Expertise ERP · disponible en mission',
      title: '30 ans sur JD Edwards & AS400',
      subtitle:
        'Consultant technico-fonctionnel senior sur JD Edwards World Software et EnterpriseOne. Développement RPG 400, paramétrage, TMA, migration et accompagnement utilisateurs — en industrie, finance, agroalimentaire, santé et énergie.',
      modulesTitle: 'Modules & compétences JDE',
      versionsLabel: 'Versions JDE',
      clientsTitle: 'Clients & secteurs',
      concreteTitle: 'Ce que j’ai fait concrètement',
      concrete: [
        { icon: '🔧', title: 'Développement & TMA', desc: 'Développements spécifiques RPG 400 / GAP3, maintenance corrective et évolutive, gestion des clôtures comptables, interfaces EDI/XML.' },
        { icon: '📋', title: 'Paramétrage & Analyse', desc: 'Rédaction des dossiers d’analyse, paramétrage des modules JDE, tests unitaires, documentation fonctionnelle et technique.' },
        { icon: '👥', title: 'Support & Formation', desc: 'Accompagnement utilisateurs métier, conduite du changement, support Run, coordination d’éditeurs (Infor, Talentia, Cegid).' },
      ],
      modules: [
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
      ],
      clients: [
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
      ],
      ctaText: 'Vous recherchez un consultant JD Edwards / AS400 ? Je reste ouvert aux missions.',
      ctaDownload: 'Télécharger mon CV JDE / AS400 (PDF)',
      ctaLinkedin: 'Voir mon profil LinkedIn complet',
    },
    builder: {
      badge: 'Reconversion · Product Builder',
      title: 'De l’ERP à l’IA — Product Builder',
      subtitle:
        'Depuis 2023, je conçois, automatise et déploie des produits numériques utiles — en orchestrant no-code, automatisation, IA et code quand il le faut, de l’idée à la mise en production sur mon propre serveur.',
      stackTitle: 'Stack & compétences',
      approachLabel: 'Approche',
      approachText:
        'MVP d’abord, sécurité non-négociable, documentation systématique — la méthode d’un ancien des systèmes critiques appliquée au web.',
      certsTitle: 'Certifications & formation',
      certs: [
        { label: 'Cybersécurité', issuer: 'Google · 2024 — 8 modules (83–96 %)' },
        { label: 'Project Management', issuer: 'Google · 2025' },
        { label: 'Product Builder', issuer: 'UnCode School · examen 2026 — résultat en attente' },
      ],
      nocode: {
        title: 'Compétences Product Builder — UnCode School',
        intro:
          'Formé au métier de Product Builder à l’UnCode School : concevoir et livrer une application métier complète en no-code / low-code, du cadrage à la mise en production.',
        groups: [
          { cat: 'Cadrage & modélisation', tools: ['Note de cadrage', 'BPMN', 'Architecture', 'ERD', 'Notion'] },
          { cat: 'No-code — bases & interfaces', tools: ['Airtable', 'Softr', 'Webflow', 'Figma'] },
          { cat: 'Automatisation & API', tools: ['Make', 'n8n', 'APIs', 'Automatisation Airtable'] },
          { cat: 'IA & production', tools: ['Claude Code', 'IA / LLM', 'Vibe coding', 'Loom'] },
        ],
        coachTitle: 'Cas clients à la demande',
        coachDesc:
          'Grâce à ma formation, j’analyse et traite des cas clients à la demande sur toute la chaîne — cadrage, base Airtable, interface Softr, automatisations Make / n8n — en conditions réelles de mission.',
      },
      bridgeTitle: 'Deux mondes qui se nourrissent',
      bridgeSubtitle:
        'Mon passé ERP n’est pas derrière moi : c’est ce qui rend mes produits fiables. Et le développement moderne est ce qui peut moderniser l’ERP.',
      bridge: [
        {
          icon: '🏛️',
          title: 'L’ERP nourrit mes produits',
          points: [
            'Rigueur acquise sur 30 ans de systèmes financiers critiques',
            'Compréhension métier réelle : finance, distribution, RGPD',
            'Culture de la donnée, du test et de la documentation',
            'Sens du support et de la conduite du changement',
          ],
        },
        {
          icon: '🚀',
          title: 'Le Product Building modernise l’ERP',
          points: [
            'IA et automatisation autour du legacy AS400',
            'Portails web modernes connectés aux systèmes existants',
            'Déploiement rapide, en production, à coût maîtrisé',
            'MVP livrés seul, de la conception à la mise en ligne',
          ],
        },
      ],
      ctaText: 'Intéressé par mon profil de Product Builder / automatisation ?',
      ctaDownload: 'Télécharger mon CV reconversion (PDF)',
      ctaProjects: 'Voir ce que je construis',
    },
    service: {
      badge: 'Prestation · à la demande',
      title: 'Un problème métier à résoudre ?',
      subtitle:
        'Décrivez votre besoin et je le transforme en solution no-code : base de données, interface et automatisations. Une prestation cadrée, de l’analyse à la livraison.',
      steps: [
        { n: '1', title: 'Vous réservez', desc: 'Vous réglez l’analyse en ligne — le point de départ de la mission.' },
        { n: '2', title: 'Vous décrivez', desc: 'Vous recevez un modèle Notion et un formulaire à compléter pour cadrer votre problème.' },
        { n: '3', title: 'Je livre', desc: 'Je vous propose une solution : cadrage, maquette et plan de mise en œuvre no-code.' },
      ],
      paid: 'Prestation payante',
      ctaPay: 'Réserver mon analyse',
      soon: 'Paiement en ligne bientôt disponible — écrivez-moi en attendant.',
      notion: 'Modèle Notion',
      form: 'Formulaire',
      soonTag: 'bientôt',
    },
    projects: {
      title: 'Ce que je construis',
      subtitle: 'Des outils SaaS pensés pour les professionnels — en production ou en cours de développement.',
      live: 'En ligne',
      soon: 'Bientôt',
      view: 'Voir le projet',
      inDev: 'En développement',
      items: [
        { baseline: 'App de pronostics Coupe du Monde 2026', description: 'Groupes de pronos, classements, bot Discord, badges communauté, export Excel premium — 100 % custom.' },
        { baseline: 'Plateforme de cybersécurité multi-tenant', description: 'MFA, RBAC, audit logs, détection d’incidents, formation — SaaS B2B pour PME.' },
        { baseline: 'Créer votre CV professionnel en minutes', description: 'Templates modernes, export PDF/Word, suggestions IA, import LinkedIn.' },
        { baseline: 'Gérez vos biens locatifs simplement', description: 'Locataires, quittances PDF, paiements, documents — tout en une plateforme.' },
      ],
    },
    stack: {
      title: 'Ma stack technique',
      subtitle: 'Les outils avec lesquels je construis chaque jour.',
    },
    contact: {
      title: 'Vous avez un projet ? Parlons-en.',
      subtitle:
        'Expert ERP disponible pour des missions de consulting, automatisation & product building ou collaboration sur des projets SaaS.',
      ctaLinkedin: 'Me contacter sur LinkedIn',
      form: {
        name: 'Votre nom',
        email: 'Votre email',
        message: 'Votre message',
        send: 'Envoyer',
        sending: 'Envoi…',
        ok: 'Message envoyé — je vous réponds sous 48 h.',
        error: 'Envoi impossible pour le moment. Écrivez-moi directement à contact@no-code-hub.fr.',
        invalid: 'Merci de renseigner un nom, un email valide et un message (10 caractères minimum).',
        or: 'ou',
      },
    },
    footer: {
      baseline: 'Des outils no-code pour créer, analyser, organiser.',
    },
  },

  en: {
    nav: {
      parcours: 'Journey',
      jde: 'JDE · AS400',
      builder: 'Product Builder',
      projets: 'Projects',
      contact: 'Contact',
    },
    settings: {
      theme: 'Theme',
      light: 'Light',
      dark: 'Dark',
      language: 'Language',
      color: 'Color',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      settings: 'Display preferences',
    },
    hero: {
      badge: 'Product Builder · NO-CODE-HUB',
      tagline: 'From AS400 ERP to AI — I build tools that run in production.',
      description:
        '30 years of expertise in information systems (JD Edwards, AS400), now a Product Builder — no-code, automation and AI. I design and assemble useful SaaS for professionals, all the way to production.',
      ctaLinkedin: 'Follow me on LinkedIn',
      ctaProjects: 'See my projects',
      imageAlt: 'Illustration: from AS400 ERP toward the future — AI, no-code and automation',
    },
    parcours: {
      title: 'My journey',
      subtitle: 'A career change built on 30 years of experience in information systems.',
      experiences: [
        { years: '1994 – 2023', label: 'ERP Consultant / JD Edwards AS400', detail: 'Total · Bonduelle · Bureau Veritas · Reckitt · Nexity…' },
        { years: '2023 – 2024', label: 'Google Certifications', detail: 'Cybersecurity (8 modules, 83–96%) · Project Management' },
        { years: '2024 – now', label: 'Product Builder', detail: 'FastAPI · Next.js · Docker · Claude AI · Hostinger VPS' },
      ],
      stats: [
        { val: '30+', label: 'years in IT' },
        { val: '10+', label: 'projects built' },
        { val: '1', label: 'app in production' },
        { val: '100%', label: 'solo / autonomous' },
      ],
    },
    erp: {
      badge: 'ERP expertise · available for assignments',
      title: '30 years on JD Edwards & AS400',
      subtitle:
        'Senior technical-functional consultant on JD Edwards World Software and EnterpriseOne. RPG 400 development, configuration, application maintenance, migration and user support — across industry, finance, food, healthcare and energy.',
      modulesTitle: 'JDE modules & skills',
      versionsLabel: 'JDE versions',
      clientsTitle: 'Clients & sectors',
      concreteTitle: 'What I did, concretely',
      concrete: [
        { icon: '🔧', title: 'Development & Maintenance', desc: 'Custom RPG 400 / GAP3 development, corrective and evolutive maintenance, accounting close management, EDI/XML interfaces.' },
        { icon: '📋', title: 'Configuration & Analysis', desc: 'Writing analysis specs, configuring JDE modules, unit testing, functional and technical documentation.' },
        { icon: '👥', title: 'Support & Training', desc: 'Business user support, change management, Run support, vendor coordination (Infor, Talentia, Cegid).' },
      ],
      modules: [
        'Finance (GL, AR, AP)',
        'Distribution (orders, stock)',
        'Manufacturing & MRP',
        'Accounting close',
        'Contracts & Time/Expense',
        'ECS Oil & Chemical',
        'EDI / XML interfaces',
        'RPG 400 & GAP3',
        'DB2 / WinSQL',
        'PRMS · CA-PRMS',
      ],
      clients: [
        { name: 'Total', sector: 'Energy' },
        { name: 'Bonduelle', sector: 'Food industry' },
        { name: 'Bureau Veritas', sector: 'Certification' },
        { name: 'Reckitt Benckiser', sector: 'Consumer goods' },
        { name: 'Nexity', sector: 'Real estate' },
        { name: 'Alcon', sector: 'Medical' },
        { name: 'SmithKline', sector: 'Pharma' },
        { name: 'Givenchy', sector: 'Luxury' },
        { name: 'Soufflet', sector: 'Agriculture' },
        { name: 'PFSWeb', sector: 'Logistics' },
      ],
      ctaText: 'Looking for a JD Edwards / AS400 consultant? I remain open to assignments.',
      ctaDownload: 'Download my JDE / AS400 résumé (PDF)',
      ctaLinkedin: 'See my full LinkedIn profile',
    },
    builder: {
      badge: 'Career change · Product Builder',
      title: 'From ERP to AI — Product Builder',
      subtitle:
        'Since 2023 I design, automate and deploy useful digital products — orchestrating no-code, automation, AI and code when needed, from idea to production on my own server.',
      stackTitle: 'Stack & skills',
      approachLabel: 'Approach',
      approachText:
        'MVP first, non-negotiable security, systematic documentation — the method of a critical-systems veteran applied to the web.',
      certsTitle: 'Certifications & training',
      certs: [
        { label: 'Cybersecurity', issuer: 'Google · 2024 — 8 modules (83–96%)' },
        { label: 'Project Management', issuer: 'Google · 2025' },
        { label: 'Product Builder', issuer: 'UnCode School · 2026 exam — result pending' },
      ],
      nocode: {
        title: 'Product Builder skills — UnCode School',
        intro:
          'Trained as a Product Builder at UnCode School: designing and shipping a complete business application in no-code / low-code, from scoping to production.',
        groups: [
          { cat: 'Scoping & modeling', tools: ['Scoping note', 'BPMN', 'Architecture', 'ERD', 'Notion'] },
          { cat: 'No-code — databases & interfaces', tools: ['Airtable', 'Softr', 'Webflow', 'Figma'] },
          { cat: 'Automation & API', tools: ['Make', 'n8n', 'APIs', 'Airtable automation'] },
          { cat: 'AI & delivery', tools: ['Claude Code', 'AI / LLM', 'Vibe coding', 'Loom'] },
        ],
        coachTitle: 'Client cases on demand',
        coachDesc:
          'Thanks to my training, I analyze and handle client cases on demand across the full chain — scoping, Airtable database, Softr interface, Make / n8n automations — in real assignment conditions.',
      },
      bridgeTitle: 'Two worlds feeding each other',
      bridgeSubtitle:
        'My ERP past isn’t behind me: it’s what makes my products reliable. And modern development is what can modernize ERP.',
      bridge: [
        {
          icon: '🏛️',
          title: 'ERP feeds my products',
          points: [
            'Rigor built over 30 years of critical financial systems',
            'Real business understanding: finance, distribution, GDPR',
            'A culture of data, testing and documentation',
            'A feel for support and change management',
          ],
        },
        {
          icon: '🚀',
          title: 'Product building modernizes ERP',
          points: [
            'AI and automation around legacy AS400',
            'Modern web portals connected to existing systems',
            'Fast deployment, in production, at controlled cost',
            'MVPs delivered solo, from design to go-live',
          ],
        },
      ],
      ctaText: 'Interested in my Product Builder / automation profile?',
      ctaDownload: 'Download my career-change résumé (PDF)',
      ctaProjects: 'See what I build',
    },
    service: {
      badge: 'Service · on demand',
      title: 'A business problem to solve?',
      subtitle:
        'Describe your need and I turn it into a no-code solution: database, interface and automations. A scoped engagement, from analysis to delivery.',
      steps: [
        { n: '1', title: 'You book', desc: 'You pay for the analysis online — the starting point of the engagement.' },
        { n: '2', title: 'You describe', desc: 'You receive a Notion template and a form to fill in and frame your problem.' },
        { n: '3', title: 'I deliver', desc: 'I propose a solution: scoping, mockup and a no-code implementation plan.' },
      ],
      paid: 'Paid service',
      ctaPay: 'Book my analysis',
      soon: 'Online payment coming soon — email me in the meantime.',
      notion: 'Notion template',
      form: 'Form',
      soonTag: 'soon',
    },
    projects: {
      title: 'What I build',
      subtitle: 'SaaS tools designed for professionals — in production or under development.',
      live: 'Live',
      soon: 'Soon',
      view: 'View project',
      inDev: 'In development',
      items: [
        { baseline: '2026 World Cup prediction app', description: 'Prediction groups, leaderboards, Discord bot, community badges, premium Excel export — 100% custom.' },
        { baseline: 'Multi-tenant cybersecurity platform', description: 'MFA, RBAC, audit logs, incident detection, training — B2B SaaS for SMBs.' },
        { baseline: 'Build your professional résumé in minutes', description: 'Modern templates, PDF/Word export, AI suggestions, LinkedIn import.' },
        { baseline: 'Manage your rental properties simply', description: 'Tenants, PDF receipts, payments, documents — all in one platform.' },
      ],
    },
    stack: {
      title: 'My tech stack',
      subtitle: 'The tools I build with every day.',
    },
    contact: {
      title: 'Got a project? Let’s talk.',
      subtitle:
        'ERP expert available for consulting, automation & product-building assignments, or collaboration on SaaS projects.',
      ctaLinkedin: 'Contact me on LinkedIn',
      form: {
        name: 'Your name',
        email: 'Your email',
        message: 'Your message',
        send: 'Send',
        sending: 'Sending…',
        ok: 'Message sent — I’ll reply within 48 h.',
        error: 'Sending failed for now. Email me directly at contact@no-code-hub.fr.',
        invalid: 'Please provide a name, a valid email and a message (10 characters minimum).',
        or: 'or',
      },
    },
    footer: {
      baseline: 'No-code tools to create, analyze, organize.',
    },
  },
}

export type Dict = (typeof DICT)['fr']

export function useDict(lang: Lang): Dict {
  return DICT[lang]
}
