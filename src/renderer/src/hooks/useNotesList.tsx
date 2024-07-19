import { notesAtom, selectedNoteIndexAtom } from '@/store'
import { useAtom, useAtomValue } from 'jotai'

export const useNotesList = () => {
  const notes = [useAtomValue(notesAtom)]
  const [selectedNoteIndex, setSelectedNoteIndex] = useAtom(selectedNoteIndexAtom)

  const handleNoteSelect = (index: number) => {
    setSelectedNoteIndex(index)
  }
}
