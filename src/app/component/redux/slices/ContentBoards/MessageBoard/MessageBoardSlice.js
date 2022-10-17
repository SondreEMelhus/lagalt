import { createSlice } from '@reduxjs/toolkit';

//TODO: Bytt ut dummy data
const initialState = {
  value: [],
  status: 'idle',
};

export const messageBoardSlice = createSlice({
  name: 'messageBoard',
  initialState,
  reducers: {
    updateMessageBoard: (state, action) => {
      state.value = [];
      state.value = action.payload;
    },
    resetMessageBoard: (state) => {
        state.value = [];
    }
  },
});

export const { updateMessageBoard, resetMessageBoard } = messageBoardSlice.actions;


export const selectMessageBoard = (state) => state.messageBoard.value;


export default messageBoardSlice.reducer;