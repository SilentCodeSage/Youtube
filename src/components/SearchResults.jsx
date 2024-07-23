import React, { useEffect } from "react";
import SearchedResultVideos from "./SearchedResultVideos";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

const SearchResults = () => {
  const [searchList, setSearchList] = useState([]);

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
  };
  return (
    <div>
      {searchList.map((data) => {
        return (
          <Link key={data.id} to={"/watch?v=" + data.id.videoId}>
            <SearchedResultVideos data={data} />
          </Link>
        );
      })}
    </div>
  );
};

export default SearchResults;
