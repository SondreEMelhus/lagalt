import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {},
  status: 'idle',
};

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