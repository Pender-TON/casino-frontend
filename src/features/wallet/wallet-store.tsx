import { createStore, useStore } from 'zustand'

import { createZustandContext } from '@utils/createZustandContext'

interface WalletState {
  walletAddress: string | null
  isWalletConnected: boolean
  changeAddress: (to: string | null) => void
}

const getStore = (initialState: { address: string | null }) => {
  return createStore<WalletState>()(set => ({
    walletAddress: initialState.address,
    isWalletConnected: Boolean(initialState.address),
    changeAddress: to => set(() => ({ walletAddress: to, isWalletConnected: Boolean(to) }))
  }))
}

export const WalletStore = createZustandContext(getStore)

export const useWalletStore = <T,>(selector: (state: WalletState) => T): T => {
  const store = WalletStore.useContext()

  if (!store) throw new Error('Missing WalletStore.Provider in the tree')

  return useStore(store, selector)
}
