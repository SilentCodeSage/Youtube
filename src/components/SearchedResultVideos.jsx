import React, { useState, useEffect } from "react";

const SearchedResultVideos = ({ data }) => {
  const { snippet } = data;
  const { channelTitle, title, description, channelId } = snippet;
  const { high } = snippet.thumbnails;
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const info = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=AIzaSyCm9DEvotlBAcwJsN9-cieZxbjSDk1ltoQ`
    );
    const json = await info.json();
    setImageUrl(json.items[0]?.snippet?.thumbnails?.high?.url);
  };

  return (
    <div>
      <div className="flex ml-48 w-auto my-4 ">
      <div className="ml-48 mr-4 h-72 w-78 overflow-hidden flex-shrink-0">
        <img
          className="rounded-xl w-full h-full object-cover"
          src={high.url}
          alt=""
        />
      </div>

      <div className="flex flex-col pt-2 ">
        <div>
          <h1 className="text-xl font-medium text-gray-900">{title}</h1>
          <div className="flex text-gray-600 text-sm mt-1">
            <p className="mr-2">10k views</p>
            <p>•</p>
            <p className="ml-2">10 days ago</p>
          </div>
        </div>
        <div className="flex items-center mt-2 mb-3">
          <img className="w-8 h-8 rounded-full mr-2" src={imageUrl} alt="" />
          <h1 className="text-sm text-gray-700">{channelTitle}</h1>
        </div>
        <div>
          <p className="text-sm text-gray-700 line-clamp-2">{description}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SearchedResultVideos;
