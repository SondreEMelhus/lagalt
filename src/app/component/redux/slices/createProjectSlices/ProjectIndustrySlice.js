import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {},
  status: 'idle',
};

export const projectIndustry = createSlice({
  name: 'projectIndustry',
  initialState,
  reducers: {
    setIndustry: (state, action) => {
      state.value = action.payload;
    },
    resetIndustry: (state) => {
      state.value = initialState.value;
    },
    addIndustryKeyword: (state, action) => {
      state.value.keywords = [...state.value.keywords, action.payload];
    },
    removeIndustryKeyword: (state, action) => {
      const newState = []
      state.value.keywords.forEach(keyword => keyword !== action.payload ? newState.push(keyword): null);
      state.value.keywords = newState;
    },
    addIndustrySkill: (state, action) => {
      state.value.skills = [...state.value.skills, action.payload];
    },
    removeIndustrySkill: (state, action) => {
      const newState = []
      state.value.skills.forEach(skill=> skill !== action.payload ? newState.push(skill): null);
      state.value.skills = newState;
    },
  },
});

export const { setIndustry, resetIndustry, addIndustryKeyword, removeIndustryKeyword, addIndustrySkill, removeIndustrySkill } = projectIndustry.actions;


export const selectProjectIndustry = (state) => state.projectIndustry.value;


export default projectIndustry.reducer;