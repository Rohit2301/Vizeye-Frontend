import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Fn } from "../firebase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const authOnCall = createAsyncThunk("auth/FnCall", async () => {
  const data = await Fn();
  return data;
  //   console.log("e");
});

export const authSlice = createSlice({
  name: "auth",
  initialState: { auth: undefined },
  reducers: {
    updateAuth: (state, action) => {
      state.auth = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(authOnCall.pending, (state) => {
        console.log("pending");
        state.auth = undefined;
      })
      .addCase(authOnCall.fulfilled, (state, action) => {
        console.log("fulllfiled", action.payload);
        state.auth = getAuth(initializeApp(action.payload));
      });
  },
});

export const { updateAuth } = authSlice.actions;
export default authSlice.reducer;
