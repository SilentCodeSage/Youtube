import React from "react";
import { commentUserImg } from "./utils/constants";

const Comments = ({ data }) => {
  const { name, text, replies } = data;
  console.log(replies);
  return (
    <div>
      <div className="px-5 ml-32 py-2 my-2 rounded-xl flex items-center bg-gray-100">
        <div className="mr-4">
          <img className="w-16 h-16 rounded-full" src={commentUserImg} alt="" />
        </div>
        <div>
          <h1 className="font-bold">{name}</h1>
          <h1>{text}</h1>
        </div>
      </div>
      <div className="ml-24">
        {replies &&
          replies.map((data, index) => {
            return <Comments key={index} data={data} />;
          })}
      </div>
    </div>
  );
};

export default Comments;
