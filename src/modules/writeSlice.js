import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const writePost = createAsyncThunk(
  "WRITE_POST",
  async ({ city, newPost }) => {
    const response = await axios.post(`http://localhost:8000/${city}`, newPost);
    return response.data;
  }
);

export const updatePost = createAsyncThunk(
  "UPDATE_POST",
  async ({ city, originalPostId, newPost }) => {
    const response = await axios.put(
      `http://localhost:8000/${city}/${originalPostId}`,
      newPost
    );
    return { post: { ...newPost, id: originalPostId }, response };
  }
);

const initialState = {
  id: null,
  name: "",
  description: "",
  image: "",
  tags: [],
  post: null,
  postError: null,
};

const writeSlice = createSlice({
  name: "write",
  initialState,
  reducers: {
    initialize: (state) => initialState,
    changeField: (state, { payload: { key, value } }) => {
      return {
        ...state,
        [key]: value,
      };
    },
    setOriginalPost: (
      state,
      { payload: { id, name, description, tags, image } }
    ) => {
      return {
        ...state,
        id,
        name,
        description,
        tags,
        image,
      };
    },
  },
  extraReducers: {
    [writePost.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        post: payload,
      };
    },
    [writePost.rejected]: (state, { payload }) => {
      return {
        ...state,
        postError: payload,
      };
    },
    [updatePost.fulfilled]: (state, { payload: { post } }) => {
      return {
        ...state,
        post,
      };
    },
    [updatePost.rejected]: (state, { payload }) => {
      return {
        ...state,
        postError: payload,
      };
    },
  },
});

export const { initialize, changeField, setOriginalPost } = writeSlice.actions;
export default writeSlice.reducer;
