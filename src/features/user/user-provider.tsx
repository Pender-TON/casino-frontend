import { Fragment, type PropsWithChildren } from 'react';
import { UserStore } from './user-store';
import WebApp from '@twa-dev/sdk';

interface UserProviderProps extends PropsWithChildren {}

export const UserProvider = ({ children }: UserProviderProps) => {
  const userId = WebApp.initDataUnsafe.user?.id;
  const userName = WebApp.initDataUnsafe.user?.username;

  return (
    <Fragment>
      {userId !== undefined && userName !== undefined ? (
        <UserStore.Provider initialValue={{ userId, userName }}>
          {children}
        </UserStore.Provider>
      ) : null}
    </Fragment>
  );
};
