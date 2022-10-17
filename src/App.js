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



//Components
import Projects from './app/component/projects/Projects';
import ProjectAdmin from './app/component/projects/adminPage/ProjectAdmin';
import ProjectApplication from './app/component/projects/ProjectApplication';

import ProjectPage from './app/component/projects/projectPage/ProjectPage';


//Styling
import './App.css';



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
          {/* TODO: Kun for utvikling, fjern før innlevering!!!!*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
