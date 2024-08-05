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
    <div className='md:mr-28 w-0.5/12'>
      <div className=" md:block hidden bg-white fixed full py-8  h-screen overflow-hidden hover:overflow-y-auto">
        <h1 className="flex flex-col pl-2 items-center mb-8 text-xs font-light">
          <FontAwesomeIcon
            icon={faHome}
            className="text-gray-500 mr-3 w-5 h-5"
          />
          Home
        </h1>
        <h1 className="flex flex-col pl-2 items-center mb-8 text-xs font-light">
          <FontAwesomeIcon
            icon={faFilm}
            className="text-gray-500 mr-3 w-5 h-5"
          />
          Shorts
        </h1>
        <h1 className="flex flex-col pl-2 items-center mb-8 text-xs font-light">
          <FontAwesomeIcon
            icon={faStream}
            className="text-gray-500 mr-3 w-5 h-5"
          />
          Subscriptions
        </h1>
        <h1 className="flex flex-col pl-2 items-center mb-8 text-xs font-light">
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
