import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:{
        searchQuery:"",
        searchCache:{},
    },
    reducers:{
        cacheResults : (state, action) =>{
            // state = Object.assign(state,action.payload);
            state.searchCache = {...state.searchCache,...action.payload}

        },
        newSearchQuery :(state, action) =>{
            state.searchQuery = action.payload;
        }
    }
})

export default searchSlice.reducer;
export const {cacheResults,newSearchQuery} = searchSlice.actions;