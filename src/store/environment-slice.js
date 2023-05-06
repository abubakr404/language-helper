import { createSlice } from "@reduxjs/toolkit";

const environmentSlice = createSlice({
  name: "environment",
  initialState: {
    apiUri: "https://languges-helper.onrender.com/api/v1/",
    isSidebarActive: true,
    wordsFetchRefersh: false,
    userFetchRefersh: false,
  },
  reducers: {
    wordsFetch(state) {
      state.wordsFetchRefersh = !state.wordsFetchRefersh;
    },
    userFetch(state) {
      state.userFetchRefersh = !state.userFetchRefersh;
    },
    toggleSidebar(state) {
      state.isSidebarActive = !state.isSidebarActive;
    },
  },
});

export const environmentActions = environmentSlice.actions;
export default environmentSlice;
