import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'Nøkkelord',
  status: 'idle',
};

export const keywordSlice = createSlice({
  name: 'keyword',
  initialState,
  reducers: {
    updateKeyword: (state, action) => {
      state.value = action.payload;
    },
    resetKeyword: (state) => {
      state.value = initialState.value;
    }
  },
});

export const { updateKeyword, resetKeyword } = keywordSlice.actions;


export const selectKeyword = (state) => state.keyword.value;


export default keywordSlice.reducer;