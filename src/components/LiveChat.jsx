import React, { useEffect, useState } from "react";
import LiveMessages from "./LiveMessages";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      fetchData();
    }, 10000);

    return () => clearInterval(timer);
  }, [liveMessage]);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.googleapis.com/youtube/v3/liveChat/messages?liveChatId=Cg0KC2htNGI0el9pRTY4KicKGFVDLW1NaTc4V0pTVDRONW84X2kxRm9YdxILaG00YjR6X2lFNjg&part=snippet,authorDetails&key=AIzaSyADJHNQq-nUrY0D0YeyLODt7OFkPPfoxW0"
    );
    const info = await data.json();
    setLiveMessage(info.items);
  };
  return (
    <div className=" flex flex-col justify-between w-96 bg-slate-50 border border-gray-300 rounded-xl h-[600px] mt-12 mr-16">
      {/* Header */}
      <div className="bg-slate-200 border-b border-gray-300 rounded-t-xl h-12 p-3">
        <h1 className="font-medium">LiveChat</h1>
      </div>

      <div class="flex flex-col-reverse h-[600px] p-4 bg-gray-100 overflow-y-auto">
        <div class="flex flex-col ">
          {liveMessage.map((data) => {
            return <LiveMessages data={data} />;
          })}
        </div>
      </div>

      <div className="bg-slate-200 border-t border-gray-300 flex items-center p-3 rounded-b-xl">
        <input
          className="flex-1 rounded-3xl bg-slate-100 border-none p-2"
          type="text"
          placeholder="Type a message..."
        />
        <button className="bg-gray-300 p-2 ml-2 rounded-full">|||</button>
      </div>
    </div>
  );
};

export default LiveChat;
