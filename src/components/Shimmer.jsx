import React from "react";

const Shimmer = () => {
  const count = 20;
  return (
    <div className=" m-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col justify-between w-96 md:w-80 2xl:w-96 rounded-md p-2 my-2 h-80 animate-pulse"
        >
          <div className="h-52 mb-1 bg-gray-300 rounded-xl"></div>
          <div className="flex items-start justify-start h-12">
            <div className="mr-2 w-10 h-10 rounded-full bg-gray-300"></div>
            <div className="flex flex-col w-full">
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            </div>
          </div>
          <div className="ml-2">
            <div className="h-4 bg-gray-300 rounded w-1/3 mb-2 ml-10"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 ml-10"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
