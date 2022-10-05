//Libraries
import React from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Routes } from "react-router-dom";

//Components
import Login from './app/component/login/Login'
import Profile from './app/component/profile/Profile';
import UserProjects from './app/component/profile/UserProjects';
import Projects from './app/component/projects/Projects';
import ProjectCreator from './app/component/projects/ProjectCreator';
import ProjectAdmin from './app/component/projects/ProjectAdmin';
import ProjectApplication from './app/component/projects/ProjectApplication';

//Styling
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/myprojects" element={<UserProjects />} />
          {/* Kanskje endre denne til projects eller noe realtert til main page */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/create" element={<ProjectCreator/>} />
          <Route path="/admin" element={<ProjectAdmin />} />
          <Route path="/apply" element={<ProjectApplication/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
