import { BalanceBoard } from './balance-board'
import { LeagueProgressBoard } from './league-progress-board'

interface TableHeaderProps {}

export const TableHeader = (props: TableHeaderProps) => {
  return (
    <div className="flex w-full select-none flex-col items-center justify-center gap-4 bg-table-desk-bg p-5 pt-3">
      <LeagueProgressBoard />

      <BalanceBoard />
    </div>
  )
}
