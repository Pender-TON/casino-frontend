import { useTapStore } from '@features/taps'
import { useUpdateTapsMutation } from '@features/taps/update-taps'
import { useThrottle } from '@uidotdev/usehooks'
import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useMotionValue, useTime, useTransform, easeOut, type TapHandlers } from 'framer-motion'
import { PenderChip } from '@components/svg/pender-chip'
import { useDelayedHapticFeedback } from '@utils/useDelayedHapticFeedback'

const THROTTLE_MS = 6000
const FLYING_TAP_MS = 2000
const FLYING_TAP_Y = 200
const MAX_FLYING_TAPS = 20

type FlyingTaps = {
  id: number
  x: number
  y: number
}

interface FlyingTapProps {
  tap: FlyingTaps
}
// TODO: Tidy up
const FlyingTap = (props: FlyingTapProps) => {
  const { tap } = props

  const tapMultiplier = useTapStore(store => store.tapMultiplier)

  const time = useTime()

  const tapOffset = tap.y - FLYING_TAP_Y
  const y = useTransform(time, [0, FLYING_TAP_MS], [tap.y, tapOffset], {
    ease: easeOut
  })
  const opacity = useTransform(time, [0, FLYING_TAP_MS], [1, 0])

  return (
    <motion.div className="absolute text-2xl font-bold" style={{ x: tap.x, y, opacity }}>
      +{tapMultiplier}
    </motion.div>
  )
}

export const ChipButton = () => {
  const currentTaps = useTapStore(store => store.taps)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initialTaps = useMemo(() => currentTaps, [])
  const increaseTaps = useTapStore(store => store.increaseTaps)

  const [flyingTaps, setFlyingTaps] = useState<FlyingTaps[]>([])
  const buttonRef = useRef<HTMLDivElement>(null)
  const tapRef = useRef(0)

  const addFlyingTap = (x: number, y: number) =>
    setFlyingTaps(prev => {
      const newTap = { id: tapRef.current++, x, y }
      if (prev.length >= MAX_FLYING_TAPS) {
        const slicedTaps = prev.slice(1)

        return [...slicedTaps, newTap]
      }
      return [...prev, newTap]
    })

  // throttle syncing to once per THROTTLE_MS
  const throttledTaps = useThrottle(currentTaps, THROTTLE_MS)
  const { mutate: syncTaps } = useUpdateTapsMutation()

  useEffect(() => {
    // skip initial updates on component mount
    if (currentTaps === initialTaps) return

    syncTaps()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [throttledTaps])

  const delayedHapticFeedback = useDelayedHapticFeedback()

  const handleTapStart: TapHandlers['onTapStart'] = (e, info) => {
    const { point: tapOriginPoint } = info

    const buttonRect = buttonRef.current?.getBoundingClientRect()
    const buttonX = buttonRect?.x || 0
    const buttonY = buttonRect?.y || 0

    increaseTaps(1)
    addFlyingTap(tapOriginPoint.x - buttonX, tapOriginPoint.y - buttonY)
  }

  const handleTap: TapHandlers['onTap'] = () => {
    const deg = Math.floor(Math.random() * 3) + 1
    const rotationOffset = Math.random() > 0.5 ? deg : -deg
    rotate.set(rotationOffset)

    delayedHapticFeedback('light', 60)
  }

  const rotate = useMotionValue(1)

  return (
    <div className="relative">
      {/* For stable getBoundingClientRect reference around button because it rotates */}
      <div className="" ref={buttonRef}>
        <motion.button
          className="rounded-full"
          style={{ rotate }}
          whileTap={{ scale: 1.05, boxShadow: '12px 12px 16px 0px #0000001F' }}
          transition={{
            type: 'spring',
            mass: 0.4,
            stiffness: 1200,
            damping: 10
          }}
          onTap={handleTap}
          onTapStart={handleTapStart}
        >
          <PenderChip className="h-52 w-52 select-none" />
        </motion.button>
      </div>

      <div className="pointer-events-none absolute left-0 top-0 h-full w-full">
        {flyingTaps.map(tap => {
          return <FlyingTap key={tap.id} tap={tap} />
        })}
      </div>
    </div>
  )
}
