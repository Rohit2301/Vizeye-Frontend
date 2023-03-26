import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./redux/loader";
import uploadedImage from "./redux/uploadedImage";
import userReducer from "./redux/userSlice";

const store = configureStore({
  reducer: {
    uploadedImage: uploadedImage,
    user: userReducer,
    loader: loaderReducer,
  },
});

export default store;
