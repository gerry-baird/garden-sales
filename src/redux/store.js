import { configureStore } from "@reduxjs/toolkit";

import warrantyReducer from "./WarrantySlice";

export default configureStore({
  reducer: {
    installation: warrantyReducer,
  },
});
