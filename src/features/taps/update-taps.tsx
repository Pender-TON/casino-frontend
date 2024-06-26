import { useMutation } from '@tanstack/react-query';

import { updateField } from '@api/updateField';
import { useUserStore } from '@features/user/user-store';
import { useTapStore } from './tap-store';

export const useUpdateTapsMutation = () => {
  const user = useUserStore(store => store.user);
  const resetTaps = useTapStore(store => store.resetTaps);
  const fallbackTaps = useTapStore(store => store.fallbackTaps);
  const setFallbackTaps = useTapStore(store => store.setFallbackTaps);

  const { userId, userName } = user;

  return useMutation({
    mutationKey: [updateField.key],
    mutationFn: (count: number) => updateField.queryFn({ count, userId, userName }),
    onSuccess: (responseCount, payloadCount) => {
      if (responseCount < payloadCount) {
        resetTaps(responseCount);
      }
      setFallbackTaps(responseCount);
    },
    onError: () => {
      resetTaps(fallbackTaps);
    },
  });
};
