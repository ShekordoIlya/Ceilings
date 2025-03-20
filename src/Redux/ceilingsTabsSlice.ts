import { createSlice } from "@reduxjs/toolkit";
import { dataCeilings } from "../../data.js";

interface ICeilings {
  image: string;
  description: string;
  alt: string;
  header: string;
}

const initialState: ICeilings = {
  image: dataCeilings[0].image,
  description: dataCeilings[0].description,
  alt: dataCeilings[0].alt,
  header: dataCeilings[0].header,
};

const ceilingsTabsSlice = createSlice({
  name: "ceilings",
  initialState: initialState,
  reducers: {
    setImage: (state, action) => {
      state.image = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setAlt: (state, action) => {
      state.alt = action.payload;
    },
    setHeader: (state, action) => {
      state.header = action.payload;
    },
  },
});

export const { setImage, setDescription, setAlt, setHeader } =
  ceilingsTabsSlice.actions;

export default ceilingsTabsSlice.reducer;
