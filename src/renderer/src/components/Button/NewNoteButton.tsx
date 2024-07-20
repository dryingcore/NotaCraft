import { ActionButton, ActionButtonProps } from '@/components'
import { LuFileSignature } from 'react-icons/lu'

export const NewNoteButton = ({ ...props }: ActionButtonProps) => {
  const createEmptyNote = () => {
  }

  return (
    <ActionButton className="hover:bg-green-600" {...props}>
      <LuFileSignature className="w-4 h-4 text-white" />
    </ActionButton>
  )
}
