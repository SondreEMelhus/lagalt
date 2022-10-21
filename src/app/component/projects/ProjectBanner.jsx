//Libraries
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//Components
import BubbleList from "../bubbleList/BubbleList";
import { getAllContributers } from "../../../api/ProjectAPI/projectsAPI";

//Redux slices
import { set } from '../redux/slices/ProjectSlice';
import { selectUser } from "../redux/slices/UserSlice";
import { selectUserAdmin, updateAdminStatus } from "../redux/slices/UserAdminSlice";

//Styling
import '../../../css/projectBanner.css'

import music from '../../../assets/note-svgrepo-com.svg';
import film from '../../../assets/movie-camera-svgrepo-com.svg';
import game from '../../../assets/video-game-control-svgrepo-com.svg';
import coding from '../../../assets/coding-svgrepo-com.svg';

/*TODO: 
    - Fiks på CSS så den er mer responsiv og fin
    - Legg til redux store for å hente diverse variabler
*/
export default function ProjectBanner ({ project }) {

    //Hooks
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(selectUser);

    //Event handlers
    //TODO: Legg til error handling 
    const navigateToProject = async () => {
        dispatch( set(project) );
        const contributers = await getAllContributers(project.id);
        const loggedUser = [];
        contributers.forEach(contributer => contributer.username === user.username ? loggedUser.push(contributer): null);

        if(loggedUser.length !== 0){
            if(loggedUser[0].role === "Owner" || loggedUser[0].role === "Admin") { dispatch( updateAdminStatus(loggedUser) ); }
        }else{
            dispatch( updateAdminStatus(null) );
        }
        navigate('/project');
    }

    const chooseIcon = (industry) => {
        if (industry === 'Musikk') { return music };
        if (industry === 'Film') { return film };
        if (industry === 'Spillutvikling') { return game };
        if (industry === 'Webutvikling') { return coding };
    }


    //Render function
    return (
        <button className="project-clickable" onClick={navigateToProject}>
            <div className="project-banner">
                <div className="project-header">
                    <h2 className="project-title">{ project.title }</h2>
                    <div className="project-industry">
                        <img src={ chooseIcon(project.industry) } alt={project.industry} className="project-industry-image"/>
                    </div>
                </div>
                <div className="project-body">
                    <p className="project-skill-intro">Ferdigheter som trengs:</p>
                    <BubbleList list = { project.skills } />
                    <p className="project-keyword-intro">Prosjekt relaterte nøkkelord:</p>
                    <BubbleList list = { project.keywords } />
                </div>
            </div>
        </button>
    )

}