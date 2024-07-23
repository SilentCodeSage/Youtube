// liveSlice.js
import { createSlice } from "@reduxjs/toolkit";

const liveSlice = createSlice({
  name: "live",
  initialState: {},
  reducers: {
    setLive: (state, action) => {
      state[action.payload.videoId] = true;
    },
    setNotLive: (state, action) => {
      state[action.payload.videoId] = false;
    },
    
  }
});

export const { setLive, setNotLive } = liveSlice.actions;
export default liveSlice.reducer;
