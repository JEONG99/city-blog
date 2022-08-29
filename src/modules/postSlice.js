import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPost = createAsyncThunk(
  "GET_POST",
  async ({ city, postId }) => {
    const response = await axios.get(`http://localhost:8000/${city}/${postId}`);
    return response.data;
  }
);
export const removePost = createAsyncThunk(
  "REMOVE_POST",
  async ({ city, postId }) => {
    const response = await axios.delete(
      `http://localhost:8000/${city}/${postId}`
    );
    return response.data;
  }
);

const initialState = {
  id: null,
  name: "",
  description: "",
  tags: [],
  image: "",
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    unloadPost: (state) => initialState,
  },
  extraReducers: {
    [getPost.fulfilled]: (
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
    [getPost.rejected]: (_, { payload }) => {
      console.log("포스트 가져오기 실패 : ", payload);
    },
    [removePost.rejected]: (_, { payload }) => {
      console.log("포스트 삭제 실패 : ", payload);
    },
  },
});

export const { unloadPost } = postSlice.actions;
export default postSlice.reducer;
