import { useQuery } from '@tanstack/react-query'

import { verifySignature } from '@api/verifySignature'

export const useVerifyInitData = (initData: string) => {
  return useQuery({
    queryKey: [verifySignature.key, initData],
    queryFn: () => verifySignature.queryFn({ initData })
  })
}
