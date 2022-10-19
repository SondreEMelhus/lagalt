import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {},
  status: 'idle',
};

export const initialIndustrySlice = createSlice({
  name: 'initialIndustry',
  initialState,
  reducers: {
    updateInitialIndustry: (state, action) => {
      state.value = action.payload;
    },
    resetInitialIndustry: (state) => {
      state.value = initialState.value;
    }
  },
});

export const { updateInitialIndustry, resetInitialIndustry } = initialIndustrySlice.actions;


export const selectInitialIndustry = (state) => state.initialIndustry.value;


export default initialIndustrySlice.reducer;