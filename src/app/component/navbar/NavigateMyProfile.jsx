import React from "react";
import { useNavigate } from "react-router-dom";
import '../../../css/navbar.css'

export default function NavigateMyProfile(){

    const navigate = useNavigate();
    const handleClick = async () => {
        navigate('/profile')
    }

    return(
        <button className="myProfileButton" onClick={handleClick}>Min Profil</button>
    )
}