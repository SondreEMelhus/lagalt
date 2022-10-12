//Libraries
import React from "react";
import { useNavigate } from "react-router-dom";

//Images/Icons
import Logo from '../../../assets/Logo.png';
import dropdown from '../../../assets/Profile.png';

//Components


//Styling
import '../../../css/navbar.css'
import Login from "../login/Login";
import Searchbar from "../searchbar/Searchbar";
import FilterBox from "./filter/FilterBox";
import NavigateMyProjects from "./NavigateMyProjects";

export default function Navbar() {

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  }

  return (
    <div className="navBar">
        <img src={Logo} alt="Logo" className="logo" onClick={handleNavigate}/>
        <Searchbar />
        <FilterBox />
        <Login />
        <NavigateMyProjects/>
        <img src={dropdown} alt="Dropdown" className="dropdown"/>
    </div>
 
  );
}
