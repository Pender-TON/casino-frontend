import { ChipGradientIcon } from '@components/svg/chip-gradient-icon'
import { LeagueGradientIcon } from '@components/svg/league-gradient-icon'
import { LeaderboardPosition } from './leaderboard-position'
import { Progressbar } from './progressbar'

export const LeagueProgressBoard = () => {
  return (
    <div className="flex w-full flex-col gap-3">
      <div className="grid grid-cols-3">
        <div className="flex w-full flex-col items-start justify-center gap-1">
          <p className="text-xs font-medium leading-[11.76px] text-white opacity-55">League</p>
          <div className="flex items-center gap-1">
            <LeagueGradientIcon className="h-3 w-3" />
            <p className="text-sm font-medium tabular-nums leading-[11.76px] text-white">?/?</p>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-1">
          <p className="text-xs font-medium leading-[11.76px] text-white opacity-55">Wood</p>
          <div className="flex items-center gap-1">
            <ChipGradientIcon className="h-3 w-3" />
            <p className="text-sm font-medium tabular-nums leading-[11.76px] text-white">?k left</p>
          </div>
        </div>

        <LeaderboardPosition />
      </div>

      <Progressbar progress={0} />
    </div>
  )
}
