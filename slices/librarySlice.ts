import { createSlice } from "@reduxjs/toolkit";

const librarySlice = createSlice({
  name: "library",
  initialState: {
    navIndex: undefined,
    subItem: "",
  },
  reducers: {
    setNavIndex(state: any, action: { payload: number | undefined }) {
      state.navIndex = action.payload;

      localStorage.setItem("NavOpenIndex", JSON.stringify(action.payload));
    },
    setSubItem(state: any, action: { payload: string | undefined }) {
      state.subItem = action.payload;
      localStorage.setItem("item", action.payload ? action.payload : "");
    },
  },
});

export const libraryAction = librarySlice.actions;

export default librarySlice.reducer;
