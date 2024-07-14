import { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export const AppLayout = ({ className, children, ...props }: ComponentProps<'main'>) => {
  return (
    <main
      className={twMerge(
        'w-full h-full flex flex-col items-center justify-center overflow-auto',
        className
      )}
      {...props}
    >
      {children}
    </main>
  )
}

export const SideBar = ({ className, children, ...props }: ComponentProps<'aside'>) => {
  return (
    <aside
      className={(twMerge('w-[250px] mt-10 h-[100vh + 10px] overflow-auto'), className)}
      {...props}
    >
      {children}
    </aside>
  )
}

export const Content = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={twMerge('flex-1 overflow-auto', className)} {...props}>
        {children}
      </div>
    )
  }
)

Content.displayName = 'Content'
