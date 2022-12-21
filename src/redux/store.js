// First, create store and Prodive Store in index js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlices';
import postReducer from './slices/postSlices';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    post: postReducer
  },
});

export default store;