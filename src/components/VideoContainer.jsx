import React, { useEffect, useState } from 'react';
import { video_API } from './utils/constants';
import Videos from './Videos';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
    const [videos, setVideos] = useState(null);

    useEffect(() =>{
        getVideos();
    },[])

    const getVideos = async () =>{
        //fetch maincomponente videos info
        const api = await fetch(video_API);
        const {items} = await api.json();
        setVideos(items);
    }
    

  return videos===null?null: (
    <div className='w-12/12 grid md:grid-cols-4 sm:grid-cols-1'>
       {
        videos.map((data) =>{
            return (

                //base url id /wactch and the rest is dummmy data as queryy paramater to make look like yt
                <Link key={data.id} to={"/watch?v="+data.id}><Videos info={data}/></Link>
            )
        })
       }
    </div>
  )
}

export default VideoContainer