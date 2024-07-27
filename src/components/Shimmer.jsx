import React from 'react'

const Shimmer = () => {
  return (
    <div>
         <div className="w-96 rounded-md p-2 m-4 h-auto animate-pulse">
      <div className="h-52 bg-gray-300 rounded-xl mb-4"></div>
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-gray-300 rounded-full mr-2"></div>
        <div className="flex-1 h-6 bg-gray-300 rounded-md"></div>
      </div>
      <div className="ml-10">
        <div className="w-1/2 h-4 bg-gray-300 rounded-md mb-2"></div>
        <div className="w-1/3 h-4 bg-gray-300 rounded-md"></div>
      </div>
    </div>
    </div>
  )
}

export default Shimmer