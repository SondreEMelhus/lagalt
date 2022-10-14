import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {
    id: 1,
    title: 'Industri',
    projects: [],
    keywords: [
      "Pop",
      "Indie",
      "Rock",
      "Musikal",
      "Musikkvideo",
      "Metall",
      "Skrekk",
      "Action",
      "Musikal",
      "Komedie",
      "Musikkvideo",
      "Reklame",
      "Mobilapp",
      "Mutliplayer",
      "Sport",
      "Adventure",
      "Puzzle",
      "Skyting",
      "Open world",
      "RPG",
      "Singleplayer",
      "Mobilapp",
      "Mutliplayer",
      "Sport",
      "Adventure",
      "Puzzle",
      "Skyting",
      "Open world",
      "RPG",
      "Singleplayer",
      "Mobilapp",
      "Sosiale medier",
      "Blogg",
      "Nettbutikk",
      "Hjemmeside"
    ],
    skills: [
      "Bass",
      "Piano",
      "Produsering",
      "Sanger",
      "Gitar",
      "Fiolin",
      "Trommer",
      "Manus",
      "Redigering",
      "Filming",
      "Produsering",
      "Sminke",
      "Skuespill",
      "Regissering",
      "Lyddesign",
      "Grafikk",
      "Java",
      "Manus",
      "Git",
      "UX",
      "Database",
      ".Net",
      "Lyddesign",
      "Testing",
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
  },
  status: 'idle',
};

export const industrySlice = createSlice({
  name: 'industry',
  initialState,
  reducers: {
    updateIndustry: (state, action) => {
      state.value = action.payload;
    },
    resetIndustry: (state) => {
      state.value = initialState.value;
    }
  },
});

export const { updateIndustry, resetIndustry } = industrySlice.actions;


export const selectIndustry = (state) => state.industry.value;


export default industrySlice.reducer;