import { configureStore } from "@reduxjs/toolkit";
import ceilingsTabsSlice from "../ceilingsTabsSlice";

export default configureStore({
  reducer: {
    ceilingsTabsStore: ceilingsTabsSlice,
  },
});
