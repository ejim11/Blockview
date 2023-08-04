import { createSlice } from "@reduxjs/toolkit";

const librarySlice = createSlice({
  name: "library",
  initialState: {
    navIndex: undefined,
    subItem: "",
    libraryVisible: false,
  },
  reducers: {
    setNavIndex(state: any, action: { payload: number | undefined }):void {
      state.navIndex = action.payload;

      localStorage.setItem("NavOpenIndex", JSON.stringify(action.payload));
    },
    setSubItem(state: any, action: { payload: string | undefined }): void {
      state.subItem = action.payload;
      localStorage.setItem("item", action.payload ? action.payload : "");
    },
    displayLibrary(state: any, action: {payload: boolean}):void{
      state.libraryVisible=action.payload
    },
    hideLibrary(state: any, action: {payload: boolean}):void{
      state.libraryVisible = action.payload
    }
  },
});

export const libraryAction = librarySlice.actions;

export default librarySlice.reducer;
