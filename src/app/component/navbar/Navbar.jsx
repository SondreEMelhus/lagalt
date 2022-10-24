//Libraries
import React from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

//Components
import Login from "../login/Login";
import FilterBox from "./filter/FilterBox";
import keycloak from "../keycloak/keycloak";
import NavigateMyProfile from "./NavigateMyProfile";
import NavigateMyProjects from "./NavigateMyProjects";
import ProjectCreatorRework from "../projects/projectCreatorRework/ProjectCreatorRework";

//Styling
import '../../../css/navbar.css'
import Logo from '../../../assets/Logo.png';

/**
 * Component responsible for managing and rendering the navbar
 */
export default function Navbar() {

  //Hooks
  const navigate = useNavigate();

  //Render function
  return (
    <div className="navBar">
        <img src={Logo} alt="Logo" className="logo" onClick={() => navigate('/')}/>
          <FilterBox />
          {keycloak.authenticated && 
          <DropdownButton id="dropdown-basic-button" title="Alternativer">
          <Dropdown.Item>
            <ProjectCreatorRework className="projectCreatorButton" /> 
          </Dropdown.Item>
          <Dropdown.Item>
            <NavigateMyProfile/>
          </Dropdown.Item>
          <Dropdown.Item>
            <NavigateMyProjects/>
          </Dropdown.Item>
        </DropdownButton>
          }
          <Login />
    </div>
 
  );
}
