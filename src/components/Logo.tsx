interface LogoProps {
  className?: string
  textClassName?: string
}

// Logo de la barre de nav : texte seul (l'icône est portée par le grand logo du hero).
export function Logo({ className = '', textClassName = '' }: LogoProps) {
  return (
    <span className={`flex items-center ${className}`}>
      <span className={`font-bold text-fg text-xl tracking-tight ${textClassName}`}>
        NO-CODE-HUB
      </span>
    </span>
  )
}
