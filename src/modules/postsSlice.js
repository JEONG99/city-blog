import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk("GET_POSTS", async ({ city }) => {
  const response = await axios.get(`http://localhost:8000/${city}`);
  return response.data;
});

const initialState = {
  posts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [getPosts.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        posts: payload,
      };
    },
    [getPosts.rejected]: (_, { payload }) => {
      console.log("Get posts failed : ", payload);
    },
  },
});

export default postsSlice.reducer;
