import { createSlice } from '@reduxjs/toolkit';

//TODO: Bytt ut dummy data
const initialState = {
  value: [{
    id: 1,
    name: 'Bygge spillmotor',
    industry: 'Spillutvikling',
    skills: [
      'C++',
      'Unity',
      'Shader programmering'
    ],
    keywords: [
      'Erfaren',
      'Full-stack'
    ]
  },
  {
    id: 2,
    name: 'The Room 2',
    industry: 'Film',
    skills: [
      'Kamera',
      'Klipping',
      'Skuespiller'
    ],
    keywords: [
      'Lidenskapelig',
      'Erfaren'
    ]
  },
  {
    id: 3,
    name: 'Bygge Lagalt klone',
    industry: 'Webutvikling',
    skills: [
      'Java',
      'React',
      'Heroku',
      'Spring boot',
      'Hibernate',
      'Redux',
    ],
    keywords: [
      'Erfaren',
      'Full-stack',
      'Front-end',
      'Back-end'
    ]
  },
  {
    id: 4,
    name: 'Mixtape',
    industry: 'Musikk',
    skills: [
      'Soundtrap',
      'Mixer',
      'Beat maker'
    ],
    keywords: [
      'Musikalsk',
      'Drop-the-beat'
    ]
  },
],
  status: 'idle',
};

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    add: (state, action) => {
        state.value = [...state.value, action.payload];
    },
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