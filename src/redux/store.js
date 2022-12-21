// First, create store and Prodive Store in index js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlices';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;