import { cn } from '@renderer/utils'
import { NoteInfo } from '@shared/models'
import { ComponentProps } from 'react'

export type NotePreviewProps = NoteInfo & {
  isActive?: boolean
} & ComponentProps<'div'>

export const NotePreview = ({
  title,
  lastEditTime,
  content,
  isActive = false,
  className,
  ...props
}: NotePreviewProps) => {
  return (
    <div
      className={cn(
        'cursor-pointer px-2.5 rounded-md transition-colors duration-75',
        { 'bg-slate-500': isActive, 'hover:bg-slate-400': !isActive },
        className
      )}
      {...props}
    >
      <h3 className="mb-1 font-bold truncate">{title}</h3>
      <span className="inline-block w-full mb-2 text-xs font-light text-left">{lastEditTime}</span>
    </div>
  )
}