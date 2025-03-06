import { createSlice } from "@reduxjs/toolkit";

interface IContacts {
  telNumber: number;
  mail: string;
  telegram: string;
  instagram: string;
}

const initialState: IContacts = {
  telNumber: 0,
  mail: "",
  telegram: "",
  instagram: "",
};

const contactSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  reducers: {},
});

export const {} = contactSlice.actions;
export default contactSlice.reducer;
