import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const signUp = createAsyncThunk(
  "user/signUp",
  async ({ auth, email, password, name }, { rejectWithValue, dispatch }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Signed in
      const user = userCredential.user.email;
      await updateProfile(auth.currentUser, { displayName: name });
      return { email: user, name: name };
      // ...
    } catch (error) {
      return rejectWithValue();
    }
  }
);

export const signIn = createAsyncThunk(
  "user/signIn",
  async ({ auth, email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user.email;
      return user;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

export const logOut = createAsyncThunk(
  "user/logOut",
  async ({ auth }, rejectWithValue) => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
      rejectWithValue();
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    isAuthenticated: false,
    user: null,
    error: null,
  },
  reducers: {
    updateCurrentUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isAuthenticated = true;
        state.error = null;
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(signIn.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.error = null;
        state.loading = false;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(logOut.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.isAuthenticated = false;
        state.error = null;
        state.user = null;
        state.loading = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const { updateCurrentUser } = userSlice.actions;

export default userSlice.reducer;
