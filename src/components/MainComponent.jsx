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
    <div className=' ml-44 w-11/12 mr-8 mx-16 '>
        <Buttonlist />
        <VideoContainer />
    </div>
  )
}

export default MainComponent