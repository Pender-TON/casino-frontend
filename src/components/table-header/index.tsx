import penderAvatar from '@assets/pender-avatar.svg';
import tapCurrency from '@assets/tap-currency.svg';
import gem from '@assets/gem.svg';

import { useTapStore } from '@features/taps';
import { LeaderBoard } from './leader-board';
import { SettingsButton } from './settings-button';

interface TableHeaderProps {
  onClickSettings: () => void;
}

const TableHeader = (props: TableHeaderProps) => {
  const { onClickSettings } = props;
  const taps = useTapStore(store => store.taps);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          className={'h-14 w-14 flex-shrink-0 flex-grow-0'}
          src={penderAvatar}
        />

        <div className={'flex flex-col justify-center gap-0'}>
          <div className={'flex items-center gap-2'}>
            <img className={'h-5 w-5'} src={tapCurrency} />

            <p className={'text-2xl font-bold tabular-nums text-white'}>
              {taps}
            </p>
          </div>

          <div className={'flex items-center gap-2'}>
            <img className={'h-5 w-5'} src={gem} />

            <p
              className={
                'text-base font-bold tabular-nums text-white opacity-60'
              }
            >
              0
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <LeaderBoard />
        <SettingsButton onClick={onClickSettings}/>
      </div>
    </div>
  );
};

export default TableHeader;
