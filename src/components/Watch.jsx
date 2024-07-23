import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "./utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { setLiveChat } from "./utils/liveChatSlice";

const Watch = () => {
  const dispatch = useDispatch();
  const isLiveChatEnabled = useSelector((store)=>store.livechat);

  // It allows you to access the query parameters (the parts of the URL that come after the ?).
  const [searchParams] = useSearchParams();
  //console.log(searchParams.get("v"));

  useEffect(() => {
    dispatch(closeMenu());
    fetchData();
  }, []);

const fetchData = async() =>{
  const data =  await fetch(`https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails&id=${searchParams.get("v")}&key=AIzaSyADJHNQq-nUrY0D0YeyLODt7OFkPPfoxW0`)
  
  const json = await data.json();
  const activeId = json.items[0].liveStreamingDetails?.activeLiveChatId
   
  //if the video is live then it will  calls the reducer setLiveChat using dispatch and changes the value  of state to true
   if(activeId){
    dispatch(setLiveChat());
   }
   
}
  return (
    <div className="w-full mt-4">
      <div className="flex justify-between">
        <div>
          <iframe
            className="rounded-xl my-4 ml-32"
            width="1200"
            height="650"
            src={`https://www.youtube.com/embed/${searchParams.get(
              "v"
            )}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; miniplayer; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="">
          {/* render this component only if the playing vidoe has a liveVideoId */}
          {
            isLiveChatEnabled && <LiveChat/>
          }
         
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default Watch;
