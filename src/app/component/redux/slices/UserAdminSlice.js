import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {},
  status: 'idle',
};

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
