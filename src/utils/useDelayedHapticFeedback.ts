import WebApp from '@twa-dev/sdk'
import { useCallback } from 'react'

export const useDelayedHapticFeedback = () => {
  const delayedHapticFeedback = useCallback(
    (impactType: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft', delayMs: number) => {
      const timeoutId = setTimeout(() => WebApp.HapticFeedback.impactOccurred(impactType), delayMs)
      return () => clearTimeout(timeoutId)
    },
    []
  )

  return delayedHapticFeedback
}
