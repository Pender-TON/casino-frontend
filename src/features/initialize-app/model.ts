import { useQuery } from '@tanstack/react-query'

import { dbInit } from '@api/dbInit'
import { useUserStore } from '@features/user/user-store'
import { verifySignature } from '@api/verifySignature'
import { useTonAddress } from '@tonconnect/ui-react'

// Use to verify and get user info BEFORE useInitializeApp
export const useVerifyInitData = (initData: string) => {
  return useQuery({
    queryKey: [verifySignature.key, initData],
    queryFn: () => verifySignature.queryFn({ initData })
  })
}

export const useInitializeApp = () => {
  const user = useUserStore(store => store.user)
  const { userId, userName } = user

  const userFriendlyAddress = useTonAddress()

  return useQuery({
    queryKey: [dbInit.key, userId, userName, userFriendlyAddress],
    queryFn: () => dbInit.queryFn({ userId, userName, address: userFriendlyAddress })
  })
}
