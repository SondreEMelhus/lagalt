import { createSlice } from '@reduxjs/toolkit';

//TODO: Bytt ut dummy data
const initialState = {
  value: {},
  status: 'idle',
};

/**
 * Redux slice used to manage the state of a administrator
 */
export const adminSlice = createSlice({
  name: 'adminSlice',
  initialState,
  reducers: {
    updateAdminProject: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateAdminProject } = adminSlice.actions;

export const selectAdmin = (state) => state.admin.value;


export default adminSlice.reducer;