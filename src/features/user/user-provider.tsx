import { Fragment, type PropsWithChildren } from 'react'
import { UserStore } from './user-store'
import WebApp from '@twa-dev/sdk'
import { useVerifyInitData } from '@features/initialize-app'

interface UserProviderProps extends PropsWithChildren {}

export const UserProvider = ({ children }: UserProviderProps) => {
  const { data: userInfo } = useVerifyInitData(WebApp.initData)

  return (
    <Fragment>
      {userInfo ? (
        <UserStore.Provider
          initialValue={{
            userId: userInfo.user.id,
            userName: userInfo.user.username
          }}
        >
          {children}
        </UserStore.Provider>
      ) : null}
    </Fragment>
  )
}
