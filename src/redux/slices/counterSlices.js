import {createAction, createReducer} from '@reduxjs/toolkit';


export const increment = createAction('increment/counter');
export const decrement = createAction('decrement/counter');


const initialState = {
	value: 0
}

// reducer
export const counterSlices = createReducer(initialState, builder => {
	builder.addCase(increment, (state, action) => {
		state++;
	});
	builder.addCase(decrement, (state, action) => {
		state--;
	});
})


