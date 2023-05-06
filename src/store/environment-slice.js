import { createSlice } from "@reduxjs/toolkit";

const environmentSlice = createSlice({
  name: "environment",
  initialState: {
    apiUri: "https://languges-helper.onrender.com/api/v1/",
    isSidebarActive: true,
  },
  reducers: {
    toggleSidebar(state) {
      state.isSidebarActive = !state.isSidebarActive;
    },
  },
});

export const environmentActions = environmentSlice.actions;
export default environmentSlice;
