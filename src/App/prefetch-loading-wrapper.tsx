import WebApp from '@twa-dev/sdk'
import { AnimatePresence, motion } from 'framer-motion'
import { type PropsWithChildren } from 'react'

import { LoadingScreen } from '@components/loading-screen'
import { useVerifyInitData } from '@features/initialize-app'
import { UserStore } from '@features/user/user-store'
import { TapStore } from '@features/taps'
import { useLeaderboardPosition } from '@features/get-leaderboard-position'
import { WalletStore } from '@features/wallet/wallet-store'
import { useDelayedHapticFeedback } from '@utils/useDelayedHapticFeedback'

interface PrefetchLoadingWrapperProps extends PropsWithChildren {}

export const PrefetchLoadingWrapper = (props: PrefetchLoadingWrapperProps) => {
  const { children } = props

  const { data: userInfo, isPending: isPendingUserInfo } = useVerifyInitData(WebApp.initData)
  const { data: leaderBoardPosition, isPending: isPendingLeaderboardPosition } = useLeaderboardPosition(userInfo?.id)

  const isPending = isPendingUserInfo || isPendingLeaderboardPosition

  const isDataReady = !!userInfo && !!leaderBoardPosition

  const delayedHapticFeedback = useDelayedHapticFeedback()

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
          onAnimationStart={() => {
            delayedHapticFeedback('soft', 300)
          }}
        >
          <UserStore.Provider
            initialValue={{
              userId: userInfo.id,
              userName: userInfo.username
            }}
          >
            <TapStore.Provider initialValue={{ taps: userInfo.count, tapMultiplier: userInfo.multiplier }}>
              <WalletStore.Provider initialValue={{ address: userInfo.address }}>{children}</WalletStore.Provider>
            </TapStore.Provider>
          </UserStore.Provider>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
