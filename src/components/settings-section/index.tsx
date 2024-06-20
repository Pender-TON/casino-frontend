import { PrimaryButton } from '@components/ui/primary-button';
import { TonConnectButton } from '@tonconnect/ui-react';
import { ArrowLeftFromLine } from 'lucide-react';

export interface SettingSectionProps {
  toggleSettings: () => void;
}

export const SettingSection = (props: SettingSectionProps) => {
  const { toggleSettings } = props;

  return (
    <div className="flex h-full w-full flex-col justify-between">
      <div>
        <TonConnectButton className="w-full whitespace-nowrap" />
      </div>

      <div className='flex w-full justify-end'>
        <PrimaryButton onClick={toggleSettings}>
          <ArrowLeftFromLine className="h-8 w-8" />
        </PrimaryButton>
      </div>
    </div>
  );
};
