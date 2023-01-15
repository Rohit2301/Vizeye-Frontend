import { configureStore } from "@reduxjs/toolkit";
import uploadedImage from "./features/uploadedImage/uploadedImage";

const store = configureStore({
  reducer: {
    uploadedImage: uploadedImage,
  },
});

export default store;
