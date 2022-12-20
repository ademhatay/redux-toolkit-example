import {createAction, createReducer} from '@reduxjs/toolkit';


export const increment = createAction('increment/counter');
export const decrement = createAction('decrement/counter');
export const increaseAmount = createAction('increaseByAmount/counter');

const initialState = {
	value: 0
}

// reducer
export const counterSlices = createReducer(initialState, builder => {
	builder.addCase(increment, (state, action) => {
		state.value++;
	});
	builder.addCase(decrement, (state, action) => {
		state.value--;
	});
	builder.addCase(increaseAmount, (state, action) => {
		state.value += action.payload
	});
})


