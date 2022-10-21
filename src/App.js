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
import ApplicationCreator from './app/component/projects/projectPage/projectApplications/ApplicationCreator';



//Styling
import './App.css';

import ApplicationHandler from './app/component/projects/projectPage/projectApplications/ApplicationHandler';
import MyProjects from './app/component/myProjects/myProjects';
import Navbar from './app/component/navbar/Navbar';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<IndexView />} />
          <Route path="/profile" element={<ProfileView />} />
          <Route path="/project" element={<ProjectView/>} />
          <Route path="/projects" element={<MyProjects/>} />
          {/* Kanskje endre denne til projects eller noe realtert til main page */}
          <Route path="/create" element={<ProjectCreatorView/>} />
          <Route path="/admin" element={<ProjectAdminView />} />
          <Route path="/apply" element={<ApplicationCreator/>} />
          <Route path="/message" element={<Message />} />
          <Route path="/status" element={<Status />} />
          <Route path='/application' element={<ApplicationHandler />} />
          <Route path='/postMessage' element={<CreateMessagePost />} />
          <Route path='/postStatus' element={<CreateStatusPost />} />
          {/* TODO: Kun for utvikling, fjern før innlevering!!!!*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
