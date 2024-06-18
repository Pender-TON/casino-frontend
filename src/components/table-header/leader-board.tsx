import WebApp from '@twa-dev/sdk';

import leaderboardCup from '@assets/leaderboard-cup.svg';
import { useLeaderboardMutation } from '@features/get-leaderboard';
import { useLeaderboardPosition } from '@features/get-leaderboard-position';
import { PrimaryButton } from '@components/ui/primary-button';

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
    <PrimaryButton
      className={[
        'h-14 w-14',
        {
          'animate-pulse': isPendingLeaderboard || isPendingPosition,
        },
      ]}
      disabled={isPendingLeaderboard}
      onClick={handleClickLeaderBoard}
    >
      <div className="flex h-full w-full flex-col items-center justify-start gap-1.5">
        <img className="h-3 w-3" src={leaderboardCup} />

        <div className="flex flex-col items-center justify-center gap-0.5 tracking-wider">
          <p className="text-xs font-semibold leading-[10.8px]">
            #{positionInfo ? positionInfo.position : 'PNDR'}
          </p>

          <p className="text-[8px] font-semibold leading-[7.2px] ">WORLD</p>
        </div>
      </div>
    </PrimaryButton>
  );
};
