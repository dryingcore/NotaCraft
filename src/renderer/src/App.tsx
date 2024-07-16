import { ActionsButtonsRow, AppLayout, Content, NotePreviewList, SideBar } from '@/components'

const App = () => {
  return (
    <AppLayout>
      <SideBar className="bg-[#001C30]">
        <ActionsButtonsRow className="flex justify-between mt-1" />
        <NotePreviewList className="mt-3, space-y-1" />
      </SideBar>
      <Content className="border-l bg-[#232D3F] border-l-[#001C30]">Content</Content>
    </AppLayout>
  )
}

export default App
