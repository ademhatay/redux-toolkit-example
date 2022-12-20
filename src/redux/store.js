// First, create store and Prodive Store in index js
import { configureStore } from '@reduxjs/toolkit';
import { counterSlices } from './slices/counterSlices';
const store = configureStore({
	reducer: {
		counter: counterSlices,
	}
});

export default store;