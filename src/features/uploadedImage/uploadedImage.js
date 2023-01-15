import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  url: "",
};

const uploadedImageSlice = createSlice({
  name: "uploadedImage",
  initialState,
  reducers: {
    updateImageUrl: (state, action) => {
      state.url = action.payload;
    },
  },
});

export const { updateImageUrl } = uploadedImageSlice.actions;

export default uploadedImageSlice.reducer;
