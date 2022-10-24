import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {},
  status: 'idle',
};

/**
 * Redux slice used to manage the state of a user
 */
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.value = action.payload;
    },
    resetUser: (state) => {
      state.value = {};
    },
    updatePortfolio: (state, action) => {
      state.value.portfolio = action.payload;
    },
    updateDescription: (state, action) => {
      state.value.description = action.payload;
    },
    updateSkillsOfCurrentUser: (state, action) => {
      state.value.description = action.payload;
    }
  },
});

export const { updateUser, resetUser, updatePortfolio, updateDescription, updateSkillsOfCurrentUser } = userSlice.actions;


export const selectUser = (state) => state.user.value;


export default userSlice.reducer;
