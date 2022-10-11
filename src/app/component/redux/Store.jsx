import { configureStore } from '@reduxjs/toolkit';

import filterReducer from './slices/FilteredSlice';
import userReducer from './slices/UserSlice';
import projectsReducer from './slices/ProjectsSlice';
import externalUsersReducer from './slices/ExternalUsers';

//Filter lists
import industriesReducer from './slices/filters/lists/IndustriesSlice';
import keywordsReducer from './slices/filters/lists/KeywordsSlice';
import skillsReducer from './slices/filters/lists/SkillsSlice';
import projectNamesReducer from './slices/filters/lists/ProjectNamesSlice'
import filteredProjectsReducer from './slices/filters/FilteredProjects';

//Filter singles
import industryReducer from './slices/filters/IndustrySlice';
import keywordReducer from './slices/filters/KeywordSlice';
import skillReducer from './slices/filters/SkillSlice'


export const store = configureStore({
  reducer: {
    filter: filterReducer,
    user: userReducer,
    projects: projectsReducer,
    externalUsers: externalUsersReducer,
    //Filter lists
    industries: industriesReducer,
    keywords: keywordsReducer,
    skills: skillsReducer,
    projectNames: projectNamesReducer,
    filteredProjects: filteredProjectsReducer,
    //Filter singles
    industry: industryReducer,
    keyword: keywordReducer,
    skill: skillReducer
  },
});