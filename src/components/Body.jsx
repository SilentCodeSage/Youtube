import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Body = () => {
  
const isMenuOpen = useSelector((store) => store.app.isOpen);
  
  return (
    <div >
      <div className='flex mt-16 '>
        {
          // if(isMenuOpen is false) return null;
          isMenuOpen && <Sidebar />
        }
        <Outlet />
    </div>
    </div>
  )
}

export default Body