import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postsReducer from "./modules/postsSlice";
import writeReducer from "./modules/writeSlice";
import postReducer from "./modules/postSlice";

const rootReducer = combineReducers({
  post: postReducer,
  posts: postsReducer,
  write: writeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
