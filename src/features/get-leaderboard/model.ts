import { useMutation } from '@tanstack/react-query';

import leaderboard from '@api/getDocument';

export const useLeaderboardMutation = () => {
  return useMutation({
    mutationKey: [leaderboard.key],
    mutationFn: leaderboard.queryFn,
  });
};
