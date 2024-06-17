import { useQuery } from '@tanstack/react-query';

import dbInit from '@api/dbInit';

export const useInitializeApp = (args: {
  userId: number;
  userName: string;
}) => {
  return useQuery({
    queryKey: [dbInit.key],
    queryFn: () => dbInit.queryFn(args),
  });
};
