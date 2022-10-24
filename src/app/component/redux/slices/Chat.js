import { createSlice } from '@reduxjs/toolkit';

//TODO: Bytt ut dummy data
const initialState = {
  value: [],
  status: 'idle',
};

/**
 * Redux slice used to manage the state of a projects chat
 */
export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage: (state, action) => {
        state.value = [...state.value, action.payload];
    },
    removeMessage: (state, action) => {
        let newState = state.value.forEach(state.value !== action.payload).newState.push();
        state.value = newState;
    },
    updateChat: (state, action) => {
      state.value = []
      state.value = action.payload;
    },
  },
});

export const { addMessage, removeMessage, updateChat, removeProjects } = chatSlice.actions;


export const selectChat = (state) => state.chat.value;


export default chatSlice.reducer;