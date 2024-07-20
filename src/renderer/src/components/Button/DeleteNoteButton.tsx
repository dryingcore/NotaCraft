import { ActionButton, ActionButtonProps } from '@/components'
import { deleteNoteAtom } from '@renderer/store'
import { useSetAtom } from 'jotai'
import { LuTrash2 } from 'react-icons/lu'

export const DeleteNoteButton = ({ ...props }: ActionButtonProps) => {
  const deleteNote = useSetAtom(deleteNoteAtom)
  const handleDeletion = () => {
    deleteNote()
  }

  return (
    <ActionButton onClick={handleDeletion} className="hover:bg-red-600" {...props}>
      <LuTrash2 className="w-4 h-4 text-white" />
    </ActionButton>
  )
}
