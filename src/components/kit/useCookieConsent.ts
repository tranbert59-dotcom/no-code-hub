'use client'
import { useState, useEffect, useCallback } from 'react'

export type ConsentCategory = 'essential' | 'functional' | 'analytics' | 'marketing'

export interface CookieConsent {
  decided: boolean
  essential: true       // toujours true — non désactivable
  functional: boolean
  analytics: boolean
  marketing: boolean
}

const STORAGE_KEY = 'cookie_consent'

const DEFAULT_CONSENT: CookieConsent = {
  decided:    false,
  essential:  true,
  functional: false,
  analytics:  false,
  marketing:  false,
}

function loadConsent(): CookieConsent {
  if (typeof window === 'undefined') return DEFAULT_CONSENT
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return DEFAULT_CONSENT
    return { ...DEFAULT_CONSENT, ...JSON.parse(raw), essential: true }
  } catch {
    return DEFAULT_CONSENT
  }
}

function saveConsent(c: CookieConsent) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(c))
}

export function useCookieConsent() {
  const [consent, setConsentState] = useState<CookieConsent>(DEFAULT_CONSENT)

  useEffect(() => {
    setConsentState(loadConsent())
  }, [])

  const acceptAll = useCallback(() => {
    const c: CookieConsent = { decided: true, essential: true, functional: true, analytics: true, marketing: true }
    saveConsent(c)
    setConsentState(c)
  }, [])

  const rejectAll = useCallback(() => {
    const c: CookieConsent = { decided: true, essential: true, functional: false, analytics: false, marketing: false }
    saveConsent(c)
    setConsentState(c)
  }, [])

  const saveCustom = useCallback((prefs: Omit<CookieConsent, 'decided' | 'essential'>) => {
    const c: CookieConsent = { decided: true, essential: true, ...prefs }
    saveConsent(c)
    setConsentState(c)
  }, [])

  const reset = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY)
    setConsentState(DEFAULT_CONSENT)
  }, [])

  return { consent, acceptAll, rejectAll, saveCustom, reset }
}
