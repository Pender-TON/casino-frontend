import { Link } from 'react-router-dom'
import { GhostButton } from '@components/ui/ghost-button'
import { ChipButton } from './chip-button'
import { ChipIcon } from '@components/svg/chip-icon'
import { useTonWallet } from '@tonconnect/ui-react'

export const Tabletop = () => {
  const wallet = useTonWallet()
  const hasUpgrades = !wallet

  return (
    <div className="relative flex h-full w-full select-none flex-col items-center justify-between rounded-[20px] border-2 border-table-top-line">
      <div className="absolute left-0 top-0 h-12 w-[99px] rounded-br-[20px] border-b-2 border-r-2 border-table-top-line px-4 py-2.5"></div>
      <div className="absolute right-0 top-0 h-12 w-[99px] rounded-bl-[20px] border-b-2 border-l-2 border-table-top-line" />

      <div className="flex h-full w-full items-center justify-center">
        <ChipButton />
      </div>

      <div className="w-full shrink-0">
        <div className="flex h-16 w-full items-center justify-center border-t-2 border-table-top-line">
          {/* Upgrade button */}
          <Link className="h-full w-full" to={'upgrades'}>
            <GhostButton className="flex h-full w-full select-none items-center justify-center text-xl font-semibold">
              <p className="relative w-fit">
                Upgrades
                {hasUpgrades && (
                  <span className="absolute -right-3.5 -top-1 flex h-5 w-5 rotate-[15deg] items-center justify-center rounded-full bg-black text-xs font-bold leading-[11.76px]">
                    1
                  </span>
                )}
              </p>
            </GhostButton>
          </Link>
        </div>

        <div className="grid h-16 w-full grid-cols-3 divide-x-2 divide-table-top-line border-t-2 border-table-top-line">
          {/* Mini-games buttons */}
          <div className="flex h-full w-full flex-col items-center justify-center">
            <p className="text-base font-semibold opacity-50">SpinDrop</p>
            <p className="text-sm font-semibold opacity-50">Soon...</p>
          </div>
          {/* <GhostButton className="flex h-full w-full flex-col items-center justify-center">
            <p className="text-base font-semibold">SpinDrop</p>
            <div className="flex items-center justify-center gap-1">
              <ChipIcon className="h-3 w-3 text-primary-accent" />
              <p className="text-sm font-semibold tabular-nums text-primary-accent">100</p>
            </div>
          </GhostButton> */}

          <div className="flex h-full w-full flex-col items-center justify-center">
            <p className="text-base font-semibold opacity-50">Slots</p>
            <p className="text-sm font-semibold opacity-50">Soon...</p>
          </div>

          <div className="flex h-full w-full flex-col items-center justify-center">
            <p className="text-base font-semibold opacity-50">Box</p>
            <p className="text-sm font-semibold opacity-50">Soon...</p>
          </div>
        </div>
      </div>
    </div>
  )
}
