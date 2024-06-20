import WebApp from '@twa-dev/sdk'

import leaderboardCup from '@assets/leaderboard-cup.svg'

import { PrimaryButton } from '@components/ui/primary-button'

import { useLeaderboardMutation } from '@features/get-leaderboard'
import { useLeaderboardPosition } from '@features/get-leaderboard-position'
import { useUpdateTapsMutation } from '@features/taps/update-taps'
import { useUserStore } from '@features/user/user-store'

export const LeaderBoard = () => {
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
    <PrimaryButton
      disabled={isPendingLeaderboard || isPendingSyncTaps}
      className={[
        'h-14 w-14',
        {
          'animate-pulse': isPendingLeaderboard || isPendingPosition || isPendingSyncTaps
        }
      ]}
      onClick={handleClickLeaderBoard}
    >
      <div className="flex h-full w-full flex-col items-center justify-start gap-1.5">
        <img className="h-3 w-3" src={leaderboardCup} />

        <div className="flex flex-col items-center justify-center gap-0.5 tracking-wider">
          <p className="text-xs font-semibold leading-[10.8px]">#{positionInfo ? positionInfo.position : 'PNDR'}</p>

          <p className="text-[8px] font-semibold leading-[7.2px] ">WORLD</p>
        </div>
      </div>
    </PrimaryButton>
  )
}
