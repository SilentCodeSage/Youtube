import React from "react";

const Videos = ({ info }) => {
  //destructing info
  const { snippet } = info;
  const { statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;
  const { high } = thumbnails;

  return (
    <div className="w-96  rounded-md p-2 m-4 h-auto hover:bg-gray-200">
      <div className="h-52 ">
        <img className="rounded-xl w-full h-full object-cover border-none" src={high.url} alt="" />
      </div>
      <h1 className="font-medium my-4">{title}</h1>
      <div className="">
        <h1 className=" text-slate-700 text-sm">{channelTitle}</h1>
        <p className=" text-slate-700 text-sm">{viewCount} views</p>
      </div>
    </div>
  );
};

export default Videos;
