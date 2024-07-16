import { ActionsButtonsRow, AppLayout, Content, NotePreviewList, SideBar } from '@/components'

const App = () => {
  return (
    <AppLayout>
      <SideBar className="bg-[#2B2A4C]">
        <ActionsButtonsRow className="flex justify-between mt-1" />
        <NotePreviewList className="mt-3, space-y-1" />
      </SideBar>
      <Content className="border-l bg-[#232D3F] border-l-[#000000]">Content</Content>
    </AppLayout>
  )
}

export default App
