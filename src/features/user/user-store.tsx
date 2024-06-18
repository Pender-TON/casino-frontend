import { createStore, useStore } from 'zustand';

import { createZustandContext } from '@utils/createZustandContext';

interface UserState {
  user: {
    userId: number;
    userName: string;
  };
}

const getStore = (initialState: { userId: number; userName: string }) => {
  return createStore<UserState>()(() => ({
    user: {
      userId: initialState.userId,
      userName: initialState.userName,
    },
  }));
};

export const UserStore = createZustandContext(getStore);

export const useUserStore = <T,>(selector: (state: UserState) => T): T => {
  const store = UserStore.useContext();

  if (!store) throw new Error('Missing UserStore.Provider in the tree');

  return useStore(store, selector);
};
