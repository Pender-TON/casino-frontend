import { createStore, useStore } from 'zustand';

import { createZustandContext } from '@utils/createZustandContext';

interface TapState {
  taps: number;
  fallbackTaps: number;
  tapModifier: number;
  increaseTaps: (by: number) => void;
  resetTaps: (to: number) => void;
  setFallbackTaps: (to: number) => void;
  changeModifier: (to: number) => void;
}

const getStore = (initialState: { taps: number }) => {
  return createStore<TapState>()(set => ({
    taps: initialState.taps,
    fallbackTaps: initialState.taps,
    tapModifier: 1,
    increaseTaps: by => set(state => ({ taps: state.taps + (by * state.tapModifier) })),
    resetTaps: to => set(() => ({ taps: to })),
    setFallbackTaps: to => set(() => ({ fallbackTaps: to })),
    changeModifier: to => set(() => ({ tapModifier: to })),
  }));
};

export const TapStore = createZustandContext(getStore);

export const useTapStore = <T,>(selector: (state: TapState) => T): T => {
  const store = TapStore.useContext();

  if (!store) throw new Error('Missing TapStore.Provider in the tree');

  return useStore(store, selector);
};
