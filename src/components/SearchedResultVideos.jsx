import React from "react";
import { useDispatch } from "react-redux";
import { setwatchingVideoData } from "./utils/videoSlice";
import { formatPublishedDate } from "./utils/viewCountNormalizer";
import Sidebar from "./Sidebar";

const SearchedResultVideos = ({ data, channelImages }) => {
  const dispatch = useDispatch();
  const { snippet } = data;
  const { channelTitle, title, description, publishedAt, liveBroadcastContent } = snippet;
  const { high } = snippet.thumbnails;

  const handleClick = () => {
    if (data.id.kind === "youtube#video") {
      dispatch(
        setwatchingVideoData({
          channelId: snippet.channelId,
          videoId: data.id.videoId,
        })
      );
    }
  };

  return (
  
    <div className="mt-4">
      {data.id.kind === "youtube#video" ? (
        <div
          onClick={handleClick}
          className="flex md:flex-row flex-col md:ml-72 w-auto md:p-0 p-3 cursor-pointer"
        >
          <div className="md:mr-3 md:w-[500px] md:h-72 w-auto h-60 overflow-hidden">
            <img
              className="rounded-2xl w-full h-full object-cover"
              src={high.url}
              alt={title}
            />
          </div>

          <div className="flex flex-col pt-2">
            <div>
              <h1 className="md:block hidden w-10/12 md:text-lg text-gray-900">
                {title}
              </h1>
              <div className="md:flex hidden text-gray-500 text-sm mt-1">
                <p className="mr-2">
                  {formatPublishedDate(publishedAt)}
                </p>
              </div>
            </div>
            <div className="flex items-center mt-2 mb-3">
              <img
                className="md:w-8 md:h-8 w-12 h-12 rounded-full mr-2"
                src={channelImages}
                alt={channelTitle}
              />
              <div>
                <h1 className="md:hidden text-lg font-medium text-gray-900">
                  {title}
                </h1>
                <div className="flex items-center">
                  <h1 className="text-sm text-gray-500 mr-1">{channelTitle}</h1>
                  <div className="md:hidden flex text-gray-600 text-sm">
                    <p className="mr-2">10k views</p>
                    <p>•</p>
                    <p className="ml-2">10 days ago</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="md:block hidden text-sm text-gray-500 line-clamp-2">
                {description}
              </p>
            </div>
            <div className="md:block hidden w-8 h-8 mt-2">
              {liveBroadcastContent === "live" ? (
                <div className="flex bg-red-600">
                  <img
                    className="w-6"
                    src="https://static.vecteezy.com/system/resources/previews/005/260/970/non_2x/live-stream-live-icon-live-streaming-icon-symbol-free-vector.jpg"
                    alt="Live"
                  />
                  <h1 className="h-6 px-1 rounded bg-red-600 text-white">
                    Live
                  </h1>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex md:flex-row flex-col md:ml-72  md:p-0 p-3 border-b border-gray-300 w-8/12">
          <div className="md:mr-3 md:w-[500px] md:h-72 w-full h-60 overflow-hidden flex justify-center items-center">
            <img
              className="w-32 h-32 rounded-full"
              src={channelImages}
              alt={channelTitle}
            />
          </div>
          <div className="flex flex-col justify-center pt-2 ">
            <h1 className="md:block hidden w-10/12 md:text-lg text-gray-900">
              {title}
            </h1>
            <div className="md:flex hidden text-gray-500 text-sm mt-1">
              <p className="mr-2">
                {formatPublishedDate(publishedAt)}
              </p>
            </div>
            <p className="md:block hidden text-sm text-gray-500 line-clamp-2">
              {description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchedResultVideos;
