import Image from 'next/image'

interface LogoProps {
  className?: string
  textClassName?: string
  size?: number
}

export function Logo({ className = '', textClassName = '', size = 40 }: LogoProps) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <Image
        src="/logo.png"
        alt="NO-CODE-HUB logo"
        width={size}
        height={size}
        className="rounded-lg"
        priority
      />
      <span className={`font-bold text-white text-xl tracking-tight ${textClassName}`}>
        NO-CODE-HUB
      </span>
    </span>
  )
}
