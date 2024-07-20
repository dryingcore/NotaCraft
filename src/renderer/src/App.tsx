import {
  ActionsButtonsRow,
  AppLayout,
  Content,
  FloatingNoteTitle,
  MarkdownEditor,
  NotePreviewList,
  SideBar
} from '@/components'
import { useRef } from 'react'

const App = () => {
  const contentContainerRef = useRef<HTMLDivElement>(null)
  const resetScroll = () => {
    contentContainerRef.current?.scrollTo(0, 0)
  }

  return (
    <AppLayout>
      <SideBar className="bg-neutral-800">
        <ActionsButtonsRow className="flex justify-between mt-1" />
        <NotePreviewList className="mt-3, space-y-1" onSelect={resetScroll} />
      </SideBar>
      <Content ref={contentContainerRef} className="border-l bg-stone-900 border-l-[#001C30]">
        <FloatingNoteTitle className="pt-2" />
        <MarkdownEditor />
      </Content>
    </AppLayout>
  )
}

export default App
