import { AppLayout, Content, SideBar } from '@/components'

function App() {
  return (
    <AppLayout>
      <SideBar className="p-2" border-red-500>
        SideBar
      </SideBar>
      <Content> Content </Content>
    </AppLayout>
  )
}

export default App
