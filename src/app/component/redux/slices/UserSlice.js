import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {},
  status: 'idle',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    update: (state, action) => {
      state.value = action.payload;
    },
    remove: (state) => {
      state.value = null;
    }
  },
});

export const { update, remove } = userSlice.actions;


export const selectFilter = (state) => state.filter.value;


export default userSlice.reducer;