import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  formatPublishedDate,
  formatViewCount,
} from "./utils/viewCountNormalizer";
import { useDispatch, useSelector } from "react-redux";
import { toggleReplies } from "./utils/appSlice";

export const CommentsList = ({ commentsData, id }) => {
  const isReplies = useSelector((store)=>store.app.isReplies);
  
  console.log(isReplies)
  const dispatch = useDispatch();
  const [replies, setReplies] = useState([]);
  const [showReplies, setShowReplies] = useState(false);

  const fetchReplies = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/comments?part=snippet&parentId=${id}&key=AIzaSyDmG0ixJl2PETtD8O_M2hhOhPwIBk_tBCA`
      );
      const json = await response.json();
      setReplies(json.items);
      setShowReplies(true);
      dispatch(toggleReplies());
    } catch (error) {
      console.error("Error fetching replies:", error);
    }
  };

  const {
    topLevelComment: {
      snippet: {
        authorProfileImageUrl,
        authorDisplayName,
        publishedAt,
        textDisplay,
        likeCount,
      },
    },
    totalReplyCount,
  } = commentsData.snippet;

  return (
    <div className="max-w-full">
      <div className="flex flex-col md:flex-row mt-4 items-start md:items-center">
        <div className="flex-shrink-0">
          <img
            className="mr-3 w-10 h-10 rounded-full"
            src={authorProfileImageUrl}
            alt=""
          />
        </div>
        <div className="flex flex-col flex-grow">
          <div className="flex items-center">
            <p className="font-medium text-xs truncate">{authorDisplayName}</p>
            <p className="text-xs ml-2">{formatPublishedDate(publishedAt)}</p>
          </div>
          <p className="text-sm mt-1 break-words">{textDisplay}</p>
        </div>
      </div>
      <div className="flex mt-2 ml-14">
        <div className="mr-4 flex items-center">
          <FontAwesomeIcon className="pr-2 text-gray-500" icon={faThumbsUp} />
          <span className="text-gray-400">
            {likeCount > 0 ? formatViewCount(likeCount) : null}
          </span>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon className="pr-2 text-gray-500" icon={faThumbsDown} />
        </div>
        <button className="text-xs font-medium ml-4">Reply</button>
      </div>
      <div className="ml-16 mt-2">
        <button
          onClick={() => fetchReplies()}
          className="text-blue-500 text-base font-medium"
        >
          {totalReplyCount > 0 ? `${totalReplyCount} replies` : null}
        </button>
        {isReplies && showReplies && (
          <div className="mt-4">
            {replies.map((reply) => (
              <div key={reply.id} className="flex flex-col md:flex-row mt-4 items-start md:items-center">
                <div className="flex-shrink-0">
                  <img
                    className="mr-3 w-10 h-10 rounded-full"
                    src={reply.snippet.authorProfileImageUrl}
                    alt=""
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <div className="flex items-center">
                    <p className="font-medium text-xs truncate">{reply.snippet.authorDisplayName}</p>
                    <p className="text-xs ml-2">{formatPublishedDate(reply.snippet.publishedAt)}</p>
                  </div>
                  <p className="text-sm mt-1 break-words">{reply.snippet.textDisplay}</p>
                  <div className="flex mt-2">
                    <div className="mr-4 flex items-center">
                      <FontAwesomeIcon className="pr-2 text-gray-500" icon={faThumbsUp} />
                      <span className="text-gray-400">
                        {reply.snippet.likeCount > 0
                          ? formatViewCount(reply.snippet.likeCount)
                          : null}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FontAwesomeIcon className="pr-2 text-gray-500" icon={faThumbsDown} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
