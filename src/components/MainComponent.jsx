import React from 'react'
import Buttonlist from './Buttonlist'
import VideoContainer from './VideoContainer'
import SearchResults from './SearchResults'
import { useSelector } from 'react-redux'

const MainComponent = () => {
  //subscribed to the store using selector
  const isClicked = useSelector((state) => state.app.isClicked);

    if(isClicked === true){
      return <SearchResults />;
    }
  
  return (
    <div className='flex flex-col justify-center w-12/12 md:w-11/12'>
        <Buttonlist />
        <VideoContainer />
    </div>
  )
}

export default MainComponent