import { useMutation } from '@tanstack/react-query'

import { updateField } from '@api/updateField'
import { useUserStore } from '@features/user/user-store'
import { useTapStore } from './tap-store'

export const useUpdateTapsMutation = () => {
  const user = useUserStore(store => store.user)
  const taps = useTapStore(store => store.taps)

  const resetTaps = useTapStore(store => store.resetTaps)

  const { userId, userName } = user

  return useMutation({
    mutationKey: [updateField.key],
    mutationFn: () => updateField.queryFn({ count: taps, id: userId, userName }),
    onMutate: () => ({ taps }),
    onSuccess: (responseCount, _, context) => {
      if (responseCount < context.taps) {
        resetTaps(responseCount)
      }
    },
    onError: () => {
      // TODO: add alert for error
    }
  })
}
