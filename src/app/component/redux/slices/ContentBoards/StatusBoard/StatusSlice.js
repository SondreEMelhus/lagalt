import { createSlice } from '@reduxjs/toolkit';

//TODO: Bytt ut dummy data
const initialState = {
  value: {},
  status: 'idle',
};

export const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    updateStatus: (state, action) => {
        state.value = action.payload;
    },
    removeStatus: (state, action) => {
        state.value = {};
    },
  },
});

export const { updateStatus, removeStatus } = statusSlice.actions;


export const selectStatus = (state) => state.status.value;


export default statusSlice.reducer;