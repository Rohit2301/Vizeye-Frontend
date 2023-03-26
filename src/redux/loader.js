import { createSlice } from "@reduxjs/toolkit";

export const loaderSlice = createSlice({
  name: "loader",
  initialState: { loading: false },
  reducers: {
    updateLoader: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { updateLoader } = loaderSlice.actions;
export default loaderSlice.reducer;
