import desktopPlaceholderQr from '@assets/desktop-placeholder-qr@2x.webp';
import iconTg from '@assets/icon-telegram.svg';
import iconTw from '@assets/icon-twitter.svg';
import iconQuestion from '@assets/icon-question.svg';
import { PrimaryButton } from '@components/ui/primary-button';
import { ChevronLast } from 'lucide-react';

interface DesktopPlaceholderProps {
  onChangeForceDesktop: (force: boolean) => void;
}

export const DesktopPlaceholder = (props: DesktopPlaceholderProps) => {
  const { onChangeForceDesktop } = props;

  const handleClickForceDesktop = () => onChangeForceDesktop(true);

  return (
    <div className="flex h-full w-full flex-col items-center justify-start gap-10 bg-table-desk-bg bg-[url('src/assets/wood-table-texture.webp')] p-10 text-white bg-blend-multiply">
      <img
        className="aspect-square min-h-40 min-w-40 self-center object-contain"
        src={desktopPlaceholderQr}
      />

      <div className="flex flex-col items-center gap-4 text-center">
        <p className="text-[40px] font-semibold leading-[38.4px]">
          Scan QR to play on phone
        </p>
        <p className="text-xl font-medium leading-[22.4px]">
          Experience the World of Casino using your mobile device
        </p>
      </div>

      <div className="flex gap-6">
        <a href="https://t.me/pender_official">
          <PrimaryButton className={'h-16 w-16'}>
            <img className="h-7 w-7" src={iconTg} />
          </PrimaryButton>
        </a>

        <a href="https://x.com/pender_ton">
          <PrimaryButton className={'h-16 w-16'}>
            <img className="h-7 w-7" src={iconTw} />
          </PrimaryButton>
        </a>

        <a href="https://t.me/averygoodname">
          <PrimaryButton className={'h-16 w-16'}>
            <img className="h-7 w-7" src={iconQuestion} />
          </PrimaryButton>
        </a>

        {import.meta.env.DEV && (
          <PrimaryButton
            className={'h-16 w-16'}
            onClick={handleClickForceDesktop}
          >
            <ChevronLast className="h-7 w-7" />
          </PrimaryButton>
        )}
      </div>
    </div>
  );
};
