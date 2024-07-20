import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";

//create a redux store where all the reducers of the slices created are placed
const store = configureStore({
  reducer: {
    app: appSlice,
    search:searchSlice,
  },
});

export default store;
