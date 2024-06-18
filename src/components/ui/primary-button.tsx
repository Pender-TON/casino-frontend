import { cn } from '@utils/cn';
import type { ClassValue } from 'class-variance-authority/types';
import type { ComponentProps } from 'react';

interface PrimaryButtonProps
  extends Omit<ComponentProps<'button'>, 'className'> {
  className?: ClassValue;
}

export const PrimaryButton = (props: PrimaryButtonProps) => {
  const { className, children, ...rest } = props;

  return (
    <button
      className={cn(
        'relative isolate flex h-14 w-14 shrink-0 select-none flex-col items-center justify-center rounded-2xl p-2 text-[#FFC89A] active:scale-95 active:opacity-50',
        className
      )}
      {...rest}
    >
      <div className="absolute -z-0 h-full w-full rounded-2xl border-2 border-[#FFC89A33] opacity-80" />

      <div className="absolute -z-10 h-full w-full rounded-2xl bg-gradient-to-tr from-[#803B24] to-[#B58B56]" />

      {children}
    </button>
  );
};
