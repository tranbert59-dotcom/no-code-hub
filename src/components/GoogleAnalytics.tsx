'use client'

// Google Analytics 4, chargé UNIQUEMENT après consentement explicite.
//
// Pourquoi ce composant plutôt que le script collé dans le layout : en France,
// la mesure d'audience Google n'est pas exemptée de consentement. Tant que le
// visiteur n'a pas accepté la catégorie « analytics » de la bannière, aucune
// requête ne part vers Google — le script n'est même pas téléchargé. C'est plus
// strict que le « Consent Mode » de Google, qui charge le script et se contente
// de brider ce qu'il remonte.
//
// L'identifiant vient de NEXT_PUBLIC_GA_ID. Sans cette variable, le composant
// ne fait rien : un oubli de configuration ne peut pas faire fuiter de données.

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID
const CLE_CONSENTEMENT = 'cookie_consent'

type Consentement = { decided?: boolean; analytics?: boolean }

function lireConsentement(): Consentement {
  try {
    return JSON.parse(localStorage.getItem(CLE_CONSENTEMENT) || '{}') as Consentement
  } catch {
    // Navigation privée, stockage bloqué : on considère que rien n'est accepté.
    return {}
  }
}

export function GoogleAnalytics() {
  const [autorise, setAutorise] = useState(false)
  const charge = useRef(false)
  const chemin = usePathname()

  // La bannière du kit garde son état dans son propre composant : elle ne
  // prévient personne quand on accepte. On relit donc le stockage — mais
  // seulement tant que le visiteur n'a pas tranché. Dès qu'il a décidé, on
  // arrête de relire.
  useEffect(() => {
    if (!GA_ID) return
    const relire = () => setAutorise(lireConsentement().analytics === true)
    relire()
    const minuteur = setInterval(() => {
      relire()
      if (lireConsentement().decided === true) clearInterval(minuteur)
    }, 1000)
    window.addEventListener('storage', relire)
    return () => {
      clearInterval(minuteur)
      window.removeEventListener('storage', relire)
    }
  }, [])

  // Chargement du script, une seule fois, et seulement si c'est autorisé.
  useEffect(() => {
    if (!GA_ID || !autorise || charge.current) return
    charge.current = true

    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    document.head.appendChild(script)

    const w = window as unknown as { dataLayer: unknown[]; gtag: (...a: unknown[]) => void }
    w.dataLayer = w.dataLayer || []
    w.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer.push(arguments)
    }
    w.gtag('js', new Date())
    // `anonymize_ip` : GA4 tronque l'IP avant de la stocker.
    // `send_page_view: false` : les vues sont envoyées par l'effet ci-dessous,
    // sinon la première page serait comptée deux fois.
    w.gtag('config', GA_ID, { anonymize_ip: true, send_page_view: false })
  }, [autorise])

  // Retrait du consentement en cours de visite. Le script ne peut pas être
  // « déchargé », mais Google prévoit un drapeau d'arrêt : une fois posé, plus
  // aucune mesure n'est envoyée. Sans lui, refuser après avoir accepté
  // n'aurait aucun effet avant le rechargement de la page.
  useEffect(() => {
    if (!GA_ID || !charge.current) return
    ;(window as unknown as Record<string, boolean>)[`ga-disable-${GA_ID}`] = !autorise
  }, [autorise])

  // Une vue par changement d'adresse. Sans ça, une application en App Router
  // ne remonterait que la page d'arrivée : les navigations internes ne
  // rechargent pas la page et passeraient sous le radar.
  useEffect(() => {
    if (!GA_ID || !autorise || !chemin) return
    const w = window as unknown as { gtag?: (...a: unknown[]) => void }
    w.gtag?.('event', 'page_view', { page_path: chemin, page_location: window.location.href })
  }, [autorise, chemin])

  return null
}
