import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'Ferdighet',
  status: 'idle',
};

export const skillSlice = createSlice({
  name: 'skill',
  initialState,
  reducers: {
    updateSkill: (state, action) => {
      state.value = action.payload;
    },
    resetSkill: (state) => {
      state.value = initialState.value;
    }
  },
});

export const { updateSkill, resetSkill } = skillSlice.actions;


export const selectSkill = (state) => state.skill.value;


export default skillSlice.reducer;