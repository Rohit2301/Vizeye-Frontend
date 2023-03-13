import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  url: "",
};

const uploadedImage = createSlice({
  name: "uploadedImage",
  initialState,
  reducers: {
    updateImageUrl: (state, action) => {
      state.url = action.payload;
    },
  },
});

export const { updateImageUrl } = uploadedImage.actions;

export default uploadedImage.reducer;
