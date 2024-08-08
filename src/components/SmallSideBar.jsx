import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faFilm, 
  faStream, 
  faVideo 
} from '@fortawesome/free-solid-svg-icons';

const SmallSideBar = () => {
  return (
    <div className="md:mr-28 w-0.5/12 ml-2">
      <div className="md:block hidden bg-white fixed py-8 h-screen overflow-hidden hover:overflow-y-auto">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faHome}
              className="text-gray-500 mb-2 w-5 h-5"
            />
            <p className="text-xs font-light">Home</p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faFilm}
              className="text-gray-500 mb-2 w-5 h-5"
            />
            <p className="text-xs font-light">Shorts</p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faStream}
              className="text-gray-500 mb-2 w-5 h-5"
            />
            <p className="text-xs font-light">Subscriptions</p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faVideo}
              className="text-gray-500 mb-2 w-5 h-5"
            />
            <p className="text-xs font-light">You</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallSideBar;
