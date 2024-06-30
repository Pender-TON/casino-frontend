import { BalanceBackground } from '@components/svg/balance-background'
import { ChipGradientIcon } from '@components/svg/chip-gradient-icon'
import { useTapStore } from '@features/taps'

interface BalanceBoardProps {}

export const BalanceBoard = (props: BalanceBoardProps) => {
  const taps = useTapStore(store => store.taps)
  const tapMultiplier = useTapStore(store => store.tapMultiplier)

  return (
    <div className="relative mb-3 flex h-fit w-full flex-col">
      <BalanceBackground className="h-full w-full" />
      <div className="absolute inset-0 flex w-full flex-col items-center pt-2">
        <p className="text-xs font-medium leading-[11.76px] text-white opacity-55">Balance</p>

        <div className="flex items-center justify-center gap-1">
          <ChipGradientIcon className="h-6 w-6" />
          <p className="text-[32px] font-semibold tabular-nums leading-[34px] text-white">{taps}</p>
        </div>

        <div className="absolute bottom-0 flex translate-y-1/2 items-center justify-center gap-1 rounded-full border border-white border-opacity-[0.32] bg-table-desk-bg px-2 py-1">
          <ChipGradientIcon className="h-2 w-2" />
          <p className="text-xs font-semibold tabular-nums leading-[11.76px] text-white">{tapMultiplier}+/Tap</p>
        </div>
      </div>
    </div>
  )
}
