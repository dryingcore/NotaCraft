import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const ActionButton = ({ className, children, ...props }: ComponentProps<'button'>) => {
  return (
    <button
      className={twMerge(
        'px-2 py-1 rounded-md border border-slate-800',
        'hover:bg-slate-800 transition-colors duration-100',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
