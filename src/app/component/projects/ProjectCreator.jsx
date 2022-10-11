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
import { addProject } from "../../../api/projectCreate";
import keycloak from "../keycloak/keycloak";

//Styling
import '../../../css/projectCreator.css'


export default function ProjectCreator () {
    let titleInput = "";
    let descriptionInput = "";

    const handleTitleInput = (event) => {
        titleInput = event.target.value;
    }

    const handleDescriptionInput = (event) => {
        descriptionInput = event.target.value;
    }



    function submitProject(){
        console.log(descriptionInput);
        console.log(titleInput);
        if(keycloak.authenticated){
           let user = keycloak.tokenParsed.preferred_username;
           console.log("user: " + user)
        }
        addProject(titleInput, descriptionInput);
    }

    return (
        <>
        <Navbar/>
        <div className="headDivCreate">
            <h2 className="head">Opprett et nytt prosjekt</h2>
            <button className="SubmitCreateProject" onClick={submitProject}>Opprett</button>
        </div>
        <div className="titlediv">
            <p className="title">Tittel:</p>
            <input type="text" className="titleInput" onChange={handleTitleInput}/>
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
            <textarea name="descriptionField" id="" cols="60" rows="10" className="textAreaField" onChange={handleDescriptionInput}></textarea>
            </div>
            <div className="createCards">
            <ProjectKeyWords/>
            </div>
        </div>
        </>
    )
}