import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
  status: 'idle',
};

/**
 * Redux slice used to manage the state of all skills
 */
export const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    updateSkills: (state, action) => {
      state.value = action.payload;
    },
    resetSkills: (state) => {
      state.value = [];
    }
  },
});

export const { updateSkills, resetSkills } = skillsSlice.actions;


export const selectSkills = (state) => state.skills.value;


export default skillsSlice.reducer;