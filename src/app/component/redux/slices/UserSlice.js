import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {},
  status: 'idle',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.value = action.payload;
    },
    resetUser: (state) => {
      state.value = {};
    }
  },
});

export const { updateUser, resetUser } = userSlice.actions;


export const selectUser = (state) => state.user.value;


export default userSlice.reducer;