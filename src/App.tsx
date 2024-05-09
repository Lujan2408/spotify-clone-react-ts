import AsideMenu from './components/AsideMenu'
import './index.css'

function App() {

  return (
    <div className="customButton relative h-screen p-2 gap-2">
      <aside className='[grid-area:aside] flex-col flex-auto overflow-y-auto  '>
        <AsideMenu />
      </aside>

      <main className='[grid-area:main] rounded-lg overflow-y-auto bg-zinc-900'>
        
      </main>

      <footer className='[grid-area:player] min-h-[100px]'>
        
      </footer>
    </div>
  )
}

export default App
