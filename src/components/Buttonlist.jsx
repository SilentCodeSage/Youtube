import React from 'react'
import Button from './Button'

const Buttonlist = () => {
  const categories = [
    'Home',
    'Trending',
    'Subscriptions',
    'Library',
    'Music',
    'Shorts',
    'Gaming',
    'Movies',
    'Sports',
    'Playlists',
    'Notifications',
    'Live',
    'News',
    'Tech',
    'Science',
    'Education',
    'Vlogs',
  ];
  
  
  return (
    <div className='bg-white '>
      
      <div className='flex px-2 fixed bg-white  w-full'>
      
      {
        categories.map((data,index)=>{
           return <Button key={index} name={data}/>
        })
      }
    </div>
    </div>
  )
}

export default Buttonlist