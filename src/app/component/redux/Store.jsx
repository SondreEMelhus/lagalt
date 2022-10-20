
import { configureStore } from '@reduxjs/toolkit';

import filterReducer from './slices/FilteredSlice';
import userReducer from './slices/UserSlice';
import userAdminReducer from './slices/UserAdminSlice';
import projectsReducer from './slices/ProjectsSlice';
import externalUsersReducer from './slices/ExternalUsers';
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
import skillsAndKeywordsReducer from './slices/filters/AllSkillsAndKeywords';
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
    userAdmin: userAdminReducer,
    projects: projectsReducer,
    externalUsers: externalUsersReducer,
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
    skillsAndKeywords: skillsAndKeywordsReducer,
    initialIndustry: initialIndustryReducer,
    interactionHistory: interactionHistoryReducer,

    //Create project
    projectIndustry: projectIndustryReducer,
    projectKeywords: projectKeywordsReducer,
    projectSkills: projectSkillsReducer,

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
})