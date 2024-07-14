import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const ActionButton = ({ className, children, ...props }: ComponentProps<'button'>) => {
  return (
    <button
      className={twMerge(
        'px-2 py-1 rounded-md border border-slate-800',
        className,
        'hover:bg-slate-800'
      )}
      {...props}
    >
      {children}
    </button>
  )
}
