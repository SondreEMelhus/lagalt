import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {},
  status: 'idle',
};

/**
 * Redux slice used to manage the state of a projects industry during the project creator process
 */
export const CreateIndustrySlice = createSlice({
  name: 'CreateIndustry',
  initialState,
  reducers: {
    updateCreateIndustry: (state, action) => {
      state.value = action.payload;
    },

  },
});

export const { updateCreateIndustry} = CreateIndustrySlice.actions;


export const selectCreateIndustry = (state) => state.Createindustry.value;


export default CreateIndustrySlice.reducer;