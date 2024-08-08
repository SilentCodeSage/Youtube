import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { CommentsList } from "./CommentsList";

const Comments = ({ id }) => {
    const [commentData,setCommentData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${id}&key=AIzaSyADJHNQq-nUrY0D0YeyLODt7OFkPPfoxW0`
    );
    const json = await data.json();
    console.log(json);
    setCommentData(json.items)
  };
  return (
    <div className="w-12/12 h-96 mt-8 md:block hidden">
      <div className="py-4">
        <div className="">
        <h1 className="font-medium text-xl"> 500 Comments</h1>
          {
            commentData && commentData.map((data)=>{
                return <CommentsList id={data.id} commentsData={data} />
            })
          }
          
        </div>
      </div>
    </div>
  );
};

export default Comments;
