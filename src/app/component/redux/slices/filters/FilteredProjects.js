import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
  status: 'idle',
};

export const filteredProjectsSlice = createSlice({
  name: 'filteredProjects',
  initialState,
  reducers: {
    updateFilteredProjects: (state, action) => {
      state.value = action.payload;
    }
  },
});

export const { updateFilteredProjects } = filteredProjectsSlice.actions;


export const selectFilteredProjects = (state) => state.filteredProjects.value;


export default filteredProjectsSlice.reducer;