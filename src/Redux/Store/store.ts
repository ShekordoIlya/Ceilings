import { configureStore } from "@reduxjs/toolkit";
import mainInfoSlice from "../Slices/mainInfoSlice";
import contactSlice from "../Slices/contactSlice";
import lampSlice from "../Slices/lampSlice";

export default configureStore({
  reducer: {
    mainInfoStore: mainInfoSlice,
    contactStore: contactSlice,
    lampStore: lampSlice,
  },
});
