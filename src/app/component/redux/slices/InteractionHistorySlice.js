import { createSlice } from '@reduxjs/toolkit';

//TODO: Bytt ut dummy data
const initialState = {
  value: [],
  status: 'idle',
};

/**
 * Redux slice used to manage the state of a projects interaciton history
 */
export const interactionHistorySlice = createSlice({
  name: 'interactionHistorySlice',
  initialState,
  reducers: {
    updateInteractionHistory: (state, action) => {
      state.value = action.payload;
    },
    resetInteractionHistory: (state) => {
        state.value = [];
    }
  },
});

export const { updateInteractionHistory, resetInteractionHistory } = interactionHistorySlice.actions;

export const selectInteractionHistory = (state) => state.interactionHistory.value;


export default interactionHistorySlice.reducer;