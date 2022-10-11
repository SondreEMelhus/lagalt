import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'Nøkkelord',
  status: 'idle',
};

export const keywordSlice = createSlice({
  name: 'keyword',
  initialState,
  reducers: {
    update: (state, action) => {
      state.value = action.payload;
    },
    reset: (state) => {
      state.value = 'Nøkkelord';
    }
  },
});

export const { update, remove } = keywordSlice.actions;


export const selectKeyword = (state) => state.keyword.value;


export default keywordSlice.reducer;