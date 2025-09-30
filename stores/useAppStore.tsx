// src/store/configureStore.ts
import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "./slices/sessionSlice";
import tripsReducer from "./slices/tripsSlice";
import { useAppStore } from "./stores/AppStore";


export const store = configureStore({
  reducer: {
    session: sessionReducer,
    trips: tripsReducer,
  },
  devTools: import.meta.env.MODE === "development",
});

// ✅ Inferred types for the whole app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
