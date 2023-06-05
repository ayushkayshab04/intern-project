import { configureStore } from "@reduxjs/toolkit";
import pageSlice from "./PageSlice";

const store = configureStore({
  reducer: {
    page: pageSlice.reducer,
  },
});

export default store;
