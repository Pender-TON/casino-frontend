import { PrimaryButton } from '@components/ui/primary-button'
import { ArrowLeftFromLine } from 'lucide-react'
import { TonWalletButton } from './ton-wallet-button'

export interface SettingSectionProps {
  toggleSettings: () => void
}

export const SettingSection = (props: SettingSectionProps) => {
  const { toggleSettings } = props

  return (
    <div className="flex h-full w-full select-none flex-col justify-between">
      <div>
        <TonWalletButton />
      </div>

      <div className="flex w-full justify-end">
        <PrimaryButton onClick={toggleSettings}>
          <ArrowLeftFromLine className="h-8 w-8" />
        </PrimaryButton>
      </div>
    </div>
  )
}
