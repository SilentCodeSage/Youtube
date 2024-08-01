import React, { useEffect, useState } from 'react';
import { video_API } from './utils/constants';
import Videos from './Videos';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
    const [videos, setVideos] = useState(null);
    const [channelImages,setChannelImages] = useState({});

    useEffect(() =>{
        getVideos();
    },[])

    const getVideos = async () =>{
        //fetch video api for video info
        const api = await fetch(video_API);
        const { items } = await api.json();
        setVideos(items);

        //channel id fetch
        const ids = items.map((data) => {
            return data.snippet.channelId;
        });

        const querryString = ids.join(",");
        
        //batch to reduce api calls
        const data = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${querryString}&key=AIzaSyADJHNQq-nUrY0D0YeyLODt7OFkPPfoxW0`);
        const json = await data.json();

        //reduce the array into image object
        const images = json.items.reduce((acc,channel) =>{
            acc[channel.id] = channel.snippet.thumbnails.high.url;
            return acc;
        },{});

        setChannelImages(images);
    }

    return videos === null ? null : (
        <div className='w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 mt-14'>
            {videos.map((data) => (
                <Link key={data.id} to={"/watch?v=" + data.id}>
                    <Videos info={data} channelImage={channelImages[data.snippet.channelId]} />
                </Link>
            ))}
        </div>
    );
}

export default VideoContainer;
