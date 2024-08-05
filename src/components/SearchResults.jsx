import React, { useEffect } from "react";
import SearchedResultVideos from "./SearchedResultVideos";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

const SearchResults = () => {
  const [searchList, setSearchList] = useState([]);
  const [channelImage, setChannelImage] = useState({});

  const searchQueryString = useSelector((store) => store.search.searchQuery);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQueryString}&key=AIzaSyDmG0ixJl2PETtD8O_M2hhOhPwIBk_tBCA`
    );
    const json = await data.json();
    setSearchList(json.items);

    const ids = json.items.map((data) => {
      return data.snippet.channelId;
    });
    const querryString = ids.join(",");
    const info = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${querryString}&key=AIzaSyADJHNQq-nUrY0D0YeyLODt7OFkPPfoxW0`
    );
    const images = await info.json();

    const channelImages = images.items.reduce((acc, channel) => {
      acc[channel.id] = channel.snippet.thumbnails.high.url;
      return acc;
    }, {});
    setChannelImage(channelImages);
  };
  return (
    <div className="mt-20">
      {searchList.map((data) => {
        return (
          <Link key={data.id} to={"/watch?v=" + data.id.videoId}>
            <SearchedResultVideos data={data} channelImages={channelImage[data.snippet.channelId]}/>
          </Link>
        );
      })}
    </div>
  );
};

export default SearchResults;
