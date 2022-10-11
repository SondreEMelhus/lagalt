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
  {
    id: 2,
    name: 'The Room 2',
    industry: 'Film',
    skills: [
      {
        id: 1,
        skill: 'Kamera'
      },
      {
        id: 2,
        skill: 'Klipping'
      },
      {
        id: 3,
        skill: 'Skuespiller'
      }
    ],
    keywords: [
      {
        id: 1,
        keyword: 'Lidenskapelig'
      },
      {
        id: 2,
        keyword: 'Erfaren'
      }
    ]
  },
  {
    id: 3,
    name: 'Bygge Lagalt klone',
    industry: 'Webutvikling',
    skills: [
      {
        id: 1,
        skill: 'Java'
      },
      {
        id: 2,
        skill: 'React'
      },
      {
        id: 3,
        skill: 'Heroku'
      },
      {
        id: 4,
        skill: 'Spring boot'
      },
      {
        id: 5,
        skill: 'Hibernate'
      },
      {
        id: 6,
        skill: 'Redux'
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
      },
      {
        id: 3,
        keyword: 'Front-end'
      },
      {
        id: 4,
        keyword: 'Back-end'
      }
    ]
  },
  {
    id: 4,
    name: 'Mixtape',
    industry: 'Musikk',
    skills: [
      {
        id: 1,
        skill: 'Soundtrap'
      },
      {
        id: 2,
        skill: 'Mixer'
      },
      {
        id: 3,
        skill: 'Beat maker'
      }
    ],
    keywords: [
      {
        id: 1,
        keyword: 'Musikalsk'
      },
      {
        id: 2,
        keyword: 'Drop-the-beat'
      }
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