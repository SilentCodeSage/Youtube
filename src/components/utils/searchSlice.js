import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:{
        searchQuery:""
    },
    reducers:{
        cacheResults : (state, action) =>{
            state = Object.assign(state,action.payload);

        },
        newSearchQuery :(state, action) =>{
            state.searchQuery = action.payload;
        }
    }
})

export default searchSlice.reducer;
export const {cacheResults,newSearchQuery} = searchSlice.actions;