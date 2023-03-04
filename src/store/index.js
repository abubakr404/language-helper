import { configureStore, createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: { currentMode: false },
  reducers: {
    toggle(state, action) {
      state.currentMode = !state.currentMode;
    },
  },
});

export const actions = themeSlice.actions;
const store = configureStore({
  reducer: themeSlice.reducer,
});

export default store;
