import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { setVideoData } from './utils/videoSlice'
import { useDispatch } from 'react-redux'
import { categoryIds } from './utils/constants'

const Button = (props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const buttonListVideos = async() =>{
    if(props.name === "Home"){
      navigate("/");
      return
    }
    const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=IN&maxResults=50&videoCategoryId=${categoryIds[props.name]}&key=AIzaSyADJHNQq-nUrY0D0YeyLODt7OFkPPfoxW0`);
    const json = await data.json();
    dispatch(setVideoData(json.items))
  }
  return (
    <div>
        <button onClick={()=>buttonListVideos()} className='focus:bg-black focus:text-white p-2 px-3 m-2 bg-gray-200 opacity-100 border rounded-lg'>{props.name}</button>
    </div>
  )
}

export default Button