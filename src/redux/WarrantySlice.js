import { createSlice } from "@reduxjs/toolkit";

export const warrantySlice = createSlice({
  name: "warranty",
  initialState: [],
  reducers: {
    addWarranty: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addWarranty } = warrantySlice.actions;

export default warrantySlice.reducer;
