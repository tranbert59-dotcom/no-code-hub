interface LogoProps {
  className?: string
  textClassName?: string
}

/**
 * Le « N » du logo no-code hub, seul (décision BC du 23/10) : un N aux angles
 * arrondis, un point à chaque extrémité. Bleu de la marque, quel que soit
 * l'accent choisi par le visiteur.
 */
export function LogoN({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M8 25V10.2a1.6 1.6 0 0 1 2.8-1.1l10.4 13.8a1.6 1.6 0 0 0 2.8-1.1V7"
        stroke="#4F8EF7"
        strokeWidth={3.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="25.5" r="3" fill="#4F8EF7" />
      <circle cx="24" cy="6.5" r="3" fill="#4F8EF7" />
    </svg>
  )
}

// Logo de la barre de nav : le N, puis le nom.
export function Logo({ className = '', textClassName = '' }: LogoProps) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <LogoN />
      <span className={`font-bold text-fg text-xl tracking-tight ${textClassName}`}>
        NO-CODE-HUB
      </span>
    </span>
  )
}
