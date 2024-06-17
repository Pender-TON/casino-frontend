import WebApp from '@twa-dev/sdk';
import { cx } from 'class-variance-authority';

import leaderboardCup from '@assets/leaderboard-cup.svg';
import { useLeaderboardMutation } from '@features/get-leaderboard';
import { useLeaderboardPosition } from '@features/get-leaderboard-position';

export const LeaderBoard = () => {
  const { data: positionInfo, isPending: isPendingPosition } =
    useLeaderboardPosition();
  const { mutateAsync: getLeaderboard, isPending: isPendingLeaderboard } =
    useLeaderboardMutation();

  const handleClickLeaderBoard = () => {
    getLeaderboard(undefined, {
      onSuccess: leaderboard => {
        WebApp.showPopup({
          title: 'Leaderboard',
          message: leaderboard
            .map((userRanking, index) => `${index + 1}. ${userRanking}`)
            .join('\n'),
        });
      },
    });
  };

  return (
    <button
      className={cx(
        'relative flex h-14 w-14 shrink-0 select-none flex-col items-center rounded-2xl active:scale-95 active:opacity-50',
        {
          'animate-pulse': isPendingLeaderboard || isPendingPosition,
        }
      )}
      disabled={isPendingLeaderboard}
      onClick={handleClickLeaderBoard}
    >
      <div className="absolute h-14 w-14 rounded-2xl border-2 border-[#FFC89A33] opacity-60" />
      <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-start gap-1.5 rounded-2xl bg-gradient-to-tr from-[#803B24] to-[#B58B56] p-2">
        <img className="h-3 w-3" src={leaderboardCup} />

        <div className="flex flex-col items-center justify-center tracking-wider text-[#FFC89A]">
          <p className="text-xs leading-3">
            #{positionInfo ? positionInfo.position : 'PNDR'}
          </p>

          <p className="text-[8px] leading-[10px] ">WORLD</p>
        </div>
      </div>
    </button>
  );
};
