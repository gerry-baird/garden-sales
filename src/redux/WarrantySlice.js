import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getID = createAsyncThunk("warranty/getID", async (warranty) => {
  const response = await axios.get("http://localhost:8081/warranty");
  console.log("Axios Response");
  console.log(response);
  return response.data;
});

export const warrantySlice = createSlice({
  name: "warranty",
  initialState: {
    warrantyID: null,
    warranty: {},
    count: 0,
  },
  reducers: {
    addWarranty: (state, action) => {
      state.count = state.count + 1;
      state.warranty = action.payload;
    },
  },
  extraReducers: {
    [getID.fulfilled]: (state, action) => {
      console.log("It was fullfilled");
      console.log(action);
      state.warrantyID = action.payload.warrantyID;
    },
  },
});

export const { addWarranty } = warrantySlice.actions;

export default warrantySlice.reducer;
