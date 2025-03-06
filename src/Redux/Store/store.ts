import { configureStore } from "@reduxjs/toolkit";
import mainInfoSlice from "../Slices/mainInfoSlice";

export default configureStore({
  reducer: {
    mainInfoStore: mainInfoSlice,
  },
});
