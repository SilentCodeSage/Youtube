import Shimmer from "./Shimmer";

const Videos = ({ info, channelImage }) => {
  //destructing info
  const { snippet } = info;
  const { statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;
  const { high } = thumbnails;

  return (
    <div>
      {channelImage !== null ? (
        <div className="w-96 md:w-80 2xl:w-96  rounded-md p-2 m-4 h-auto">
          <div className="h-52 ">
            <img
              className="rounded-xl w-full h-full object-cover border-none"
              src={high.url}
              alt=""
            />
          </div>
          <h1 className="font-medium my-4 flex">
            <img
              className="mr-2 w-10 h-10 rounded-full"
              src={channelImage}
              alt=""
            />
            {title}
          </h1>
          <div className="">
            <h1 className=" text-slate-700 text-sm ml-10">{channelTitle}</h1>
            <p className=" text-slate-700 text-sm ml-10">{viewCount} views</p>
          </div>
        </div>
      ) : (
        <Shimmer />
      )}
    </div>
  );
};

export default Videos;
