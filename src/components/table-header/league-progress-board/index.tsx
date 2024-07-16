import { ChipGradientIcon } from '@components/svg/chip-gradient-icon'
import { LeagueGradientIcon } from '@components/svg/league-gradient-icon'
import { LeaderboardPosition } from './leaderboard-position'
import { Progressbar } from './progressbar'

// TODO: remove when ready
const tempBlur = 'blur-[3px] opacity-20'

export const LeagueProgressBoard = () => {
  return (
    <div className="flex w-full flex-col gap-3">
      <div className="grid grid-cols-3">
        <div className="absolute col-span-2 flex items-center bg-table-desk-bg">
          <p className="text-xl font-semibold text-white">Coming soon...</p>
        </div>
        <div className={`flex w-full flex-col items-start justify-center gap-1 ${tempBlur}`}>
          <p className="text-xs font-medium leading-[11.76px] text-white opacity-55">League</p>
          <div className="flex items-center gap-1">
            <LeagueGradientIcon className="h-3 w-3" />
            <p className="text-sm font-medium tabular-nums leading-[11.76px] text-white">2/20</p>
          </div>
        </div>

        <div className={`flex w-full flex-col items-center justify-center gap-1 ${tempBlur}`}>
          <p className="text-xs font-medium leading-[11.76px] text-white opacity-55">Wood</p>
          <div className="flex items-center gap-1">
            <ChipGradientIcon className="h-3 w-3" />
            <p className="text-sm font-medium tabular-nums leading-[11.76px] text-white">10k left</p>
          </div>
        </div>

        <LeaderboardPosition />
      </div>

      {/* <Progressbar progress={0} /> */}
    </div>
  )
}
