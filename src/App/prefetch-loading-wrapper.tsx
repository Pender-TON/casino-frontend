import WebApp from '@twa-dev/sdk'
import { AnimatePresence, motion } from 'framer-motion'
import { type PropsWithChildren } from 'react'

import { LoadingScreen } from '@components/loading-screen'
import { useInitializeApp, useVerifyInitData } from '@features/initialize-app'
import { UserStore } from '@features/user/user-store'
import { TapStore } from '@features/taps'
import { useLeaderboardPosition } from '@features/get-leaderboard-position'

interface PrefetchLoadingWrapperProps extends PropsWithChildren {}

export const PrefetchLoadingWrapper = (props: PrefetchLoadingWrapperProps) => {
  const { children } = props

  const { data: userInfo, isPending: isPendingUserInfo } = useVerifyInitData(WebApp.initData)
  const { data: tapCount, isPending: isPendingTapInfo } = useInitializeApp(userInfo?.user.id, userInfo?.user.username)
  const { data: leaderBoardPosition, isPending: isPendingLeaderboardPosition } = useLeaderboardPosition(
    userInfo?.user.id
  )

  const isPending = isPendingTapInfo || isPendingUserInfo || isPendingLeaderboardPosition

  const isDataReady = !!userInfo && !!tapCount && !!leaderBoardPosition

  return (
    <AnimatePresence mode="wait">
      {isPending || !isDataReady ? (
        <motion.div
          animate={{ x: 0, opacity: 1 }}
          className="flex h-full w-full flex-col"
          exit={{ x: '-80%' }}
          initial={{ x: 0, opacity: 0.5 }}
          key={'prefetch-loading-screen'}
          transition={{ type: 'spring', duration: 0.4 }}
        >
          <LoadingScreen />
        </motion.div>
      ) : (
        <motion.div
          animate={{ x: 0 }}
          className="flex h-full w-full flex-col"
          initial={{ x: '100%' }}
          key={'prefetch-children'}
          transition={{ type: 'spring', duration: 0.6 }}
        >
          <UserStore.Provider
            initialValue={{
              userId: userInfo.user.id,
              userName: userInfo.user.username
            }}
          >
            <TapStore.Provider initialValue={{ taps: tapCount, tapMultiplier: 1 }}>{children}</TapStore.Provider>
          </UserStore.Provider>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
