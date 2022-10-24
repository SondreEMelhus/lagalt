import { createSlice } from '@reduxjs/toolkit';

//TODO: Bytt ut dummy data
const initialState = {
  value: {},
  status: 'idle',
};

/**
 * Redux slice used to manage the state of a application
 */
export const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    updateApplication: (state, action) => {
      state.value = action.payload;
    },
    resetApplication: (state) => {
        state.value = {}
    }
  },
});

export const { updateApplication, resetApplication } = applicationSlice.actions;


export const selectApplication = (state) => state.application.value;


export default applicationSlice.reducer;