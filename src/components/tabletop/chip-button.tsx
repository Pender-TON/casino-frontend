import penderChip from '@assets/pender-chip@3x.webp';
import { useTapStore } from '@features/taps';
import { useUpdateTapsMutation } from '@features/taps/update-taps';
import { useThrottle } from '@uidotdev/usehooks';
import { useCallback, useEffect, useMemo } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import WebApp from '@twa-dev/sdk';

const THROTTLE_MS = 6000;

export const ChipButton = () => {
  const currentTaps = useTapStore(store => store.taps);
  const initialTaps = useMemo(() => currentTaps, []);
  const increaseTaps = useTapStore(store => store.increaseTaps);

  const delayedLightHaptic = useCallback((impacType: "light" | "medium" | "heavy" | "rigid" | "soft") => {
    const timeoutId = setTimeout(
      () => WebApp.HapticFeedback.impactOccurred(impacType),
      60
    );
    return () => clearTimeout(timeoutId);
  }, []);

  const rotate = useMotionValue(1);
  // throttle syncing to once per THROTTLE_MS
  const throttledTaps = useThrottle(currentTaps, THROTTLE_MS);
  const { mutate: syncTaps } = useUpdateTapsMutation();

  useEffect(() => {
    // skip initial updates on component mount
    if (currentTaps === initialTaps) return;

    syncTaps(throttledTaps);
  }, [throttledTaps]);

  const handleClickChip = () => increaseTaps(1);

  return (
    <motion.button
      className="rounded-full"
      style={{ rotate }}
      whileTap={{ scale: 1.05, boxShadow: '12px 12px 16px 0px #0000001F' }}
      onTap={(e, info) => {
        delayedLightHaptic('light');
        const deg = Math.floor(Math.random() * 3) + 1;
        const rotationOffset = Math.random() > 0.5 ? deg : -deg;
        rotate.set(rotationOffset);
      }}
      transition={{ type: 'spring', mass: 0.4, stiffness: 1200, damping: 10 }}
      onClick={handleClickChip}
    >
      <img className="h-52 w-52 select-none" src={penderChip} />
    </motion.button>
  );
};
