import { useMutation } from '@tanstack/react-query';

import { getDocument as leaderboard } from '@api/getDocument';

export const useLeaderboardMutation = () => {
  return useMutation({
    mutationKey: [leaderboard.key],
    mutationFn: leaderboard.queryFn,
  });
};
