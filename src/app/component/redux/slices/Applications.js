import { createSlice } from '@reduxjs/toolkit';

//TODO: Bytt ut dummy data
const initialState = {
  value: [],
  status: 'idle',
};

/**
 * Redux slice used to manage the state of multiple applications
 */
export const applicationsSlice = createSlice({
  name: 'applications',
  initialState,
  reducers: {
    updateApplications: (state, action) => {
        state.value = action.payload
    },
    resetApplications: (state) => {
      state.value = []
    },
  },
});

export const { updateApplications, resetApplications } = applicationsSlice.actions;


export const selectApplications = (state) => state.applications.value;


export default applicationsSlice.reducer;