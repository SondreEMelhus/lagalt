import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
  status: 'idle',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    search: (state, action) => {
      state.value = action.payload;
    },
    reset: (state) => {
      state.value = [];
    }
  },
});

export const { search, reset } = filterSlice.actions;


export const selectFilter = (state) => state.filter.value;


export default filterSlice.reducer;