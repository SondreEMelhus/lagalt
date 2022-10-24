import { createSlice } from '@reduxjs/toolkit';

//TODO: Bytt ut dummy data
const initialState = {
  value: [],
  status: 'idle',
};

/**
 * Redux slice used to manage the state of multiple user projects
 */
export const userProjectsSlice = createSlice({
  name: 'userProjects',
  initialState,
  reducers: {
    addUserProject: (state, action) => {
        state.value = [...state.value, action.payload];
    },
    updateUserProjects: (state, action) => {
      state.value = []
      state.value = action.payload;
    },
    removeUserProjects: (state, action) => {
      let newState = state.value.forEach(state.value !== action.payload).newState.push();
      state.value = newState;
    }
  },
});

export const { addUserProject, updateUserProjects, removeUserProjects } = userProjectsSlice.actions;


export const selectUserProjects = (state) => state.userProjects.value;


export default userProjectsSlice.reducer;