import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "page",
  initialState: {
    pageNumber: 1,
    skip: 0,
    searchQuery: "",
  },
  reducers: {
    setPage(state, action) {
      state.searchQuery = action.payload.searchQuery;
      state.pageNumber = action.payload.value;
      state.skip = action.payload.page * (action.payload.value - 1);
    },
  },
});

export const pageActions = pageSlice.actions;

export default pageSlice;
