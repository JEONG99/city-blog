import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postsReducer from "./modules/postsSlice";
import writeReducer from "./modules/writeSlice";

const rootReducer = combineReducers({
  posts: postsReducer,
  write: writeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
