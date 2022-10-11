import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [
    'Electric',
    'Pop',
    'Blues'
],
  status: 'idle',
};

export const keywordsSlice = createSlice({
  name: 'keywords',
  initialState,
  reducers: {
    update: (state, action) => {
      state.value = action.payload;
    },
    reset: (state) => {
      state.value = [];
    }
  },
});

export const { update, remove } = keywordsSlice.actions;


export const selectKeywords = (state) => state.keywords.value;


export default keywordsSlice.reducer;