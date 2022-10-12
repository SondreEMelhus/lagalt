//Libraries
import React from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Routes } from "react-router-dom";

//Components
import HomePage from './app/component/home/HomePage'
import Profile from './app/component/profile/Profile';
import UserProjects from './app/component/profile/UserProjects';
import Projects from './app/component/projects/Projects';
import ProjectCreator from './app/component/projects/ProjectCreator';
import ProjectAdmin from './app/component/projects/adminPage/ProjectAdmin';
import ProjectApplication from './app/component/projects/ProjectApplication';
import MyProjects from './app/component/myProjects/myProjects';
import ProjectPage from './app/component/projects/projectPage/ProjectPage';

//Styling
import './App.css';
import ProjectBanner from './app/component/projects/ProjectBanner';
import FilterBox from './app/component/navbar/filter/IndustryBox';
import Chat from './app/component/projects/projectPage/Chat';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/myProjects" element={<MyProjects/>} />
          <Route path="/project" element={<ProjectPage/>} />
          {/* Kanskje endre denne til projects eller noe realtert til main page */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/create" element={<ProjectCreator/>} />
          <Route path="/admin" element={<ProjectAdmin />} />
          <Route path="/apply" element={<ProjectApplication/>} />
          {/* TODO: Kun for utvikling, fjern før innlevering!!!!*/}
          <Route path="/chat" element={<Chat/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
