import { cn, formateDateFromMS } from '@renderer/utils'
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
  const date = formateDateFromMS(lastEditTime)
  return (
    <div
      className={cn(
        'cursor-pointer px-2.5 rounded-md transition-colors duration-75',
        { 'bg-black': isActive, 'hover:bg-': !isActive },
        className
      )}
      {...props}
    >
      <h3 className="mb-1 font-bold truncate">{title}</h3>
      <span className="inline-block w-full mb-2 text-xs font-light text-left">{date}</span>
    </div>
  )
}
