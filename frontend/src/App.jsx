import { useState } from 'react'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
        <h1 className=' font-bold  text-2xl text-center mt-10 font-sans'>Book Store Management System</h1>
        <Outlet />
     </div>
    </>
  )
}

export default App
