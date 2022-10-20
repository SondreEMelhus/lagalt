//Libraries
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//Components
import BubbleList from "../bubbleList/BubbleList";
import { set } from '../redux/slices/ProjectSlice';
import { selectUserAdmin, updateAdminStatus } from "../redux/slices/UserAdminSlice";

//Styling
import music from '../../../assets/musicalNote.png';
import film from '../../../assets/videoIcon.png';
import game from '../../../assets/playIcon.png';
import coding from '../../../assets/codingIcon.png';

import '../../../css/projectBanner.css'
import { getAllContributers } from "../../../api/ProjectAPI/projectsAPI";
import { selectUser } from "../redux/slices/UserSlice";



/*TODO: 
    - Fiks på CSS så den er mer responsiv og fin
    - Legg til redux store for å hente diverse variabler
*/
export default function ProjectBanner ({ project }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    const adminUser = useState(useSelector(selectUserAdmin));

    const navigateToProject = async () => {
        await dispatch( set(project) );
        const contributers = await getAllContributers(project.id);
        const loggedUser = [];
        contributers.forEach((u) => u.username === user.username ? loggedUser.push(u): null);

        if(loggedUser.length != 0){
            if(loggedUser[0].role === "Owner" || loggedUser[0].role === "Admin"){
                dispatch(updateAdminStatus(loggedUser));

            }
        }else{
            dispatch(updateAdminStatus(null));
        }

        navigate('/project');

    }

    const chooseIcon = (industry) => {
        if (industry === 'Musikk') {
            return music;
        }
        if (industry === 'Film') {
            return film;
        }
        if (industry === 'Spillutvikling') {
            return game;
        }
        if (industry === 'Webutvikling') {
            return coding;
        }
    }


    return (
        <button className="project-clickable" onClick={navigateToProject}>
            <div className="project-banner">
                <div className="project-header">
                    <h1 className="project-title">{ project.title }</h1>
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