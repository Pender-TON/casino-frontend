import { useQuery } from '@tanstack/react-query';

import { dbInit } from '@api/dbInit';
import { useUserStore } from '@features/user/user-store';
import { verifySignature } from '@api/verifySignature';

// Use to verify and get user info BEFORE useInitializeApp
export const useVerifyInitData = (initData: string) => {
  return useQuery({
    queryKey: [verifySignature.key],
    queryFn: () => verifySignature.queryFn({ initData }),
  });
};

export const useInitializeApp = () => {
  const user = useUserStore(store => store.user);
  const { userId, userName } = user;

  return useQuery({
    queryKey: [dbInit.key, userId],
    queryFn: () => dbInit.queryFn({ userId, userName }),
  });
};
