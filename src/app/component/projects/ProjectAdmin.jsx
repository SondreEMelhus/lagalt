//Libraries
import React from "react";

//Components
import musicNote from '../../../assets/musicalNote.png'
import Visibility from '../../../assets/visibility.png'
import Navbar from "../navbar/Navbar";
import ProjectSkills from "./ProjectSkills";
import ProjectKeyWords from "./ProjectKeyWords";
import ProjectApplicants from "./ProjectApplicants";




//Styling
import '../../../css/projectAdmin.css'

export default function ProjectAdmin () {
    
    //Changing status, for now it only changes the css
    //TODO: Add so that it actually changes the status of the given project
    const StatusClicked = event =>{
        document.getElementById("planing").className = "statusButtonWhite"
        document.getElementById("started").className = "statusButtonWhite"
        document.getElementById("finished").className = "statusButtonWhite"

        event.currentTarget.className = "statusButtonBlue"
    
    }
    
    return (
        <div>
            <Navbar/>
        <div className="pageAdmin">
            <div>
            <div className="headProjectAdmin">
                <h2>Administrer prosjekt</h2>
                <button className="buttonUpdateAdmin">Oppdater</button>
            </div>
            <div className="titleDivAdmin">
                <p className="titleTextAdmin">Tittel:</p>
                <input type="text" className="titleInputAdmin"/>
                <div class="musicNoteBox">
                    <img src={musicNote} alt="" className="musicNoteAdmin"/>
                </div>
            </div>
            <div className="titleDivAdmin">
                <p className="titleTextAdmin">Status:</p>
                <button className="statusButtonWhite" onClick={StatusClicked} id="planing">Planlegges</button>
                <button className="statusButtonWhite" onClick={StatusClicked} id="started">Startet</button>
                <button className="statusButtonWhite" onClick={StatusClicked} id="finished">Ferdig</button>
                <div class="musicNoteBoxAdmin">
                    <img src={Visibility} alt="" className="visibilityIconAdmin"/>
                </div>
            </div>
            <div className="descriptionDivAdmin">
                <p>Prosjekt beskrivelse</p>
                <textarea name="" id="" cols="53" rows="10" className="textAreaAdmin"></textarea>
            </div>
            </div>

            <div className="leftSide">
                <div className="cards">
                    <ProjectSkills/>
                </div>
                <div className="cards">
                    <ProjectKeyWords/>
                </div>
                <div className="cards">
                    <ProjectApplicants/>
                </div>
            </div>
        </div>
        </div>
        
    )

}