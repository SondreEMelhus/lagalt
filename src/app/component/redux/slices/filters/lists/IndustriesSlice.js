import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [
    {
      id: 1,
      title: "Musikk",
      projects: [
        3,
        5
      ],
      keywords: [
        "Pop",
        "Indie",
        "Rock",
        "Musikal",
        "Musikkvideo",
        "Metall"
      ],
      skills: [
        "Bass",
        "Piano",
        "Produsering",
        "Sanger",
        "Gitar",
        "Fiolin",
        "Trommer"
      ]
    },
    {
      id: 2,
      title: "Film",
      projects: [
        4,
        7
      ],
      keywords: [
        "Skrekk",
        "Action",
        "Musikal",
        "Komedie",
        "Musikkvideo",
        "Reklame",
        "Mobilapp"
      ],
      skills: [
        "Manus",
        "Redigering",
        "Filming",
        "Produsering",
        "Sminke",
        "Skuespill",
        "Regissering",
        "Lyddesign"
      ]
    },
    {
      id: 3,
      title: "Spillutvikling",
      projects: [
        1
      ],
      keywords: [
        "Mutliplayer",
        "Sport",
        "Adventure",
        "Puzzle",
        "Skyting",
        "Open world",
        "RPG",
        "Singleplayer",
        "Mobilapp"
      ],
      skills: [
        "Grafikk",
        "Java",
        "Manus",
        "Git",
        "UX",
        "Database",
        ".Net",
        "Lyddesign",
        "Testing"
      ]
    },
    {
      id: 4,
      title: "Webutvikling",
      projects: [
        2,
        6
      ],
      keywords: [
        "Sosiale medier",
        "Blogg",
        "Nettbutikk",
        "Hjemmeside"
      ],
      skills: [
        "CSS",
        "UX",
        "Git",
        "Vue",
        "Database",
        "HTML",
        "React",
        "Angular",
        "Testing"
      ]
    }
  ],
  status: 'idle',
};

export const industriesSlice = createSlice({
  name: 'industries',
  initialState,
  reducers: {
    updateIndustries: (state, action) => {
      state.value = action.payload;
    },
    resetIndustrier: (state) => {
      state.value = [];
    }
  },
});

export const { updateIndustries, resetIndustrier } = industriesSlice.actions;


export const selectIndustries = (state) => state.industries.value;


export default industriesSlice.reducer;