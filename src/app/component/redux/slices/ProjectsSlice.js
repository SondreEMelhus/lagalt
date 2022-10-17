import { createSlice } from '@reduxjs/toolkit';

//TODO: Bytt ut dummy data
const initialState = {
  value: [],
  status: 'idle',
};

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    add: (state, action) => {
        state.value = [...state.value, action.payload];
    },
    updateProjects: (state, action) => {
      state.value = []
      state.value = action.payload;
    },
    removeProjects: (state, action) => {
      let newState = state.value.forEach(state.value !== action.payload).newState.push();
      state.value = newState;
    }
  },
});

export const { add, updateProjects, removeProjects } = projectsSlice.actions;


export const selectProjects = (state) => state.projects.value;


export default projectsSlice.reducer;