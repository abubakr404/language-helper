import { createSlice } from "@reduxjs/toolkit";

const environmentSlice = createSlice({
  name: "environment",
  initialState: { apiUri: "https://languges-helper.onrender.com/api/v1/" },
});

export default environmentSlice;
