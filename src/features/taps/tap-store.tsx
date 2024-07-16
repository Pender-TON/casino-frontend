import { createStore, useStore } from 'zustand'

import { createZustandContext } from '@utils/createZustandContext'

interface TapState {
  taps: number
  tapMultiplier: number
  increaseTaps: (by: number) => void
  resetTaps: (to: number) => void
  changeTapMultiplier: (to: number) => void
}

const getStore = (initialState: { taps: number; tapMultiplier: number }) => {
  return createStore<TapState>()(set => ({
    taps: initialState.taps,
    tapMultiplier: initialState.tapMultiplier,
    increaseTaps: by => set(state => ({ taps: state.taps + by * state.tapMultiplier })),
    resetTaps: to => set(() => ({ taps: to })),
    changeTapMultiplier: to => set(() => ({ tapMultiplier: to }))
  }))
}

export const TapStore = createZustandContext(getStore)

export const useTapStore = <T,>(selector: (state: TapState) => T): T => {
  const store = TapStore.useContext()

  if (!store) throw new Error('Missing TapStore.Provider in the tree')

  return useStore(store, selector)
}
