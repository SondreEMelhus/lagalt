import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [
    'Musikk',
    'Film',
    'Spillutvikling',
    'Webutvikling',
    'Alle'
],
  status: 'idle',
};

export const industriesSlice = createSlice({
  name: 'industries',
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

export const { update, remove } = industriesSlice.actions;


export const selectIndustries = (state) => state.industries.value;


export default industriesSlice.reducer;