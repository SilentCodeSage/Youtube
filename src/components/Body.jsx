import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SmallSideBar from './SmallSideBar'

const Body = () => {
  
const isMenuOpen = useSelector((store) => store.app.isOpen);
  
  return (
    <div >
      <div className='flex mt-14 '>
        {
          // if(isMenuOpen is false) return null;
          isMenuOpen === true? <Sidebar />:  <SmallSideBar />
        }
        <Outlet />
    </div>
    </div>
  )
}

export default Body