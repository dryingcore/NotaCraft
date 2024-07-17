import { DeleteNoteButton, NewNoteButton } from '@/components'
import { ComponentProps } from 'react'

export const ActionsButtonsRow = ({ ...props }: ComponentProps<'div'>) => {
  return (
    <div {...props}>
      <NewNoteButton />
      <DeleteNoteButton />
    </div>
  )
}
