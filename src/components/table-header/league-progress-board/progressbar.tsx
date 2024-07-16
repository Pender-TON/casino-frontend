import { useMemo } from 'react'

export interface ProgressbarProps {
  progress: number
}

export const Progressbar = (props: ProgressbarProps) => {
  const { progress } = props

  const normalizedProgress = useMemo(() => {
    if (progress <= 0) return 1
    if (progress > 100) return 100
  }, [progress])

  return (
    <div className="flex w-full rounded-full border border-white border-opacity-[0.12] bg-white bg-opacity-20 p-[1px]">
      <div
        className="h-1 rounded-full bg-white bg-gradient-to-tr from-[#949494] to-white"
        style={{
          width: `${normalizedProgress}%`
        }}
      />
    </div>
  )
}
