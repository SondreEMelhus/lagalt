//Libraries
import React from "react";

//Components

//Styling
import music from '../../../assets/musicalNote.png';
import film from '../../../assets/videoIcon.png';
import game from '../../../assets/playIcon.png';
import coding from '../../../assets/codingIcon.png';

import '../../../css/projectBanner.css'

/*TODO: 
    - Fiks på CSS så den er mer responsiv og fin
    - Legg til redux store for å hente diverse variabler
*/
export default function ProjectBanner ({ project }) {

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
        <button className="project-clickable">
            <div className="project-banner">
                <div className="project-header">
                    <h1 className="project-title">{ project.name }</h1>
                    <div className="project-industry">
                        <img src={ chooseIcon(project.industry) } alt={project.industry} className="project-industry-image"/>
                    </div>
                </div>
                <div className="project-body">
                    <p className="project-skill-intro">Ferdigheter som trengs:</p>
                    <div className="project-skills">
                        {project.skills.map((skill, index) => {
                            return (
                                <p className="project-skill-filled" key={index + '-' + skill}>{skill}</p>
                            )
                        })}
                    </div>
                    <p className="project-keyword-intro">Prosjekt relaterte nøkkelord:</p>
                    <div className="project-keywords">
                        {project.keywords.map((keyword, index) => {
                            return (
                                <p className="project-keyword" key={index + '-' + keyword}>{keyword}</p>
                            )
                        })}
                    </div>
                </div>
            </div>
        </button>
    )

}