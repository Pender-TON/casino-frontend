import { skipToken, useQuery } from '@tanstack/react-query'

import { getPosition as getLeaderboardPosition } from '@api/getPosition'

export const useLeaderboardPosition = (userId?: number) => {
  return useQuery({
    queryKey: [getLeaderboardPosition.key, userId],
    queryFn: userId ? () => getLeaderboardPosition.queryFn({ userId }) : skipToken
  })
}
