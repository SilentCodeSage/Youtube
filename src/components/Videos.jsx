import { useDispatch } from "react-redux";
import Shimmer from "./Shimmer";
import { formatViewCount } from "./utils/viewCountNormalizer";
import { formatPublishedDate } from "./utils/viewCountNormalizer";
import { setwatchingVideoData } from "./utils/videoSlice";

const Videos = ({ info, channelImage }) => {
  
  const dispatch = useDispatch();
  const { snippet } = info;
  const { statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;
  const { high } = thumbnails;

  return (
    <div onClick={()=>dispatch(setwatchingVideoData(info))}>
      {channelImage !== null ? (
        <div className="flex flex-col justify-between w-96 md:w-80 2xl:w-96 rounded-md p-2 my-2 h-80">
          <div className="h-52 mb-1">
            <img
              className="rounded-xl w-full h-full object-cover border-none"
              src={high.url}
              alt=""
            />
          </div>
          <div className="flex items-start justify-start h-12 overflow-hidden">
            <img
              className="mr-2 w-10 h-10 rounded-full "
              src={channelImage}
              alt=""
            />
            <h1 className="font-medium text-base flex items-center overflow-hidden line-clamp-1">
              {title}
            </h1>
          </div>

          <div className="ml-2">
            <h1 className="text-slate-700 text-sm ml-10">{channelTitle}</h1>
            <p className="text-slate-700 text-sm ml-10">
              {formatViewCount(viewCount)} • {formatPublishedDate(info.snippet.publishedAt)}
            </p>
          </div>
        </div>
      ) : (
        <Shimmer />
      )}
    </div>
  );
};

export default Videos;
