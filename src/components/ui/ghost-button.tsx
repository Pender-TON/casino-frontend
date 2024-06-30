import { cn } from '@utils/cn'
import type { ClassValue } from 'class-variance-authority/dist/types'
import { motion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

export interface GhostButtonProps extends Omit<HTMLMotionProps<'button'>, 'className' | 'children'> {
  className?: ClassValue
  children: ReactNode
}

export const GhostButton = (props: GhostButtonProps) => {
  const { className, children, ...rest } = props

  return (
    <motion.button
      className={cn(className)}
      transition={{ type: 'spring', duration: 0.3 }}
      whileTap={{ scale: 0.9 }}
      {...rest}
    >
      {children}
    </motion.button>
  )
}
