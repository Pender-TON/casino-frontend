import { cn } from '@utils/cn';
import type { ClassValue } from 'class-variance-authority/dist/types';
import { motion, type HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

export interface PrimaryButtonProps
  extends Omit<HTMLMotionProps<'button'>, 'className' | 'children'> {
  className?: ClassValue;
  children: ReactNode;
}

export const PrimaryButton = (props: PrimaryButtonProps) => {
  const { className, children, ...rest } = props;

  return (
    <motion.button
      className={cn(
        'relative isolate flex h-14 w-14 shrink-0 select-none flex-col items-center justify-center rounded-2xl p-2 text-primary-accent',
        className
      )}
      transition={{ type: 'spring', duration: 0.3 }}
      whileTap={{ scale: 0.90 }}
      {...rest}
    >
      <div className="absolute -z-0 h-full w-full rounded-2xl border-2 border-[#FFC89A33] opacity-80" />

      <div className="absolute -z-10 h-full w-full rounded-2xl bg-gradient-to-tr from-[#803B24] to-[#B58B56]" />

      {children}
    </motion.button>
  );
};
