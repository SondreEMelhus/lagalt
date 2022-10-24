import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
  status: 'idle',
};

/**
 * Redux slice used to manage the state of a projects skills
 */
export const projectSkillsSlice = createSlice({
  name: 'projectSkills',
  initialState,
  reducers: {
    addSkill: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    addSkills: (state, action) => {
      state.value = [];
      state.value = action.payload;
    },
    removeSkill: (state, action) => {
      const newState = []
      state.value.forEach(value => value !== action.payload ? newState.push(value): null);
      state.value = newState;
    },
    removeAllSkills: (state) => {
      state.value = [];
    }
  },
});

export const { addSkill, addSkills, removeSkill, removeAllSkills } = projectSkillsSlice.actions;


export const selectProjectSkills = (state) => state.projectSkills.value;


export default projectSkillsSlice.reducer;