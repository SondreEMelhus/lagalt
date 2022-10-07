//Libraries
import React from "react";

//Components
import Navbar from "../navbar/Navbar";
import musicNote from '../../../assets/musicalNote.png'
import SkillIcon from '../../../assets/Skillicon.png'
import XLetter from '../../../assets/xLetter.png'
import KeyWord from '../../../assets/KeyWord.png'
import ProjectSkills from "./ProjectSkills";
import ProjectKeyWords from "./ProjectKeyWords";

//Styling
import '../../../css/projectCreator.css'


export default function ProjectCreator () {

    return (
        <>
        <Navbar/>
            <h2 className="head">Opprett et nytt prosjekt</h2>
        <div className="titlediv">
            <p className="title">Tittel:</p>
            <input type="text" className="titleInput" />
            <div className="imgBackground">
                <img src={musicNote} alt="" className="musicNote"/>
            </div>
            <div className="createCards">
            <ProjectSkills/>
            </div>
        </div>
        <div className="descriptiondiv">
            <div class="descriptionFieldDiv">

            <p className="description">Prosjekt beskrivelse:</p>
            <textarea name="descriptionField" id="" cols="60" rows="10" className="textAreaField"></textarea>
            </div>
            <div className="createCards">
            <ProjectKeyWords/>
            </div>
        </div>
        </>
    )
}