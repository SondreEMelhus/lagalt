import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {},
  status: 'idle',
};

export const skillsAndKeywordsSlice = createSlice({
  name: 'skillsAndKeywords',
  initialState,
  reducers: {
    updateSkillsAndKeywords: (state, action) => {
      state.value = action.payload;
    },
    resetSkillsAndKeywords: (state) => {
        state.value = [];
    }
  },
});

export const { updateSkillsAndKeywords, resetSkillsAndKeywordsd } = skillsAndKeywordsSlice.actions;


export const selectSkillsAndKeywords = (state) => state.skillsAndKeywords.value;


export default skillsAndKeywordsSlice.reducer;