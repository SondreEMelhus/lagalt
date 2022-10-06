//Libraries
import React from "react";

//Images/Icons
import Logo from '../../../assets/Logo.png';
import dropdown from '../../../assets/Profile.png';
import magglass from '../../../assets/MagnifyingGlass.png';

//Components

//Styling
import '../../../css/navbar.css'
import Login from "../login/Login";

export default function Navbar() {
  return (
    <div className="navBar">
        <img src={Logo} alt="Logo" className="logo"/>
        <div className="searchField">
        <img src={magglass} alt="" className="magnifyingGlass"/>
        <input type="text" name="" id="" placeholder="Søk..." className="inputtext"/>
        </div>
        <Login />
        <img src={dropdown} alt="Dropdown" className="dropdown"/>
    </div>
 
  );
}
