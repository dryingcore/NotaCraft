import { AppLayout, Content, SideBar } from '@/components'

function App() {
  return (
    <AppLayout>
      <SideBar className="p-2 border-4 border-red-800">SideBar</SideBar>
      <Content className="border-4 border-blue-600">Content</Content>
    </AppLayout>
  )
}

export default App
