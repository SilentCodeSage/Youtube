import { createSlice } from "@reduxjs/toolkit";

const VideoSlice = createSlice({
    name:"video",
    initialState:{
        videoData:null,
        watchingVideoData:{
            channelId:null,
            videoId:null,
        },
        channelIdList:null,
    },
    reducers:{
        setVideoData:(state,action) =>{
            state.videoData = action.payload
        },
        setwatchingVideoData:(state,action) =>{
            state.watchingVideoData = action.payload
        }
    }
})

export const {setVideoData,setwatchingVideoData} = VideoSlice.actions;
export default VideoSlice.reducer;