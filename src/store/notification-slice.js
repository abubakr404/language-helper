import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: { isActive: false, message: "" },
  reducers: {
    addMessage(state, actions) {
      state.message = actions.payload;
    },
    toggle(state) {
      state.isActive = !state.isActive;
    },
    close(state) {
      state.isActive = false;
    },
    open(state) {
      state.isActive = true;
    },
  },
});

export const notificationActions = notificationSlice.actions;
export default notificationSlice;
