
import { configureStore } from '@reduxjs/toolkit';

import filterReducer from './slices/FilteredSlice';
import userReducer from './slices/UserSlice';
import userAdminReducer from './slices/UserAdminSlice';
import projectsReducer from './slices/ProjectsSlice';
import myProjectsReducer from './slices/MyProjectsSlice';
import adminReducer from './slices/AdminSlice';
import projectReducer from './slices/ProjectSlice';
import chatReducer from './slices/Chat';
import messageBoardReducer from './slices/ContentBoards/MessageBoard/MessageBoardSlice'
import statusBoardReducer from './slices/ContentBoards/StatusBoard/StatusBoardSlice'
import messageReducer from './slices/ContentBoards/MessageBoard/MessageSlice';
import statusReducer from './slices/ContentBoards/StatusBoard/StatusSlice';
import applicationsReducer from './slices/Applications'
import applicationReducer from './slices/Application'
import userProjectsReducer from './slices/UserProjects';
import initialIndustryReducer from './slices/filters/InitialIndustry';
import interactionHistoryReducer from './slices/InteractionHistorySlice'

//Create project
import projectIndustryReducer from './slices/createProjectSlices/ProjectIndustrySlice';
import projectKeywordsReducer from './slices/createProjectSlices/ProjectKeywordsSlice';
import projectSkillsReducer from './slices/createProjectSlices/ProjectSkillsSlice';

//Filter lists
import industriesReducer from './slices/filters/lists/IndustriesSlice';
import keywordsReducer from './slices/filters/lists/KeywordsSlice';
import skillsReducer from './slices/filters/lists/SkillsSlice';
import filteredProjectsReducer from './slices/filters/FilteredProjects';

//Filter singles
import industryReducer from './slices/filters/IndustrySlice';
import createIndustryReducer from './slices/filters/lists/CreateIndustrySlice';
import keywordReducer from './slices/filters/KeywordSlice';
import skillReducer from './slices/filters/SkillSlice'

/**
 * Redux store used to store the state of all the applications reducers
 */
export const store = configureStore({
  reducer: {
    filter: filterReducer,
    user: userReducer,
    userAdmin: userAdminReducer,
    projects: projectsReducer,
    myProjects: myProjectsReducer,
    admin: adminReducer,
    project: projectReducer,
    chat: chatReducer,
    messageBoard: messageBoardReducer,
    statusBoard: statusBoardReducer,
    message: messageReducer,
    status: statusReducer,
    applications: applicationsReducer,
    application: applicationReducer,
    userProjects: userProjectsReducer,
    
    initialIndustry: initialIndustryReducer,
    interactionHistory: interactionHistoryReducer,
    projectIndustry: projectIndustryReducer,
    projectKeywords: projectKeywordsReducer,
    projectSkills: projectSkillsReducer,

    //Filter lists
    industries: industriesReducer,
    keywords: keywordsReducer,
    skills: skillsReducer,
    filteredProjects: filteredProjectsReducer,
    
    //Filter singles
    industry: industryReducer,
    createIndustry: createIndustryReducer,
    keyword: keywordReducer,
    skill: skillReducer
  },
})