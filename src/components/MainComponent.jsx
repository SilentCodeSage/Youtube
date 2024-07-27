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
    <div className=' w-11/12'>
        <Buttonlist />
        <VideoContainer />
    </div>
  )
}

export default MainComponent