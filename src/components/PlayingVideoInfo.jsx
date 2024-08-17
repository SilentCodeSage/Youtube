import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faShare,
  faDownload,
  faCut,
  faBookmark,
  faSave,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  formatViewCount,
  formatPublishedDate,
} from "./utils/viewCountNormalizer";
import { toggleDescreption } from "./utils/appSlice";

const PlayingVideoInfo = () => {

  const isComments = useSelector((store) => store.app.toggleComments);
  const [channelInfo, setChannelInfo] = useState(null);
  const [videoInfo, setVideoInfo] = useState(null);
  const info = useSelector((store) => store.video.watchingVideoData);
  const isDescreption = useSelector((store) => store.app.isDescreption);
  const dispatch = useDispatch();
  console.log(info);

  useEffect(() => {
    fetchData();
  }, [info]);

  const fetchData = async () => {
    const result = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${info.videoId}&key=AIzaSyADJHNQq-nUrY0D0YeyLODt7OFkPPfoxW0`
    );
    const final = await result.json();
    console.log(final.items[0]);
    setVideoInfo(final.items[0]);

    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${info.channelId}&key=AIzaSyADJHNQq-nUrY0D0YeyLODt7OFkPPfoxW0`
    );
    const json = await data.json();
    json && setChannelInfo(json.items[0]);
  };

  return (
    <div>
      <div className="md:w-full md:block hidden w-screen p-2">
      { videoInfo && (
        <div className="md:mt-0 mt-64">
          <div>
            <h1 className="text-xl font-bold py-2">{videoInfo.snippet.title}</h1>
          </div>
          <div className="flex md:flex-row flex-col">
            <div className="flex md:w-4/12 justify-between mb-2">
              <div className="flex items-center">
                <div className="pr-2">
                  <img
                    className="rounded-full"
                    src="https://yt3.ggpht.com/lgdJPP7_H-ivrTVy3q5durEhh2yTIT34nRAHf7mVzH8wMmbGjw0ZABXHiLezAEVehPaSYUHK-wI=s48-c-k-c0x00ffffff-no-rj"
                    alt=""
                  />
                </div>
                <div className="pr-5">
                  <h1 className="font-medium">
                    {videoInfo.snippet.channelTitle}
                  </h1>
                  <p className="text-sm text-gray-600">
                    {channelInfo &&
                      formatViewCount(channelInfo.statistics.subscriberCount)}{" "}
                    subscribers
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <button className="bg-black text-white px-4 py-2 font-medium rounded-3xl mr-1">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="flex md:justify-end justify-end md:w-8/12 w-full overflow-x-scroll scrollbar-none">
              <div className="flex items-center overflow-x-scroll scrollbar-none">
                <div className="flex px-4 py-2 items-center border mx-1 border-gray-300 rounded-3xl">
                  <div className="flex items-center">
                    <span><FontAwesomeIcon className="pr-2" icon={faThumbsUp} /></span>
                    <span>{formatViewCount(videoInfo?.statistics?.likeCount)}</span>
                    <span className="mx-2">|</span>
                   <span> <FontAwesomeIcon className="pl-2" icon={faThumbsDown} /></span>
                  </div>
                </div>
                <div className="flex px-4 py-2 items-center border mx-1 border-gray-300 rounded-3xl">
                  <FontAwesomeIcon className="pr-2" icon={faShare} />
                  Share
                </div>
                <div className="flex px-4 py-2 items-center border mx-1 border-gray-300 rounded-3xl">
                  <FontAwesomeIcon className="pr-2" icon={faDownload} />
                  Download
                </div>
                <div className="flex px-4 py-2 items-center border mx-1 border-gray-300 rounded-3xl">
                  <FontAwesomeIcon className="pr-2" icon={faCut} />
                  Clip
                </div>
                <div className="flex px-4 py-2 items-center border mx-1 border-gray-300 rounded-3xl">
                  <FontAwesomeIcon className="pr-2" icon={faSave} />
                  Save
                </div>
                <div className="flex px-4 py-2 items-center border mx-1 border-gray-300 rounded-3xl">
                  <FontAwesomeIcon className="pr-2" icon={faEllipsisH} />
                </div>
              </div>
            </div>
          </div>
          <div
            className={`bg-gray-100 md:block hidden rounded-xl mt-3  p-3 md:relative ${
              isDescreption ? "max-h-[7rem] overflow-hidden" : "h-auto"
            }`}
          >
            <div>
              <h1 className="font-medium">
                {formatViewCount(videoInfo.statistics.viewCount)} views
                <span className="mx-2"></span>
                {formatPublishedDate(videoInfo.snippet.publishedAt)}
              </h1>
            </div>
            <div>
              <p className="text-sm text-gray-700 leading-relaxed mt-2">
                {videoInfo.snippet.description}
              </p>
            </div>
            <button
              onClick={() => dispatch(toggleDescreption())}
              className=" bg-gray-100 pl-2 font-medium absolute  right-1 mr-2 bottom-0"
            >
              {isDescreption ? "...more" : "Show less"}
            </button>
          </div>
        </div>
      )}
    </div>
    <div className="md:w-full md:hidden block w-screen p-2">
      {!isComments&& videoInfo && (
        <div className="md:mt-0 mt-64">
          <div>
            <h1 className="text-xl font-bold py-2">{videoInfo.snippet.title}</h1>
          </div>
          <div className="flex md:flex-row flex-col">
            <div className="flex md:w-4/12 justify-between mb-2">
              <div className="flex items-center">
                <div className="pr-2">
                  <img
                    className="rounded-full"
                    src="https://yt3.ggpht.com/lgdJPP7_H-ivrTVy3q5durEhh2yTIT34nRAHf7mVzH8wMmbGjw0ZABXHiLezAEVehPaSYUHK-wI=s48-c-k-c0x00ffffff-no-rj"
                    alt=""
                  />
                </div>
                <div className="pr-5">
                  <h1 className="font-medium">
                    {videoInfo.snippet.channelTitle}
                  </h1>
                  <p className="text-sm text-gray-600">
                    {channelInfo &&
                      formatViewCount(channelInfo.statistics.subscriberCount)}{" "}
                    subscribers
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <button className="bg-black text-white px-4 py-2 font-medium rounded-3xl mr-1">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="flex md:justify-end justify-end md:w-8/12 w-full overflow-x-scroll scrollbar-none">
              <div className="flex items-center overflow-x-scroll scrollbar-none">
                <div className="flex px-4 py-2 items-center border mx-1 border-gray-300 rounded-3xl">
                  <div className="flex items-center">
                    <span><FontAwesomeIcon className="pr-2" icon={faThumbsUp} /></span>
                    <span>{formatViewCount(videoInfo?.statistics?.likeCount)}</span>
                    <span className="mx-2">|</span>
                   <span> <FontAwesomeIcon className="pl-2" icon={faThumbsDown} /></span>
                  </div>
                </div>
                <div className="flex px-4 py-2 items-center border mx-1 border-gray-300 rounded-3xl">
                  <FontAwesomeIcon className="pr-2" icon={faShare} />
                  Share
                </div>
                <div className="flex px-4 py-2 items-center border mx-1 border-gray-300 rounded-3xl">
                  <FontAwesomeIcon className="pr-2" icon={faDownload} />
                  Download
                </div>
                <div className="flex px-4 py-2 items-center border mx-1 border-gray-300 rounded-3xl">
                  <FontAwesomeIcon className="pr-2" icon={faCut} />
                  Clip
                </div>
                <div className="flex px-4 py-2 items-center border mx-1 border-gray-300 rounded-3xl">
                  <FontAwesomeIcon className="pr-2" icon={faSave} />
                  Save
                </div>
                <div className="flex px-4 py-2 items-center border mx-1 border-gray-300 rounded-3xl">
                  <FontAwesomeIcon className="pr-2" icon={faEllipsisH} />
                </div>
              </div>
            </div>
          </div>
          <div
            className={`bg-gray-100 md:block hidden rounded-xl mt-3  p-3 md:relative ${
              isDescreption ? "max-h-[7rem] overflow-hidden" : "h-auto"
            }`}
          >
            <div>
              <h1 className="font-medium">
                {formatViewCount(videoInfo.statistics.viewCount)} views
                <span className="mx-2"></span>
                {formatPublishedDate(videoInfo.snippet.publishedAt)}
              </h1>
            </div>
            <div>
              <p className="text-sm text-gray-700 leading-relaxed mt-2">
                {videoInfo.snippet.description}
              </p>
            </div>
            <button
              onClick={() => dispatch(toggleDescreption())}
              className=" bg-gray-100 pl-2 font-medium absolute  right-1 mr-2 bottom-0"
            >
              {isDescreption ? "...more" : "Show less"}
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
    
  );
};

export default PlayingVideoInfo;
