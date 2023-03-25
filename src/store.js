import { configureStore } from "@reduxjs/toolkit";
import uploadedImage from "./redux/uploadedImage/uploadedImage";
import userReducer from "./redux/userSlice";

const store = configureStore({
  reducer: {
    uploadedImage: uploadedImage,
    user: userReducer,
  },
});

export default store;
