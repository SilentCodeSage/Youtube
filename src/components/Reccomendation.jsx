import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  formatViewCount,
  formatPublishedDate,
} from "./utils/viewCountNormalizer";
import Buttonlist from "./Buttonlist";
import { Link } from "react-router-dom";
import { setwatchingVideoData } from "./utils/videoSlice";

const Reccomendation = ({ id }) => {
  const dispatch = useDispatch();
  const recomendedVideos = useSelector((store) => store.video.videoData);

  useEffect(() => {
    //fetchData();
  }, [id]);

  return (
    <div  className="p-2 space-y-4 md:w-11/12 w-12/12 md:pl-5 cursor-pointer ">
      {recomendedVideos && recomendedVideos.map((data) => (
          <Link to={"/watch?v=" + data.id}>
          <div onClick={()=>dispatch(setwatchingVideoData(data))}
            key={data.id.videoId}
            className="flex md:flex-row flex-col items-center space-y-2 my-2 md:space-y-0"
          >
            <div className="w-full md:w-1/3 md:h-24 overflow-hidden">
              <img
                className="rounded-lg w-full h-full object-cover"
                src={data.snippet.thumbnails.medium.url}
                alt="Video thumbnail"
              />
            </div>
            <div className="flex flex-col w-full md:w-2/3 ml-0 md:ml-3 space-y-1">
              <h1 className="text-sm font-medium leading-tight line-clamp-2">
                {data.snippet.title}
              </h1>
              <p className="text-xs text-gray-600">
                {data.snippet.channelTitle}
              </p>
              <p className="text-xs text-gray-500">
                {formatViewCount(data.statistics.viewCount)} •{" "}
                {formatPublishedDate(data.snippet.publishedAt)}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Reccomendation;
