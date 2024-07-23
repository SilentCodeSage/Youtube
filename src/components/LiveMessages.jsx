const LiveMessages = ({ data }) => {
  return (
    <div className="mb-4 flex items-start">
      <div className="text-sm font-semibold text-gray-800">
        {data.authorDetails.displayName}
      </div>
      <div className="bg-white p-2 rounded-lg shadow ml-2">
        {data.snippet.displayMessage}
        asdfaj;lfsdkjfasd
      </div>
    </div>
  );
};

export default LiveMessages;
