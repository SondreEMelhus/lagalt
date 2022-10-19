import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {},
  status: 'idle',
};

export const industrySlice = createSlice({
  name: 'industry',
  initialState,
  reducers: {
    updateIndustry: (state, action) => {
      state.value = action.payload;
    },
    resetIndustry: (state) => {
      state.value = initialState.value;
    }
  },
});

export const { updateIndustry, resetIndustry } = industrySlice.actions;


export const selectIndustry = (state) => state.industry.value;


export default industrySlice.reducer;