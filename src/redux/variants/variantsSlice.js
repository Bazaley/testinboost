import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  variants: [],
};

const variantsSlice = createSlice({
  name: "variants",
  initialState,
  reducers: {
    checked(state, { payload }) {
      state.variants = payload;
    },
  },
});

export const { checked } = variantsSlice.actions;
export const variantReducer = variantsSlice.reducer;
