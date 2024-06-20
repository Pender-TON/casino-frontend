import { Fragment, type PropsWithChildren } from 'react'

import { TapStore } from '@features/taps'
import { useInitializeApp } from '@features/initialize-app'

interface TapProviderProps extends PropsWithChildren {}

// Must be wrapped in UserStore.Provider
export const TapProvider = ({ children }: TapProviderProps) => {
  const { data: initialTaps } = useInitializeApp()

  return (
    <Fragment>
      {initialTaps !== undefined ? (
        <TapStore.Provider initialValue={{ taps: initialTaps, tapMultiplier: 1 }}>{children}</TapStore.Provider>
      ) : null}
    </Fragment>
  )
}
