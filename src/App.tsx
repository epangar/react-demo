import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <BrowserRouter>
      <h1>React Demo</h1>
      <div style={{ border: '1px solid pink', display: 'flex' }}>
        <NavBar />
        <div className="screen">
          <AppRoutes />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
