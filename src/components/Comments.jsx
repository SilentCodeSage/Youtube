import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { CommentsList } from "./CommentsList";
import { useDispatch, useSelector } from "react-redux";
import { hideToggleComments, showToggleComments } from "./utils/appSlice";

const Comments = ({ id }) => {
  const dispatch = useDispatch();
  const [commentData, setCommentData] = useState(null);
  const isComments = useSelector((store) => store.app.toggleComments);
  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${id}&key=AIzaSyADJHNQq-nUrY0D0YeyLODt7OFkPPfoxW0`
    );
    const json = await data.json();
    console.log(json);
    setCommentData(json.items);
  };
  return (
    <div className="w-12/12 h-auto ">
      {!isComments && (
        <div 
          onClick={() => dispatch(showToggleComments())}
          className="bg-gray-200 md:hidden   h-20 w-11.5/12 rounded-2xl mx-2 p-3 flex flex-col"
        >
          <h1 >
            <span className="font-bold text-lg">Comments </span>
            <span className="text-gray-500"> :</span>
          </h1>
          <p className="ml-32">click to view comments</p>
        </div>
      )}

      <div className="py-4 px-2">
        <div className="">
         { isComments && <div className="flex justify-between mt-64">
            <h1 className="font-medium text-xl"> 500 Comments</h1>
            <span
              onClick={() => dispatch(hideToggleComments())}
              className="mr-4 text-2xl md:hidden block"
            >
              X
            </span>
          </div>}
          
          {commentData &&
            commentData.map((data) => {
              return <CommentsList id={data.id} commentsData={data} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Comments;
