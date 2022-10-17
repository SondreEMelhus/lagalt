import { createSlice } from '@reduxjs/toolkit';

//TODO: Bytt ut dummy data
const initialState = {
  value: [],
  status: 'idle',
};

export const statusBoardSlice = createSlice({
  name: 'statusBoard',
  initialState,
  reducers: {
    updateStatusBoard: (state, action) => {
      state.value = [];
      state.value = action.payload;
    },
    resetStatusBoard: (state) => {
        state.value = [];
    }
  },
});

export const { updateStatusBoard, resetStatusBoard } = statusBoardSlice.actions;


export const selectStatusBoard = (state) => state.statusBoard.value;


export default statusBoardSlice.reducer;