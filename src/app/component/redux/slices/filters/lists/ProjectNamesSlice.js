import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
  status: 'idle',
};

export const projectNamesSlice = createSlice({
  name: 'projectNames',
  initialState,
  reducers: {
    updateProjectNames: (state, action) => {
      state.value = action.payload;
    },
    resetProjectNames: (state) => {
      state.value = [];
    }
  },
});

export const { updateProjectNames, resetProjectNames } = projectNamesSlice.actions;


export const selectProjectNames = (state) => state.projectNames.value;


export default projectNamesSlice.reducer;