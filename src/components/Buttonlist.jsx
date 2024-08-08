import React from 'react'
import Button from './Button'
import { categoryIds } from './utils/constants'
const Buttonlist = () => {
  
  const categoryEntries = Object.entries(categoryIds);
  
  return (
    <div className='bg-white '>
      
      <div className='flex md:px-2 px-1 fixed bg-white  w-full overflow-x-scroll scrollbar-none'>
      
      {
        categoryEntries.map((data,index)=>{
           return <Button key={index} name={data[0]}/>
        })
      }
    </div>
    </div>
  )
}

export default Buttonlist;