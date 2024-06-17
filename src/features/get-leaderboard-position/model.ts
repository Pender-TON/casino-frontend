import { useQuery } from '@tanstack/react-query';

import getLeaderboardPosition from '@api/getPosition';
import { useUserStore } from '@features/user/user-store';

export const useLeaderboardPosition = () => {
  const user = useUserStore(store => store.user);
  return useQuery({
    queryKey: [getLeaderboardPosition.key],
    queryFn: () => getLeaderboardPosition.queryFn({ userId: user.userId }),
  });
};
