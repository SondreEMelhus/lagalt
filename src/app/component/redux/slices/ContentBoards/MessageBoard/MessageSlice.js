import { createSlice } from '@reduxjs/toolkit';

//TODO: Bytt ut dummy data
const initialState = {
  value: {},
  status: 'idle',
};

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    updateMessage: (state, action) => {
        state.value = action.payload;
    },
    removeMessage: (state, action) => {
        state.value = {};
    },
  },
});

export const { updateMessage, removeMessage } = messageSlice.actions;


export const selectMessage = (state) => state.message.value;


export default messageSlice.reducer;