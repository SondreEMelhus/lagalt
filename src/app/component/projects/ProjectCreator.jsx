//Libraries
import React, {useState} from "react";

//Components
import Navbar from "../navbar/Navbar";
import musicNote from '../../../assets/musicalNote.png'
import ProjectSkills from "./ProjectSkills";
import ProjectKeyWords from "./ProjectKeyWords";
import { addProject } from "../../../api/projectCreate";
import keycloak from "../keycloak/keycloak";

//Styling
import '../../../css/projectCreator.css'


export default function ProjectCreator () {
    const [title, setTitle] = useState('');
    const [industry, setIndustry] = useState('Musikk');
    const [skills, setSkills] = useState([]);
    const [keywords, setKeywords] = useState([]);
    const [description, setDescription] = ('');

    const handleTitleInput = (event) => {
        setTitle(event.target.value);
    }

    const handleDescriptionInput = (event) => {
        setDescription(event.target.value);
    }

    const handleIndustry = (event) => {
        setIndustry(event.target.value);
    }

    const handleKeywords = (newKeyword) => {
        const newKeywords = [...keywords, newKeyword]
        setKeywords(newKeywords);
    }

    const handleSkills = (newSkill) => {
        const newSkills = [...skills, newSkill]
        setSkills(newSkills);
    }



    function submitProject(){
        const newProject = {
            title: "Testing 1",
            description: "Testing desc",
            contributors: [
                "karo",
                "tj",
                "sondre",
                "ulrik"
            ],
            applications: [],
            skills: [
                "Design",
                "Java",
                "Springboot"
            ],
            industry: "Webutvikling",
            keywords: [
                "Koding",
                "Front-end",
                "Back-end"
            ],
            accounts: []
          }
        console.log('Logging ProjectCreator: ' + newProject);
        /*
        if(keycloak.authenticated){
           let user = keycloak.tokenParsed.preferred_username;
        }
        */
        const response = addProject(newProject);
        console.log(response);
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