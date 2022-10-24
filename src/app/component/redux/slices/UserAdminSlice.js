import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {},
  status: 'idle',
};

/**
 * Redux slice used to manage the state of a user administrator
 */
export const userAdminSlice = createSlice({
  name: 'userAdmin',
  initialState,
  reducers: {
    updateAdminStatus: (state, action) => {
      state.value = action.payload;
    }
  },
});

export const { updateAdminStatus } = userAdminSlice.actions;


export const selectUserAdmin = (state) => state.userAdmin.value;


export default userAdminSlice.reducer;
