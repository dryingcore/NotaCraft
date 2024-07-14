import { ActionsButtonsRow, AppLayout, Content, NotePreviewList, SideBar } from '@/components'

const App = () => {
  return (
    <AppLayout>
      <SideBar className="bg-slate-900">
        <ActionsButtonsRow className="flex justify-between mt-1" />
        <NotePreviewList className="mt-1" />
      </SideBar>
      <Content className="border-l bg-gray-800 border-l-white">Content</Content>
    </AppLayout>
  )
}

export default App
