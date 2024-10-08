import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLive, setNotLive } from "./utils/liveSlice";

const SearchedResultVideos = ({ data }) => {
  const { snippet } = data;
  const { channelTitle, title, description, channelId } = snippet;
  const { high } = snippet.thumbnails;
  const [imageUrl, setImageUrl] = useState("");
  const videoId = snippet.channelId;

  const dispatch = useDispatch();
  const liveState = useSelector((store) => store.live[videoId]);

  useEffect(() => {
    fetchData();

    if (snippet.liveBroadcastContent === "live") {
      dispatch(setLive({ videoId }));
    } else {
      dispatch(setNotLive({ videoId }));
    }
  }, [snippet.liveBroadcastContent, dispatch, videoId]);

  const fetchData = async () => {
    const info = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=AIzaSyCm9DEvotlBAcwJsN9-cieZxbjSDk1ltoQ`
    );
    const json = await info.json();
    setImageUrl(json.items[0]?.snippet?.thumbnails?.high?.url);
  };

  return (
    <div>
      <div className="flex md:flex-row flex-col md:ml-48 w-auto my-4 md:p-0 p-3">
        <div className="md:ml-48 mr-4 h-72 md:w-78  overflow-hidden flex-shrink-0">
          <img
            className="rounded-xl w-full h-full object-cover"
            src={high.url}
            alt=""
          />
        </div>

        <div className="flex flex-col pt-2 ">
          <div>
            <h1 className="md:block hidden text-xl font-medium text-gray-900">
              {title}
            </h1>
            <div className="md:flex hidden text-gray-600 text-sm mt-1">
              <p className="mr-2">10k views</p>
              <p>•</p>
              <p className="ml-2">10 days ago</p>
            </div>
          </div>
          <div className="flex items-center mt-2 mb-3 ">
            <img
              className="md:w-8 md:h-8 w-12 h-12 rounded-full mr-2"
              src={imageUrl}
              alt=""
            />
            <div>
              <h1 className="md:hidden  text-xl font-medium text-gray-900">
                {title}
              </h1>
              <div className="flex items-center">
                <h1 className="text-sm text-gray-700 mr-1">{channelTitle}</h1>
                <div className="md:hidden flex text-gray-600 text-sm ">
                  <p className="mr-2">10k views</p>
                  <p>•</p>
                  <p className="ml-2">10 days ago</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="md:block hidden text-sm text-gray-700 line-clamp-2">
              {description}
            </p>
          </div>
          <div className="md:block hidden w-8 h-8 mt-2">
            {liveState && (
              <div className="flex bg-red-600">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/005/260/970/non_2x/live-stream-live-icon-live-streaming-icon-symbol-free-vector.jpg"
                  alt=""
                />
                <h1 className="px-2 rounded bg-red-600 text-white p-1">Live</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchedResultVideos;
