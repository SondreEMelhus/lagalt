import { createSlice } from '@reduxjs/toolkit';

//TODO: Bytt ut dummy data
const initialState = {
  value: {},
  status: 'idle',
};

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    },
    updateChatLog: (state, action) => {
      state.value.chat = action.payload;
    }
  },
});

export const { set, updateChatLog } = projectSlice.actions;


export const selectProject = (state) => state.project.value;


export default projectSlice.reducer;