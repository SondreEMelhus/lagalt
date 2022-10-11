import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'Industri',
  status: 'idle',
};

export const industrySlice = createSlice({
  name: 'industry',
  initialState,
  reducers: {
    update: (state, action) => {
      state.value = action.payload;
    },
    reset: (state) => {
      state.value = 'Industri';
    }
  },
});

export const { update, remove } = industrySlice.actions;


export const selectIndustry = (state) => state.industry.value;


export default industrySlice.reducer;