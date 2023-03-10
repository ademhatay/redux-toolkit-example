import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// create action
export const fetchPost = createAsyncThunk(
	'post/list',
	async (payload, {rejectedWithValue, getState, dispatch}) => {
		try {
			const { data } = await axios.get(
				'https://jsonplaceholder.typicode.com/posts'
			);
			return data;
		} catch (error) {
			return error?.response;
		}
	}
);

// Slices

const postSlices = createSlice({
	name: "post",
	initialState: {},
	extraReducers: {
		[fetchPost.pending]: (state, action) => {
			state.loading = true;
		},
		[fetchPost.fulfilled]: (state, action) => {
			state.postsList = action.payload;
			state.loading = false;
		},
		[fetchPost.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
	}
})


export default postSlices.reducer;