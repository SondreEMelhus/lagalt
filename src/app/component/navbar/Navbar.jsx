//Libraries
import React from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

//Images/Icons
import Logo from '../../../assets/Logo.png';
import dropdown from '../../../assets/Profile.png';

//Components
import CreateProject from "../projects/ProjectCreator";
import ProjectCreatorRework from "../projects/projectCreatorRework/ProjectCreatorRework";

//Styling
import '../../../css/navbar.css'
import Login from "../login/Login";
import Searchbar from "../searchbar/Searchbar";
import FilterBox from "./filter/FilterBox";
import NavigateMyProfile from "./NavigateMyProfile";
import NavigateMyProjects from "./NavigateMyProjects";
import keycloak from "../keycloak/keycloak";

export default function Navbar() {

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  }

  return (
    <div className="navBar">
        <img src={Logo} alt="Logo" className="logo" onClick={handleNavigate}/>
          <FilterBox />
          {/* TODO: Finn ut hvor vi kan hente ut en brukers prosjekter <NavigateMyProjects/>*/}
          {/* TODO: Finn ut hvordan man henter en brukers prosjekte r<NavigateMyProfile/> */}
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
