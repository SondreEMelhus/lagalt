//Libraries
import React from "react";

//Components

//Styling
import music from '../../../assets/musicalNote.png';
import '../../../css/projectBanner.css'

/*TODO: 
    - Fiks på CSS så den er mer responsiv og fin
    - Legg til redux store for å hente diverse variabler
*/
export default function ProjectBanner () {


    return (
        <button className="project-clickable">
            <div className="project-banner">
                <div className="project-header">
                    <h1 className="project-title">Placeholder</h1>
                    <div className="project-industry">
                        <img src={ music } alt='Music' className="project-industry-image"/>
                    </div>
                </div>
                <div className="project-body">
                    <p className="project-skill-intro">Ferdigheter som trengs:</p>
                    <div className="project-skills">
                        <p className="project-skill-filled">Guitar</p>
                        <p className="project-skill-filled">Trommer</p>
                        <p className="project-skill-not-filled">Bass</p>
                    </div>
                    <p className="project-keyword-intro">Prosjekt relaterte nøkkelord:</p>
                    <div className="project-keywords">
                        <p className="project-keyword">Pop</p>
                        <p className="project-keyword">Band</p>
                        <p className="project-keyword">Experienced</p>
                    </div>
                </div>
            </div>
        </button>
    )

}