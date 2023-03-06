import { createSlice } from "@reduxjs/toolkit";

const librarySlice = createSlice({
  name: "library",
  initialState: {
    mainRoute: "home",
    navIndex: undefined,
    subItem: "",
  },
  reducers: {
    setNavIndex(state: any, action: { payload: number | undefined }) {
      state.navIndex = action.payload;

      localStorage.setItem("NavOpenIndex", JSON.stringify(action.payload));
    },
    setSubItem(state: any, action: { payload: string }) {
      state.subItem = action.payload;
      localStorage.setItem("item", action.payload);
    },
    setMainRoute(state: any, action: { payload: string }) {
      state.mainRoute = action.payload;
      localStorage.setItem("mainRoute", action.payload);
    },
  },
});

export const libraryAction = librarySlice.actions;

export default librarySlice.reducer;
