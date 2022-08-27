import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const writePost = createAsyncThunk(
  "WRITE_POST",
  async ({ city, newPost }) => {
    const response = await axios.post(`http://localhost:8000/${city}`, newPost);
    return response.data;
  }
);

const initialState = {
  name: "",
  description: "",
  image: "",
  tags: [],
};

const writeSlice = createSlice({
  name: "write",
  initialState,
  reducers: {
    changeField: (state, { payload: { key, value } }) => {
      return {
        ...state,
        [key]: value,
      };
    },
  },
  extraReducers: {
    [writePost.fulfilled]: () => {
      console.log("포스트 등록 성공");
      return initialState;
    },
    [writePost.rejected]: (_, { payload }) => {
      console.log("포스트 등록 실패 : ", payload);
    },
  },
});

export const { changeField } = writeSlice.actions;
export default writeSlice.reducer;
