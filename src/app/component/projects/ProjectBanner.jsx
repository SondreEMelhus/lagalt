//Libraries
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//Components
import BubbleList from "../bubbleList/BubbleList";
import { set } from '../redux/slices/ProjectSlice';

//Styling
//import music from '../../../assets/musicalNote.png';
//import film from '../../../assets/videoIcon.png';
//import game from '../../../assets/playIcon.png';
//import coding from '../../../assets/codingIcon.png';
import music from '../../../assets/note-svgrepo-com.svg';
import film from '../../../assets/movie-camera-svgrepo-com.svg';
import game from '../../../assets/video-game-control-svgrepo-com.svg';
import coding from '../../../assets/coding-svgrepo-com.svg';

import '../../../css/projectBanner.css'



/*TODO: 
    - Fiks på CSS så den er mer responsiv og fin
    - Legg til redux store for å hente diverse variabler
*/
export default function ProjectBanner ({ project }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const navigateToProject = async () => {
        await dispatch( set(project) );
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