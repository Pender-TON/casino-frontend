import { Fragment, type PropsWithChildren } from 'react';

import { TapStore } from '@features/taps';
import { useInitializeApp } from '@features/initialize-app';
import { useUserStore } from '@features/user/user-store';

interface TapProviderProps extends PropsWithChildren {}

export const TapProvider = ({ children }: TapProviderProps) => {
  const user = useUserStore(store => store.user);
  const { userId, userName } = user

  const { data: initialTaps } = useInitializeApp({
    userId,
    userName,
  });

  return (
    <Fragment>
      {initialTaps !== undefined ? (
        <TapStore.Provider initialValue={{ taps: initialTaps }}>
          {children}
        </TapStore.Provider>
      ) : null}
    </Fragment>
  );
};
