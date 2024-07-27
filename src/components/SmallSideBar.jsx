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
    <div className='mr-32'>
      <div className="bg-white fixed w-1.5/12 py-8 px-3 shadow h-screen overflow-hidden hover:overflow-y-auto">
        <h1 className="flex flex-col items-center mb-8 text-xs font-light">
          <FontAwesomeIcon
            icon={faHome}
            className="text-gray-500 mr-3 w-5 h-5"
          />
          Home
        </h1>
        <h1 className="flex flex-col items-center mb-8 text-xs font-light">
          <FontAwesomeIcon
            icon={faFilm}
            className="text-gray-500 mr-3 w-5 h-5"
          />
          Shorts
        </h1>
        <h1 className="flex flex-col items-center mb-8 text-xs font-light">
          <FontAwesomeIcon
            icon={faStream}
            className="text-gray-500 mr-3 w-5 h-5"
          />
          Subscriptions
        </h1>
        <h1 className="flex flex-col items-center mb-8 text-xs font-light">
          <FontAwesomeIcon
            icon={faVideo}
            className="text-gray-500 mr-3 w-5 h-5"
          />
          You
        </h1>
      </div>
    </div>
  );
}

export default SmallSideBar;
