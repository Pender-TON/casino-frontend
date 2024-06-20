import { PenderLoader } from '@svg/pender-loader'

interface LoadingScreenProps {}

export const LoadingScreen = (props: LoadingScreenProps) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-table-desk-bg p-10 pb-32 text-primary-accent">
      <PenderLoader className="h-30 w-30 shrink-0" />
      <p className="animate-pulse text-xl">Loading</p>
    </div>
  )
}
