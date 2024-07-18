import { notesMock } from '@/store/mocks'
import { NoteInfo } from '@shared/models'
import { atom } from 'jotai'

export const notesAtom = atom<NoteInfo[]>(notesMock)
