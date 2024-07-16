import { useTonAddress } from '@tonconnect/ui-react'

import { PlainButton } from '@components/ui/plain-button'
import { useUpdateWalletAddress } from '@features/wallet/update-wallet-address'
import { throttle } from 'lodash'

export const CheckWalletConnectButton = () => {
  const wallet = useTonAddress()

  const { mutateAsync: updateAddress, isPending } = useUpdateWalletAddress()

  const handleCheckUpgrade = () => updateAddress(wallet)

  if (wallet === '') return null

  return (
    <PlainButton loading={isPending} onClick={throttle(handleCheckUpgrade, 3000)}>
      Check
    </PlainButton>
  )
}
