//Libraries
import React from "react";

//Images/Icons
import Logo from '../../../assets/Logo.png';
import dropdown from '../../../assets/Profile.png';

//Components


//Styling
import '../../../css/navbar.css'
import Login from "../login/Login";
import Searchbar from "../searchbar/Searchbar";
import FilterBox from "./filter/FilterBox";

export default function Navbar() {
  return (
    <div className="navBar">
        <img src={Logo} alt="Logo" className="logo"/>
        <Searchbar />
        <FilterBox />
        <Login />
        <img src={dropdown} alt="Dropdown" className="dropdown"/>
    </div>
 
  );
}
