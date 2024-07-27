import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Videos = ({ info }) => {
  const [channelImage, setChannelImage] = useState(null);

  useEffect(()=>{
    fetchData();
    
  },[])

  const fetchData = async () =>{
    const data = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=AIzaSyADJHNQq-nUrY0D0YeyLODt7OFkPPfoxW0`);
    const json = await data.json();
    //console.log(json.items[0].snippet.thumbnails.high.url);
    setChannelImage(json.items[0].snippet.thumbnails.high.url)
  }
  //destructing info
  const { snippet } = info;
  const { statistics } = info;
  const { channelTitle, title, thumbnails,channelId } = snippet;
  const { viewCount } = statistics;
  const { high } = thumbnails;
  
  // console.log(info)

  return (
  <div>
    {
      channelImage !== null?<div className="w-96  rounded-md p-2 m-4 h-auto">
      <div className="h-52 ">
        <img className="rounded-xl w-full h-full object-cover border-none" src={high.url} alt="" />
      </div>
      <h1 className="font-medium my-4 flex"><img className="mr-2 w-10 h-10 rounded-full" src={channelImage} alt="" />{title}</h1>
      <div className="">
        <h1 className=" text-slate-700 text-sm ml-10">{channelTitle}</h1>
        <p className=" text-slate-700 text-sm ml-10">{viewCount} views</p>
      </div>
    </div>:<Shimmer />
    }
    
  </div>
    
  );
};

export default Videos;
