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
import { useSelector } from "react-redux";
import { formatViewCount } from "./utils/viewCountNormalizer";
import { formatPublishedDate } from "./utils/viewCountNormalizer";

const PlayingVideoInfo = () => {
  const [channelInfo, setChannelInfo] = useState(null);
  const [videoInfo, setVideoInfo] = useState(null);
  const info = useSelector((store) => store.video.watchingVideoData);
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
    <div className="md:w-full w-screen  p-2">
      {videoInfo && (
        <div className="md:mt-0 mt-64">
          <div>
            <h1 className="text-xl font-bold py-2">
              {videoInfo.snippet.title}
            </h1>
          </div>
          <div className="flex md:flex-row flex-col">
            <div className="flex md:w-4/12 justify-between mb-2">
              <div className="flex  items-center ">
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
                      formatViewCount(
                        channelInfo.statistics.subscriberCount
                      )}{" "}
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
                <div className="flex px-4 py-2 items-center border  mx-1 border-gray-300 rounded-3xl">
                  <div className="flex items-center">
                    <FontAwesomeIcon className="pr-2" icon={faThumbsUp} />
                    {formatViewCount(videoInfo?.statistics?.likeCount) + "|"}
                    <FontAwesomeIcon className="pl-2" icon={faThumbsDown} />
                  </div>
                </div>
                <div className="flex px-4 py-2 items-center border mx-1 border-gray-300 rounded-3xl">
                  <FontAwesomeIcon className="pr-2" icon={faShare} />
                  Share
                </div>
                <div className="flex px-4 py-2  items-center border mx-1 border-gray-300 rounded-3xl">
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
          <div className="bg-gray-100 rounded-xl mt-3 h-24  p-3 overflow-hidden">
            <div>
              <h1 className="font-medium">
                {formatViewCount(videoInfo.statistics.viewCount)} views{" "}
                <span className="mx-2"></span>
                {formatPublishedDate(videoInfo.snippet.publishedAt)}
              </h1>
            </div>
            <div className="">
              <p className="text-sm text-gray-700 leading-relaxed mt-2">
                {videoInfo.snippet.description}
              </p>
            </div>
            <button>Show more</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayingVideoInfo;
