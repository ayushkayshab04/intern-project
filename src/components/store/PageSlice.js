import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "page",
  initialState: {
    pageNumber: 1,
    skip: 0,
  },
  reducers: {
    setPage(state, action) {
      console.log("==========", action.payload);
      state.pageNumber = action.payload;
      state.skip = 8 * (action.payload - 1);
    },
  },
});

export const pageActions = pageSlice.actions;

export default pageSlice;
