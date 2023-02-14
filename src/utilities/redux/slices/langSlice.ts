import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { LanguageProp } from "../../types";

const initialState: LanguageProp = {
  active: "english",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changeLang: (state, action: PayloadAction<string>) => {
      state.active = action.payload;
    },
  },
});

export const { changeLang } = counterSlice.actions;

export default counterSlice.reducer;
