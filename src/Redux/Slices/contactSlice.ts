import { createSlice } from "@reduxjs/toolkit";

interface IContacts {
  isActiveContacts: boolean;
  telNumber: number;
  mail: string;
  telegram: string;
  instagram: string;
}

const initialState: IContacts = {
  isActiveContacts: false,
  telNumber: 0,
  mail: "",
  telegram: "",
  instagram: "",
};

const contactSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  reducers: {
    setActive: (state, action) => {
      state.isActiveContacts = action.payload;
    },
  },
});

export const { setActive } = contactSlice.actions;
export default contactSlice.reducer;
