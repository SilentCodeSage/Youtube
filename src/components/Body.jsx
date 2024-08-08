import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SmallSideBar from './SmallSideBar'

const Body = () => {
  
const isMenuOpen = useSelector((store) => store.app.isOpen);
  
  return (
    <div >
      <div className='flex md:justify-normal justify-center md:mt-14 mt-10 md:pt-0 pt-4'>
        {
          isMenuOpen === true? <Sidebar />:  <SmallSideBar />
        }
        <Outlet />
    </div>
    </div>
  )
}

export default Body