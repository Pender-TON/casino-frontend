import { useMutation } from '@tanstack/react-query'

import { updateAddress } from '@api/updateAddress'
import { useUserStore } from '@features/user/user-store'
import { useTapStore } from '@features/taps'
import { useWalletStore } from './wallet-store'

export const useUpdateWalletAddress = () => {
  const user = useUserStore(store => store.user)
  const changeTapMultiplier = useTapStore(store => store.changeTapMultiplier)
  const changeAddress = useWalletStore(store => store.changeAddress)

  const { userId } = user

  return useMutation({
    mutationKey: [updateAddress.key, userId],
    mutationFn: (address: string) => updateAddress.queryFn({ id: userId, address }),
    onSuccess: (response, address) => {
      changeTapMultiplier(response.multiplier)
      changeAddress(address !== '' ? address : null)
    },
    onError: () => {
      // TODO: add alert for error
    }
  })
}
