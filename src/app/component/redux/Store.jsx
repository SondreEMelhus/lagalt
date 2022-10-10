import { configureStore } from '@reduxjs/toolkit';

import filterReducer from './slices/FilteredSlice';
import userReducer from './slices/UserSlice';
import projectsReducer from './slices/ProjectsSlice';
import externalUsersReducer from './slices/ExternalUsers';


export const store = configureStore({
  reducer: {
    filter: filterReducer,
    user: userReducer,
    projects: projectsReducer,
    externalUsers: externalUsersReducer
  },
});