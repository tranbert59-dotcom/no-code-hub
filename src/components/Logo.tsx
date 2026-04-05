import Image from 'next/image'

interface LogoProps {
  className?: string
  textClassName?: string
  size?: number
}

export function Logo({ className = '', textClassName = '', size = 32 }: LogoProps) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/logo.png"
        alt="NO-CODE-HUB logo"
        width={size}
        height={size}
        className="rounded-lg"
        priority
      />
      <span className={`font-bold text-white text-lg tracking-tight ${textClassName}`}>
        NO-CODE-HUB
      </span>
    </span>
  )
}
