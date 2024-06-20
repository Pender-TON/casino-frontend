import { skipToken, useQuery } from '@tanstack/react-query'

import { dbInit } from '@api/dbInit'
import { verifySignature } from '@api/verifySignature'
import { useTonAddress } from '@tonconnect/ui-react'

// Use to verify and get user info BEFORE useInitializeApp
export const useVerifyInitData = (initData: string) => {
  return useQuery({
    queryKey: [verifySignature.key, initData],
    queryFn: () => verifySignature.queryFn({ initData })
  })
}

export const useInitializeApp = (userId: number | undefined, userName: string | undefined) => {
  const userFriendlyAddress = useTonAddress()

  return useQuery({
    queryKey: [dbInit.key, userId, userName, userFriendlyAddress],
    queryFn: userId && userName ? () => dbInit.queryFn({ userId, userName, address: userFriendlyAddress }) : skipToken
  })
}
