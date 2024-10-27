import './App.css'

// Reaproveitamento de estrutura
import { Outlet } from 'react-router-dom'

// Navegando entre as páginas
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='App'>
      <Navbar />
      <h1>React Router</h1>
      <Outlet />
      <p>Footer</p>
    </div>
  )
}

export default App
