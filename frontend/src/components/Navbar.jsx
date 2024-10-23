import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()
  return (
    <div className="navbar bg-base-100 shadow-md fixed w-full top-0 z-10">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Book Store Management System</a>
  </div>
  {window.location.pathname !== '/add' && (
  <div className="flex-none">
    <button className="btn btn-square btn-ghost" onClick={() => navigate('/add')}>
      Add
    </button>
  </div>
  )}
</div>
  )
}

export default Navbar