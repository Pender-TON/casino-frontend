import { useEffect } from 'react'
import { TonConnectButton, useTonAddress } from '@tonconnect/ui-react'

import { useUpdateWalletAddress } from '@features/wallet/update-wallet-address'
import { useWalletStore } from '@features/wallet/wallet-store'
import { cn } from '@utils/cn'

export interface TonWalletButtonProps {
  className?: string
}

export const TonWalletButton = (props: TonWalletButtonProps) => {
  const { className } = props
  const tonApiWalletAddress = useTonAddress()
  const walletAddress = useWalletStore(store => store.walletAddress)

  const { mutate: updateAddress } = useUpdateWalletAddress()

  useEffect(() => {
    if (tonApiWalletAddress !== walletAddress) {
      if (tonApiWalletAddress === '' && walletAddress === null) return

      updateAddress(tonApiWalletAddress)
    }
  }, [tonApiWalletAddress, walletAddress, updateAddress])

  return <TonConnectButton className={cn('', className)} />
}
