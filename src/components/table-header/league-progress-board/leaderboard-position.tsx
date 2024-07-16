import WebApp from '@twa-dev/sdk'

import { useLeaderboardMutation } from '@features/get-leaderboard'
import { useLeaderboardPosition } from '@features/get-leaderboard-position'
import { useUpdateTapsMutation } from '@features/taps/update-taps'
import { useUserStore } from '@features/user/user-store'
import { CupGradientIcon } from '@components/svg/cup-gradient-icon'
import { cn } from '@utils/cn'

export const LeaderboardPosition = () => {
  const user = useUserStore(store => store.user)
  const { data: positionInfo, isPending: isPendingPosition } = useLeaderboardPosition(user.userId)
  const { mutateAsync: syncTaps, isPending: isPendingSyncTaps } = useUpdateTapsMutation()
  const { mutateAsync: getLeaderboard, isPending: isPendingLeaderboard } = useLeaderboardMutation()

  const handleClickLeaderBoard = async () => {
    // update taps to get correct leaderboard data
    await syncTaps()

    getLeaderboard(undefined, {
      onSuccess: leaderboard => {
        WebApp.showPopup({
          title: 'Leaderboard',
          message: leaderboard.map((userRanking, index) => `${index + 1}. ${userRanking}`).join('\n')
        })
      }
    })
  }

  return (
    <button
      disabled={isPendingLeaderboard || isPendingSyncTaps}
      className={cn('flex w-full flex-col items-end justify-center gap-1', {
        'animate-pulse': isPendingLeaderboard || isPendingPosition || isPendingSyncTaps
      })}
      onClick={handleClickLeaderBoard}
    >
      <p className="text-xs font-medium leading-[11.76px] text-white opacity-55">Board</p>
      <div className="flex items-center gap-1">
        <p className="text-sm font-medium tabular-nums leading-[11.76px] text-white">
          #{positionInfo ? positionInfo.position : 'PNDR'}
        </p>
        <CupGradientIcon className="h-3 w-3" />
      </div>
    </button>
  )
}
