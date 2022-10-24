//Libraries
import React from "react";
import { useNavigate } from "react-router-dom";

//Styling
import '../../../css/navbar.css'

/**
 * Component responsible for rendering the button that allows the user to navigate to their profile
 */
export default function NavigateMyProfile(){

    //Hooks
    const navigate = useNavigate();

    //Render function
    return(
        <button className="myProfileButton" onClick={() => navigate('/profile')}>Min Profil</button>
    )
}