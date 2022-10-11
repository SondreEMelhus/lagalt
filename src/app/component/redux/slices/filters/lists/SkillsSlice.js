import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [
    'Guitar',
    'Drums',
    'Piano',
    'Singing'
],
  status: 'idle',
};

export const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    update: (state, action) => {
      state.value = action.payload;
    },
    reset: (state) => {
      state.value = [];
    }
  },
});

export const { update, remove } = skillsSlice.actions;


export const selectSkills = (state) => state.skills.value;


export default skillsSlice.reducer;