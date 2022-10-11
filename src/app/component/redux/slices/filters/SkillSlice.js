import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'Ferdighet',
  status: 'idle',
};

export const skillSlice = createSlice({
  name: 'skill',
  initialState,
  reducers: {
    update: (state, action) => {
      state.value = action.payload;
    },
    reset: (state) => {
      state.value = 'Ferdighet';
    }
  },
});

export const { update, remove } = skillSlice.actions;


export const selectSkill = (state) => state.skill.value;


export default skillSlice.reducer;