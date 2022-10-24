//Libraries
import React from "react";
import { useNavigate } from "react-router-dom";

//Styling
import '../../../css/navbar.css'

/**
 * Component responsible for rendering the button that allows the user to navigate to a page displaying 
 * all their projects
 */
export default function NavigateMyProjects(){

    //Hooks
    const navigate = useNavigate();
 
    //Render function
    return(
        <button className="myProjectsButton" onClick={ () => navigate('/projects') }>Mine Prosjekter</button>
    )
}