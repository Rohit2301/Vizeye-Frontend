import { createSlice } from "@reduxjs/toolkit";

export const onNextSlice = createSlice({
  name: "onNext",
  initialState: { url: "/" },
  reducers: {
    updateOnNext: (state, action) => {
      if (action.payload) state.url = action.payload;
    },
  },
});

export const { updateOnNext } = onNextSlice.actions;
export default onNextSlice.reducer;
