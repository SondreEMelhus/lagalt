import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavigateMyProfile(){

    const navigate = useNavigate();
    const handleClick = async () => {
        navigate('/profile')
    }

    return(
        <button onClick={handleClick}>Min Profil</button>
    )
}