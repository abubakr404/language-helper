import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import themeSlice from "./theme-slice";
import environmentSlice from "./environment-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    theme: themeSlice.reducer,
    environment: environmentSlice.reducer,
  },
});

export default store;
