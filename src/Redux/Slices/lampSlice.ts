import { createSlice } from "@reduxjs/toolkit";

interface ILamp {
  isActiveLamp: boolean;
}

const initialState: ILamp = {
  isActiveLamp: false,
};

const lampSlice = createSlice({
  name: "lamp",
  initialState: initialState,
  reducers: {
    setActiveLamp: (state, action) => {
      state.isActiveLamp = action.payload;
    },
  },
});

export const { setActiveLamp } = lampSlice.actions;
export default lampSlice.reducer;
