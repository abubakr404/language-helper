import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import themeSlice from "./theme-slice";
import environmentSlice from "./environment-slice";
import notificationSlice from "./notification-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    theme: themeSlice.reducer,
    environment: environmentSlice.reducer,
    notification: notificationSlice.reducer,
  },
});

export default store;
