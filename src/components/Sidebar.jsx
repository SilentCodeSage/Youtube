import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="fixed bg-white ">
      <div className=" w-1.5/12 p-8 shadow-lg h-screen">
        <Link to="/">
          <h1 className="text-lg ">Home</h1>
        </Link>
        <Link to="/">
          <h1 className="text-lg ">Shorts</h1>
        </Link>
        <Link to="/">
          <h1 className="text-lg ">Trending</h1>
        </Link>
        <Link to="/">
          <h1 className="text-lg ">Live</h1>
        </Link>
        <h1 className="font-black mt-6 text-lg mb-1">Subscriptions</h1>
        <ul>
          <li>Music</li>
          <li>Movies</li>
          <li>Gaming</li>
          <li>Sports</li>
        </ul>
        <h1 className="font-black mt-6 text-lg mb-1">Watch Later</h1>
        <ul>
          <li>Music</li>
          <li>Movies</li>
          <li>Gaming</li>
          <li>Sports</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
