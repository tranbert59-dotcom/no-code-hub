'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Apparition douce des <section> au défilement.
// Seules les sections encore hors écran au chargement sont masquées puis révélées :
// pas de flash au-dessus de la ligne de flottaison, et sans JS tout reste visible.
// Désactivé si l'utilisateur préfère réduire les animations.
export function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('reveal-in')
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
    )

    const sections = Array.from(document.querySelectorAll<HTMLElement>('body section'))
    for (const el of sections) {
      if (el.getBoundingClientRect().top < window.innerHeight) continue
      el.classList.add('reveal')
      observer.observe(el)
    }

    return () => {
      observer.disconnect()
      for (const el of sections) el.classList.remove('reveal', 'reveal-in')
    }
  }, [pathname])

  return null
}
