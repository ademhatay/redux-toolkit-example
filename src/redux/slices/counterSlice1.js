import {createAction, createReducer} from '@reduxjs/toolkit';


export const increment = createAction('increment/counter');
export const decrement = createAction('decrement/counter');
export const increaseAmount = createAction('increaseByAmount/counter');

const initialState = {
	value: 0
}

// reducer
//export const counterSlices = createReducer(initialState, builder => {
//	builder.addCase(increment, (state, action) => {
//		state.value++;
//	});
//	builder.addCase(decrement, (state, action) => {
//		state.value--;
//	});
//	builder.addCase(increaseAmount, (state, action) => {
//		state.value += action.payload
//	});
//})

// ! Map Notation

export const counterSlices = createReducer(initialState, {
	 [increment] : (state, action) => {
	 	state.value++;
	 },
	 [decrement] : (state, action) => {
	 	state.value--;
	 },
	 [increaseAmount] : (state, action) => {
	 	state.value += action.payload
	 },
})


