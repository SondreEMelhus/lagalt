import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {},
  status: 'idle',
};

/**
 * Redux slice used to manage the state of a projects statusboard status messages
 */
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