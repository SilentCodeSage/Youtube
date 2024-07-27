import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faFilm, faStream, faHistory, faPlay, faVideo, faClock, faThumbsUp, faFire, faMusic, faTv, faGamepad, faFutbol } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="bg-white mr-52 overflow-hidden hover:overflow-y-scroll">
      <div className="bg-white fixed w-1.5/12 px-8 py-2 pb-8 shadow h-screen hover:overflow-scroll">
        <Link to="/">
          <h1 className="flex items-center text-base font-normal py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <FontAwesomeIcon icon={faHome} className="text-gray-500 mr-3 w-5 h-5" />
            Home
          </h1>
        </Link>
        <Link to="/shorts">
          <h1 className="flex items-center text-base font-normal py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <FontAwesomeIcon icon={faFilm} className="text-gray-500 mr-3 w-5 h-5" />
            Shorts
          </h1>
        </Link>
        <Link to="/subscriptions">
          <h1 className="flex items-center text-base font-normal py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <FontAwesomeIcon icon={faStream} className="text-gray-500 mr-3 w-5 h-5" />
            Subscriptions
          </h1>
        </Link>
        <h1 className="font-normal mt-6 text-lg mb-1">You ></h1>
        <ul>
          <li className="flex items-center text-sm font-light py-2 px-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <FontAwesomeIcon icon={faPlay} className="text-gray-500 mr-3 w-5 h-5" />
            Your Channel
          </li>
          <li className="flex items-center text-sm font-light py-2 px-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <FontAwesomeIcon icon={faHistory} className="text-gray-500 mr-3 w-5 h-5" />
            History
          </li>
          <li className="flex items-center text-sm font-light py-2 px-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <FontAwesomeIcon icon={faPlay} className="text-gray-500 mr-3 w-5 h-5" />
            Playlists
          </li>
          <li className="flex items-center text-sm font-light py-2 px-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <FontAwesomeIcon icon={faVideo} className="text-gray-500 mr-3 w-5 h-5" />
            Your Videos
          </li>
          <li className="flex items-center text-sm font-light py-2 px-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <FontAwesomeIcon icon={faClock} className="text-gray-500 mr-3 w-5 h-5" />
            Watch Later
          </li>
          <li className="flex items-center text-sm font-light py-2 px-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <FontAwesomeIcon icon={faThumbsUp} className="text-gray-500 mr-3 w-5 h-5" />
            Liked Videos
          </li>
        </ul>
        <h1 className="font-medium mt-6 text-base mb-1">Subscriptions</h1>
        <ul>
          <li className="flex items-center text-sm font-light py-2 px-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <img className="w-8 mr-3 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL-8lJvTHKKuu6-IOMED9t6vZf4Eq4-uwfqg&s" alt="Programming" />
            Programming
          </li>
          <li className="flex items-center text-sm font-light py-2 px-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <img className="w-8 mr-3 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL-8lJvTHKKuu6-IOMED9t6vZf4Eq4-uwfqg&s" alt="Mr Beast" />
            Mr Beast
          </li>
          <li className="flex items-center text-sm font-light py-2 px-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <img className="w-8 mr-3 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL-8lJvTHKKuu6-IOMED9t6vZf4Eq4-uwfqg&s" alt="Packapeer" />
            Packapeer
          </li>
          <li className="flex items-center text-sm font-light py-2 px-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <img className="w-8 mr-3 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL-8lJvTHKKuu6-IOMED9t6vZf4Eq4-uwfqg&s" alt="Aksay Saini" />
            Aksay Saini
          </li>
          <li className="flex items-center text-sm font-light py-2 px-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <img className="w-8 mr-3 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL-8lJvTHKKuu6-IOMED9t6vZf4Eq4-uwfqg&s" alt="Arjou" />
            Arjou
          </li>
        </ul>
        <h1 className="font-semibold mt-6 text-base mb-1">Explore</h1>
        <ul>
          <li className="flex items-center text-sm font-light py-2 px-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <FontAwesomeIcon icon={faFire} className="text-gray-500 mr-3 w-5 h-5" />
            Trending
          </li>
          <li className="flex items-center text-sm font-light py-2 px-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <FontAwesomeIcon icon={faMusic} className="text-gray-500 mr-3 w-5 h-5" />
            Music
          </li>
          <li className="flex items-center text-sm font-light py-2 px-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <FontAwesomeIcon icon={faTv} className="text-gray-500 mr-3 w-5 h-5" />
            Movies
          </li>
          <li className="flex items-center text-sm font-light py-2 px-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <FontAwesomeIcon icon={faGamepad} className="text-gray-500 mr-3 w-5 h-5" />
            Gaming
          </li>
          <li className="flex items-center text-sm font-light py-2 px-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <FontAwesomeIcon icon={faFutbol} className="text-gray-500 mr-3 w-5 h-5" />
            Sports
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
