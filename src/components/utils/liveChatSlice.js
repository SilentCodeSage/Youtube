import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
    name:"Livechat",
    initialState:false,
    reducers:{
        setLiveChat:(state ,action) =>{
            return true;
        }
    }
})

export const {setLiveChat} = liveChatSlice.actions;
export default liveChatSlice.reducer