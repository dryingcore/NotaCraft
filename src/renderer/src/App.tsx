import { AppLayout, Content, SideBar } from '@/components'

function App() {
  return (
    <AppLayout>
      <SideBar className="p-2">SideBar</SideBar>
      <Content className="border-l bg-slate-700 border-l-white">Content</Content>
    </AppLayout>
  )
}

export default App
