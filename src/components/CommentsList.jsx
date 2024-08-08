import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { formatPublishedDate, formatViewCount } from "./utils/viewCountNormalizer";

export const CommentsList = ({commentsData}) => {
  return (
    <div>
      <div>
        <div className="flex md:flex-row  mt-4 items-center  ">
          <div className="flex">
            <div>
              <img
                className="mr-3 w-10 h-10 rounded-full"
                src={commentsData.snippet.topLevelComment.snippet.authorProfileImageUrl
                }
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex">
                <p className="font-medium text-xs">{commentsData.snippet.topLevelComment.snippet.authorDisplayName}</p>
                <p className="text-xs ml-2">{formatPublishedDate(commentsData.snippet.topLevelComment.snippet.publishedAt)}</p>
              </div>
              <p className="text-sm">
                {commentsData.snippet.topLevelComment.snippet.textDisplay}
              </p>
            </div>
          </div>
        </div>
        <div className="flex ml-14">
          <div className="mr-4">
            <FontAwesomeIcon className="pr-2 text-gray-500" icon={faThumbsUp} />
            <span className="text-gray-400">{formatViewCount(commentsData.snippet.topLevelComment.snippet.likeCount)}</span>
          </div>
          <div>
            <FontAwesomeIcon
              className="pr-2 text-gray-500"
              icon={faThumbsDown}
            />
          </div>
          <button className="text-xs font-medium">Reply</button>
        </div>
        <div className="ml-16">
          <button className="text-blue-500 text-base font-medium">
            {commentsData.snippet.totalReplyCount} replies
          </button>
        </div>
      </div>
    </div>
  );
};
