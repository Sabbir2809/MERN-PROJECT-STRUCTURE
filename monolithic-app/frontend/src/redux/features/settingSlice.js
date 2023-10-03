import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  // 1. state
  name: "",
  initialState: {},

  // reducer function(action)
  reducers: {},
});

export const { showLoader, hideLoader } = Slice.actions;
export default Slice.reducer;
