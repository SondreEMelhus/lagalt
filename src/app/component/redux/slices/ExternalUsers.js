import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
  status: 'idle',
};

export const externalUsersSlice = createSlice({
  name: 'externalUsers',
  initialState,
  reducers: {
    add: (state, action) => {
        state.value = [...state.value, action.payload];
    },
    update: (state, action) => {
      state.value = action.payload;
    },
    remove: (state, action) => {
      let newState = state.value.forEach(state.value !== action.payload).newState.push();
      state.value = newState;
    }
  },
});

export const { search, reset } = externalUsersSlice.actions;


export const selectFilter = (state) => state.filter.value;


export default externalUsersSlice.reducer;