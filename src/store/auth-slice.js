import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: JSON.parse(localStorage.getItem("user")) || null },
  reducers: {
    login(state, actions) {
      const { token, user } = actions.payload;
      localStorage.setItem("user", JSON.stringify({ token, id: user.id }));
      localStorage.setItem(
        "userInfo",
        JSON.stringify({ name: user.name, email: user.email })
      );
      state.isLoggedIn = { token, id: user.id };
    },
    logout(state) {
      localStorage.removeItem("user");
      localStorage.removeItem("userInfo");
      localStorage.removeItem("words");
      state.isLoggedIn = null;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
