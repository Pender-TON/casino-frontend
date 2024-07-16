import { cn } from '@utils/cn'
import type { ClassValue } from 'class-variance-authority/dist/types'
import { motion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

const Loader = () => {
  return (
    <div className="border-b-current/50 border-l-current/50 border-t-current/50 h-8 w-8 animate-spin rounded-full border-4 border-r-current" />
  )
}

export interface PlainButtonProps extends Omit<HTMLMotionProps<'button'>, 'className' | 'children'> {
  className?: ClassValue
  loading?: boolean
  children: ReactNode
}

export const PlainButton = (props: PlainButtonProps) => {
  const { className, loading = true, disabled, children, onClick, ...rest } = props

  const handleClick: PlainButtonProps['onClick'] = event => {
    if (loading) return

    onClick && onClick(event)
  }

  return (
    <motion.button
      disabled={loading || disabled}
      transition={{ type: 'spring', duration: 0.3 }}
      whileTap={{ scale: 0.9 }}
      className={cn(
        'flex h-16 w-full shrink-0 items-center justify-center rounded-3xl bg-white text-xl font-semibold text-black',
        className
      )}
      onClick={handleClick}
      {...rest}
    >
      {loading ? <Loader /> : children}
    </motion.button>
  )
}
