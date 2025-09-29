// src/store/configureStore.js
import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from './slices/sessionSlice';
import tripsReducer from './slices/tripsSlice';

const store = configureStore({
  reducer: {
    session: sessionReducer,
    trips: tripsReducer,
  },
  devTools: import.meta.env.MODE === 'development',
});

export default store;
