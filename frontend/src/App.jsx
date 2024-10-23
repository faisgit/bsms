import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
        <Navbar />
        <div className='mt-20'>

        <Outlet />
        </div>
     </div>
    </>
  )
}

export default App
