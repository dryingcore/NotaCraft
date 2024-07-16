import { ActionsButtonsRow, AppLayout, Content, NotePreviewList, SideBar } from '@/components'

const App = () => {
  return (
    <AppLayout>
      <SideBar className="bg-[#481E14]">
        <ActionsButtonsRow className="flex justify-between mt-1" />
        <NotePreviewList className="mt-3, space-y-1" />
      </SideBar>
      <Content className="border-l bg-[#0C0C0C] border-l-white">Content</Content>
    </AppLayout>
  )
}

export default App
