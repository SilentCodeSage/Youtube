import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import liveSlice from "./liveSlice";
import liveChatSlice from "./liveChatSlice";

//create a redux store where all the reducers of the slices created are placed
const store = configureStore({
  reducer: {
    app: appSlice,
    search:searchSlice,
    chat:chatSlice,
    live:liveSlice,
    livechat:liveChatSlice
  },
});

export default store;
