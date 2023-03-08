import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: { mode: false },
  reducers: {
    toggle(state) {
      state.mode = !state.mode;
    },
  },
});

export const themeActions = themeSlice.actions;
export default themeSlice;
