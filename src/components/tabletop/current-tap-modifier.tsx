import { useTapStore } from '@features/taps'

export const CurrentTapModifier = () => {
  const tapMultiplier = useTapStore(store => store.tapMultiplier)
  return (
    <div className="flex h-full items-center justify-center gap-1 whitespace-nowrap text-white">
      <p className="text-sm font-medium">Per tap: </p>
      <p className="text-md font-semibold">x{tapMultiplier}</p>
    </div>
  )
}
