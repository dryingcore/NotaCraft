import { AppLayout, Content, SideBar } from '@/components'

const App = () => {
  return (
    <AppLayout>
      <SideBar className="bg-slate-900">Sidebar Options</SideBar>
      <Content className="border-l bg-gray-800 border-l-white">Content</Content>
    </AppLayout>
  )
}

export default App
