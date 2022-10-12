import { createSlice } from '@reduxjs/toolkit';

//TODO: Bytt ut dummy data
const initialState = {
  value: [{
    id: 1,
    name: 'Bygge spillmotor',
    industry: 'Spillutvikling',
    skills: [
      {
        id: 1,
        skill: 'C++'
      },
      {
        id: 2,
        skill: 'Unity'
      },
      {
        id: 3,
        skill: 'Shader programmering'
      }
    ],
    keywords: [
      {
        id: 1,
        keyword: 'Erfaren'
      },
      {
        id: 2,
        keyword: 'Full-stack'
      }
    ]
  },
],
  status: 'idle',
};

export const projectsSlice = createSlice({
  name: 'adminProject',
  initialState,
  reducers: {
    update: (state, action) => {
      state.value = action.payload;
    },
    remove: (state, action) => {
      let newState = state.value.forEach(state.value !== action.payload).newState.push();
      state.value = newState;
    }
  },
});

export const { search, reset } = projectsSlice.actions;


export const selectProjects = (state) => state.projects.value;


export default projectsSlice.reducer;