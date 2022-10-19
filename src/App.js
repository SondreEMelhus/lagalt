//Libraries
import React from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Routes } from "react-router-dom";

//Views
import IndexView from './app/component/views/IndexView'
import ProfileView from './app/component/views/ProfileView'
import UserProjectsView from './app/component/views/UserProjectsView'
import ProjectCreatorView from './app/component/views/ProjectCreatorView'
import ProjectView from './app/component/views/ProjectView'
import ProjectAdminView from './app/component/views/ProjectAdminView';
import Message from './app/component/projects/projectPage/projectBoards/message/Message'
import Status from './app/component/projects/projectPage/projectBoards/status/Status'
import CreateMessagePost from './app/component/projects/projectPage/projectBoards/message/CreateMessagePost'
import CreateStatusPost from './app/component/projects/projectPage/projectBoards/status/CreateStatusPost'



//Components
import Projects from './app/component/projects/Projects';
import ProjectAdmin from './app/component/projects/adminPage/ProjectAdmin';
import ProjectApplication from './app/component/projects/ProjectApplication';

import ProjectPage from './app/component/projects/projectPage/ProjectPage';


//Styling
import './App.css';
import Application from './app/component/projects/projectPage/projectApplications/Application';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<IndexView />} />
          <Route path="/profile" element={<ProfileView />} />
          <Route path="/project" element={<ProjectView/>} />
          <Route path="/projects" element={<UserProjectsView/>} />
          {/* Kanskje endre denne til projects eller noe realtert til main page */}
          <Route path="/create" element={<ProjectCreatorView/>} />
          <Route path="/admin" element={<ProjectAdminView />} />
          <Route path="/apply" element={<ProjectApplication/>} />
          <Route path="/message" element={<Message />} />
          <Route path="/status" element={<Status />} />
          <Route path='/application' element={<Application />} />
          <Route path='/postMessage' element={<CreateMessagePost />} />
          <Route path='/postStatus' element={<CreateStatusPost />} />
          {/* TODO: Kun for utvikling, fjern før innlevering!!!!*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
