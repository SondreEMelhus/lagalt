import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {},
  status: 'idle',
};

/**
 * Redux slice used to manage the state of the intial indutry used in filterbox
 */
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