import React from "react";
import { useNavigate } from "react-router-dom";

//Components
import Navbar from "../../navbar/Navbar";

//Style
import '../../../../css/project.css'
import { useSelector } from "react-redux";
import { selectProject } from "../../redux/slices/ProjectSlice";
import BubbleList from "../../bubbleList/BubbleList";

import music from '../../../../assets/musicalNote.png';
import film from '../../../../assets/videoIcon.png';
import game from '../../../../assets/playIcon.png';
import coding from '../../../../assets/codingIcon.png';


export default function ProjectPage () {

    const project = useSelector(selectProject);
    const navigate = useNavigate();

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

    //TODO: Legg inn sjekk for å se om du er admin
    const navigateToAdmin = () => {
        navigate('/admin');
    }

    //Industry image - Tittel - Status - Bli med button - Administrate button
    //div
    //Sub Heading
    //Description - KeyWords(comp) - Skills(comp)
    //Chatt(comp)
    //Git history(comp)
    //MessageBoard(comp)
    //UpdateBoard(MessageBoard comp)
    //div/
    return(
        <div>
            <Navbar/>
            <div className="topDivProject">
                <img src={ chooseIcon(project.industry) } alt="" className="icon"/>
                <h2>{project.title}</h2>
                <div className="statusField">
                    <p className="statusText">{project.status}</p>
                </div>
                <button className="joinButton">Bli med</button>
                <button className="adminButton" onClick={navigateToAdmin}>Administrer</button>
            </div>
            <div className="projectInfoField">
                <h3 className="projecSubTitle">Sub-header</h3>
                <p className="descriptionProject">{project.description}</p>
                <p>Nøkkelord:</p>
                <BubbleList list={ project.keywords } />
                <p>Ferdigheter vi trenger:</p>
                <BubbleList list={ project.skills } />
            </div>
        </div>
    )
}