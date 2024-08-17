import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isOpen: false,
    isClicked: false,
    isSuggestions:false,
    isReplies:false,
    isDescreption:false,
    toggleComments:false
  },
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
      
    },
    closeMenu: (state) => {
      state.isOpen = false;
    },
    toggleState: (state) => {
      state.isClicked = true; // Toggles the stateNow value
    },
    toggleSuggestions: (state,action) => {
      state.isSuggestions = action.payload; // Toggles the stateNow value
    },
    toggleReplies: (state) => {
      state.isReplies = !state.isReplies;
      
    },
    toggleDescreption: (state) => {
      state.isDescreption = !state.isDescreption;
      
    },
    showToggleComments: (state) => {
      state.toggleComments = true;
    },
    hideToggleComments: (state) => {
      state.toggleComments = false;
    },
  },
});

export default appSlice.reducer;
export const { toggleMenu, closeMenu,showToggleComments,hideToggleComments, toggleState,toggleSuggestions,toggleReplies,toggleDescreption } = appSlice.actions;
