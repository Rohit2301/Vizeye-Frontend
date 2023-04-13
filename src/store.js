import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import loaderReducer from "./redux/loader";
import uploadedImage from "./redux/uploadedImage";
import userReducer from "./redux/userSlice";
import onNextReducer from "./redux/onNext";
import authReducer from "./redux/auth";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});
const store = configureStore({
  reducer: {
    uploadedImage: uploadedImage,
    user: userReducer,
    loader: loaderReducer,
    onNext: onNextReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => customizedMiddleware,
});

export default store;
