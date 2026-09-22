import { useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React Demo</h1>
      <div style={{ border: '1px solid pink', display: 'flex', }}>
        <NavBar />
        <div className="screen">
        </div>
      </div>
    </>
  )
}

export default App
