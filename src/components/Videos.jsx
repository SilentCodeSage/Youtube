import { useDispatch } from "react-redux";
import { formatViewCount } from "./utils/viewCountNormalizer";
import { formatPublishedDate } from "./utils/viewCountNormalizer";
import { setwatchingVideoData } from "./utils/videoSlice";

const Videos = ({ info, channelImage }) => {
  const dispatch = useDispatch();
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;
  const { high } = thumbnails;

  return (
    <div
      onClick={() =>
        dispatch(
          setwatchingVideoData({
            channelId: info.snippet.channelId,
            videoId: info.id,
          })
        )
      }
      className="cursor-pointer"
    >
      <div className="flex flex-col justify-between w-full rounded-md p-2 my-2">
        <div className="flex flex-col w-full">
          <div className="relative mb-1 sm:h-56 h-52 overflow-hidden rounded-xl -z-10">
            <img
              className="rounded-xl w-full h-full object-cover xl:scale-100  md:scale-y-[1.28]" // Scales the image along the Y-axis by 25%
              src={high.url}
              alt={title}
            />
          </div>
          <div className="flex items-start justify-start h-12 overflow-hidden">
            <img
              className="mr-2 w-10 h-10 rounded-full"
              src={channelImage}
              alt={channelTitle}
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
      </div>
    </div>
  );
};

export default Videos;
