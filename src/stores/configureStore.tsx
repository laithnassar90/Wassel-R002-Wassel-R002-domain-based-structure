import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slices/uiSlice";
import tripsReducer from "./slices/tripsSlice"; // your existing trips slice

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    trips: tripsReducer,
  },
  devTools: import.meta.env.MODE === "development",
});

// ✅ Types for typed hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
