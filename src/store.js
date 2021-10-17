import { configureStore } from "@reduxjs/toolkit";
import githubSlice from "./slices/githubSlice";

export default configureStore({
  reducer: {
    github: githubSlice,
  },
});
