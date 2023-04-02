import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./redux/loader";
import uploadedImage from "./redux/uploadedImage";
import userReducer from "./redux/userSlice";
import onNextReducer from "./redux/onNext";

const store = configureStore({
  reducer: {
    uploadedImage: uploadedImage,
    user: userReducer,
    loader: loaderReducer,
    onNext: onNextReducer,
  },
});

export default store;
