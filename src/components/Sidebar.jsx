import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHome, faFilm, faStream, faHistory, faPlay, faVideo, faClock, faThumbsUp, 
  faFire, faMusic, faTv, faGamepad, faFutbol, faNewspaper, faGraduationCap, 
  faTshirt, faPodcast 
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { setVideoData } from "./utils/videoSlice";
import { categoryIds } from "./utils/constants";


const Sidebar = () => {
  const handleExploreClick = async (category) => {
    const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=IN&maxResults=50&videoCategoryId=${categoryIds[category]}&key=AIzaSyADJHNQq-nUrY0D0YeyLODt7OFkPPfoxW0`);
      const json = await data.json();
      dispatch(setVideoData(json.items))
  };
  const dispatch = useDispatch()
  return (
    <div className="absolute left-0 md:relative z-10 bg-white mr-56 overflow-hidden hover:overflow-y-scroll">
      <div className="bg-white fixed w-1.5/12 px-8 py-2 pb-32 shadow h-screen hover:overflow-scroll">
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
          <li 
            className="flex items-center text-sm font-light py-2 px-2 rounded-lg hover:bg-gray-100 cursor-pointer" 
            onClick={() => handleExploreClick("Trending")}
          >
            <FontAwesomeIcon icon={faFire} className="text-gray-500 mr-3 w-5 h-5" />
            Trending
          </li>
          <li 
            className="flex items-center text-sm font-light py-2 px-2 rounded-lg hover:bg-gray-100 cursor-pointer" 
            onClick={() => handleExploreClick("Music")}
          >
            <FontAwesomeIcon icon={faMusic} className="text-gray-500 mr-3 w-5 h-5" />
            Music
          </li>
          <li 
            className="flex items-center text-sm font-light py-2 px-2 rounded-lg hover:bg-gray-100 cursor-pointer" 
            onClick={() => handleExploreClick("Movies")}
          >
            <FontAwesomeIcon icon={faTv} className="text-gray-500 mr-3 w-5 h-5" />
            Movies
          </li>
          <li 
            className="flex items-center text-sm font-light py-2 px-2 rounded-lg hover:bg-gray-100 cursor-pointer" 
            onClick={() => handleExploreClick("Gaming")}
          >
            <FontAwesomeIcon icon={faGamepad} className="text-gray-500 mr-3 w-5 h-5" />
            Gaming
          </li>
          <li 
            className="flex items-center text-sm font-light py-2 px-2 rounded-lg hover:bg-gray-100 cursor-pointer" 
            onClick={() => handleExploreClick("Sports")}
          >
            <FontAwesomeIcon icon={faFutbol} className="text-gray-500 mr-3 w-5 h-5" />
            Sports
          </li>
          <li 
            className="flex items-center text-sm font-light py-2 px-2 rounded-lg hover:bg-gray-100 cursor-pointer" 
            onClick={() => handleExploreClick("News")}
          >
            <FontAwesomeIcon icon={faNewspaper} className="text-gray-500 mr-3 w-5 h-5" />
            News
          </li>
          <li 
            className="flex items-center text-sm font-light py-2 px-2 rounded-lg hover:bg-gray-100 cursor-pointer" 
            onClick={() => handleExploreClick("Courses")}
          >
            <FontAwesomeIcon icon={faGraduationCap} className="text-gray-500 mr-3 w-5 h-5" />
            Courses
          </li>
          <li 
            className="flex items-center text-sm font-light py-2 px-2 rounded-lg hover:bg-gray-100 cursor-pointer" 
            onClick={() => handleExploreClick("Fashion & Beauty")}
          >
            <FontAwesomeIcon icon={faTshirt} className="text-gray-500 mr-3 w-5 h-5" />
            Fashion & Beauty
          </li>
          <li 
            className="flex items-center text-sm font-light py-2 px-2 rounded-lg hover:bg-gray-100 cursor-pointer" 
            onClick={() => handleExploreClick("Podcasts")}
          >
            <FontAwesomeIcon icon={faPodcast} className="text-gray-500 mr-3 w-5 h-5" />
            Podcasts
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
