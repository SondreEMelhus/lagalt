import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {
    name: 'Bla',
    skills: [
      'C++',
      'React',
      'Java'
    ],
    viewHistory: [{
      id: 70,
      title: 'Skrive kode',
      industry: 'Webutvikling',
      status: 'Ferdig',
      description: 'Vi vil lage en sprituell oppfølger til The Room',
      chat: [
        {
          timestamp: '19:45',
          message: 'Halle dette er testing!'
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
      ]
    }
  ],
  contributionHistory: [{
    id: 72,
    title: 'Svett gaming',
    industry: 'Spillutvikling',
    status: 'Ferdig',
    description: 'Vi vil lage en sprituell oppfølger til The Room',
    chat: [
      {
        timestamp: '19:45',
        message: 'Halle dette er testing!'
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
  }]
  },
  status: 'idle',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.value = action.payload;
    },
    remove: (state) => {
      state.value = null;
    }
  },
});

export const { updateUser, remove } = userSlice.actions;


export const selectUser = (state) => state.user.value;


export default userSlice.reducer;