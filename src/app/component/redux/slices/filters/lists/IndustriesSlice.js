import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
  status: 'idle',
};

/**
 * Redux slice used to manage the state of all industries
 */
export const industriesSlice = createSlice({
  name: 'industries',
  initialState,
  reducers: {
    updateIndustries: (state, action) => {
      state.value = []
      state.value = action.payload;
    },
    resetIndustrier: (state) => {
      state.value = [];
    }
  },
});

export const { updateIndustries, resetIndustrier } = industriesSlice.actions;


export const selectIndustries = (state) => state.industries.value;


export default industriesSlice.reducer;