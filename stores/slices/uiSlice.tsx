import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  currentPage: string;
  sidebarOpen: boolean;
}

const initialState: UIState = {
  currentPage: "dashboard",
  sidebarOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<string>) {
      state.currentPage = action.payload;
    },
    setSidebarOpen(state, action: PayloadAction<boolean>) {
      state.sidebarOpen = action.payload;
    },
  },
});

export const { setCurrentPage, setSidebarOpen } = uiSlice.actions;
export default uiSlice.reducer;
