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
        // Fetch video data
        const api = await fetch(video_API);
        const { items } = await api.json();
        setVideos(items);
    }

    return videos === null ? null : (
        <div className='w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 mt-14'>
            {videos.map((data) => (
                <Link key={data.id} to={"/watch?v=" + data.id}>
                    <Videos info={data} />
                </Link>
            ))}
        </div>
    );
}

export default VideoContainer;
