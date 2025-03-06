import { createSlice } from "@reduxjs/toolkit";

interface IMain {
  data: string;
}

const initialState: IMain = {
  data: "",
};

const mainInfoSlice = createSlice({
  name: "main",
  initialState: initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = mainInfoSlice.actions;
export default mainInfoSlice.reducer;
