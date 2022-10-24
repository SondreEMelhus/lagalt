import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
  status: 'idle',
};

/**
 * Redux slice used to manage the state of a projects keywords
 */
export const projectKeywordsSlice = createSlice({
  name: 'projectKeywords',
  initialState,
  reducers: {
    addKeyword: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    addKeywords: (state, action) => {
      state.value = [];
      state.value = action.payload;
    },
    removeKeyword: (state, action) => {
      const newState = []
      state.value.forEach(value => value !== action.payload ? newState.push(value): null);
      state.value = newState;
    },
    removeAllKeywords: (state) => {
      state.value = [];
    }
  },
});

export const { addKeyword, addKeywords, removeKeyword, removeAllKeywords } = projectKeywordsSlice.actions;


export const selectProjectKeywords = (state) => state.projectKeywords.value;


export default projectKeywordsSlice.reducer;