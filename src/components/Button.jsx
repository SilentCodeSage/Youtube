import React, { useEffect } from 'react'

const Button = (props) => {
  

  const buttonListVideos = async() =>{
    const data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=AIzaSyADJHNQq-nUrY0D0YeyLODt7OFkPPfoxW0`);
    const json = await data.json();
    console.log(json)
  }
  return (
    <div>
        <button onClick={()=>buttonListVideos()} className='p-2 px-3 m-2 bg-gray-200 opacity-100 border rounded-lg'>{props.name}</button>
    </div>
  )
}

export default Button