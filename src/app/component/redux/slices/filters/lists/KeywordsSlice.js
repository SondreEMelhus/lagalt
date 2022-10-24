import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
  status: 'idle',
};

/**
 * Redux slice used to manage the state of all keywords
 */
export const keywordsSlice = createSlice({
  name: 'keywords',
  initialState,
  reducers: {
    updateKeywords: (state, action) => {
      state.value = action.payload;
    },
    resetKeywords: (state) => {
      state.value = [];
    }
  },
});

export const { updateKeywords, resetKeywords } = keywordsSlice.actions;


export const selectKeywords = (state) => state.keywords.value;


export default keywordsSlice.reducer;