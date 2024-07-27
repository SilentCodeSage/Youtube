import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isOpen: true,
    isClicked: false,
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
  },
});

export default appSlice.reducer;
export const { toggleMenu, closeMenu, toggleState } = appSlice.actions;
