import { createSlice } from '@reduxjs/toolkit';

//TODO: Bytt ut dummy data
const initialState = {
  value: [{
    id: 1,
    title: 'Bygge spillmotor',
    industry: 'Spillutvikling',
    status: 'Startet',
    description: 'Vi har lyst til å lage en Unity konkurrent',
    chat: [
      {
        timestamp: '19:45',
        message: 'Halle dette er testing!'
      }
    ],
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
    title: 'The Room 2',
    industry: 'Film',
    status: 'Ferdig',
    description: 'Vi vil lage en sprituell oppfølger til The Room',
    chat: [
      {
        timestamp: '19:45',
        message: 'Halle dette er testing!'
      }
    ],
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
    title: 'Bygge Lagalt klone',
    industry: 'Webutvikling',
    status: 'Stoppet',
    description: 'Vi vil lage en Lagalt klone',
    chat: [
      {
        timestamp: '19:45',
        message: 'Halle dette er testing!'
      }
    ],
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
    title: 'Mixtape',
    industry: 'Musikk',
    status: 'Startet',
    description: 'Vi har lyst til å lage den feteste mix-tapen ever',
    chat: [
      {
        timestamp: '19:45',
        message: 'Halle dette er testing!'
      }
    ],
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