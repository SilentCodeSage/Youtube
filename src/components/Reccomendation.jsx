import React, { useEffect } from "react";

const Reccomendation = ({ id }) => {
  useEffect(() => {
    console.log(id);
    fetchData();
  }, [id]);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${id}&type=video&key=AIzaSyADJHNQq-nUrY0D0YeyLODt7OFkPPfoxW0`
    );
    const json = await data.json();
    console.log(json);
  };
  return (
    <div className=" md:w-4/12 w-full p-2 mt-4">
      <div className="flex md:flex-row flex-col items-center mb-4">
        <div className="w-5/12">
          <img
            className="rounded-lg"
            src="https://i.ytimg.com/vi/4F923YigtG8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDt7nn-JwnQPdr6ePZctDBSdOjqxghttps://i.ytimg.com/vi/4F923YigtG8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDt7nn-JwnQPdr6ePZctDBSdOjqxg"
            alt="Video thumbnail"
          />
        </div>
        <div className="flex flex-col w-7/12 ml-3">
          <h1 className="text-md font-semibold leading-tight">
            Career explained in malayalam
          </h1>
          <p className="text-sm text-gray-500 mt-1">Nissaram</p>
          <p className="text-sm text-gray-500">200k views • 3 days ago</p>
        </div>
      </div>
    </div>
  );
};

export default Reccomendation;
