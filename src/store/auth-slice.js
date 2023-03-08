import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: JSON.parse(localStorage.getItem("user")) || null },
  reducers: {
    login(state, actions) {
      localStorage.setItem("user", JSON.stringify(actions.payload));
      state.isLoggedIn = actions.payload;
    },
    logout(state) {
      localStorage.removeItem("user");
      state.isLoggedIn = null;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
