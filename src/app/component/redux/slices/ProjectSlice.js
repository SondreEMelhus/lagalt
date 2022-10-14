import { createSlice } from '@reduxjs/toolkit';

//TODO: Bytt ut dummy data
const initialState = {
  value: {},
  status: 'idle',
};

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    },
    updateChatLog: (state, action) => {
      state.value.chat = action.payload;
    },
    updateTitle: (state, action) => {
      state.value.title = action.payload;
    },
    updateDescription: (state, action) => {
      state.value.description = action.payload;
    },
    updateStatus: (state, action) => {
      state.value.status = action.payload;
    },
    updateKeywords: (state, action) => {
      state.value.keywords = action.payload;
    },
    updateSkill: (state, action) => {
      state.value.skills = action.payload;
    },
    updateIndustry: (state, action) => {
      state.value.industry = action.payload;
    }
  },
});

export const { set, updateChatLog, updateTitle, updateDescription, updateStatus, updateKeywords, updateSkill, updateIndustry } = projectSlice.actions;


export const selectProject = (state) => state.project.value;


export default projectSlice.reducer;