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
        id: 1,
        timestamp: '19:45',
        text: 'Halle dette er testing!',
        username: 'PerGynt'
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
        id: 1,
        timestamp: '19:45',
        text: 'Halle dette er testing!',
        username: 'PerGynt'
      }
    ],
    skills: [
      'Kamera',
      'Klipping',
      'Skuespiller'
    ],
    keywords: [
      'Lidenskapelig'
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
        id: 1,
        timestamp: '19:45',
        text: 'Halle dette er testing!',
        username: 'PerGynt'
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
        id: 1,
        timestamp: '19:45',
        text: 'Halle dette er testing!',
        username: 'PerGynt'
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
  {
    id: 70,
    title: 'Skrive kode',
    industry: 'Webutvikling',
    status: 'Ferdig',
    description: 'Vi vil lage en sprituell oppfølger til The Room',
    chat: [
      {
        id: 1,
        timestamp: '19:45',
        text: 'Halle dette er testing!',
        username: 'PerGynt'
      }
    ],
    skills: [
      'C++',
      'React',
      'Bootstrap'
    ],
    keywords: [
      'Lidenskapelig',
      'Erfaren'
    ]
  },
  {
    id: 71,
    title: 'Lage film',
    industry: 'Film',
    status: 'Ferdig',
    description: 'Vi vil lage en sprituell oppfølger til The Room',
    chat: [
      {
        id: 1,
        timestamp: '19:45',
        text: 'Halle dette er testing!',
        username: 'PerGynt'
      }
    ],
    skills: [
      'Kamera',
      'Klipping',
      'Skuespiller',
    ],
    keywords: [
      'Lidenskapelig',
      'Erfaren'
    ]
  },
  {
    id: 72,
    title: 'Svett gaming',
    industry: 'Spillutvikling',
    status: 'Ferdig',
    description: 'Vi vil lage en sprituell oppfølger til The Room',
    chat: [
      {
        id: 1,
        timestamp: '19:45',
        text: 'Halle dette er testing!',
        username: 'PerGynt'
      }
    ],
    skills: [
      'C++',
      'Unity',
      'Unreal'
    ],
    keywords: [
      'Nybegynner'
    ]
  }
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