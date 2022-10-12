import { createSlice } from '@reduxjs/toolkit';

//TODO: Bytt ut dummy data
const initialState = {
  value: [],
  status: 'idle',
};

export const myProjectsSlice = createSlice({
  name: 'myProjectsSlice',
  initialState,
  reducers: {
    update: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { update } = myProjectsSlice.actions;

export const selectMyProjects = (state) => state.myProjects.value;


export default myProjectsSlice.reducer;