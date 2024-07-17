import { ActionButton, ActionButtonProps } from '@/components'
import { LuTrash2 } from 'react-icons/lu'

export const DeleteNoteButton = ({ ...props }: ActionButtonProps) => {
  return (
    <ActionButton className="hover:bg-red-600" {...props}>
      <LuTrash2 className="w-4 h-4 text-white" />
    </ActionButton>
  )
}
