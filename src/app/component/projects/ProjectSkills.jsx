//Libraries
import React, { useState } from "react";

//Components
import SkillIcon from '../../../assets/Skillicon.png'
import XLetter from '../../../assets/xLetter.png'
import { useDispatch, useSelector } from "react-redux";
import { selectProject, updateSkill } from "../redux/slices/ProjectSlice";
import { getSkillsOfIndustry } from "../../../api/attributes";
import ProjectSkillsPopup from "./ProjectSkillsPopup";
//Styling
import '../../../css/projectSkills.css'

export default function ProjectSkills () {

    const project = useSelector(selectProject);
    const projectSkills = project.skills;
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [fetchedSkills, setFetchedSkills] = useState([]);


    function removeSkill(selected){
        const newSkillList = [];
        for(let skill of projectSkills){
            if(skill != selected){
                newSkillList.push(skill);
            }
        }
        dispatch(updateSkill(newSkillList));
    }

    async function showSkillsSelection(){
        setShow(true);
        const allSkills = await getSkillsOfIndustry()
        let skills = []
        allSkills.forEach(word => skills.push(word.title));
        setFetchedSkills(skills);
     }
     function hide(){
         setShow(false);
     }
    return (
        <div className="skillsdivAdmin">
        <div className="topPartSkillAdmin">
                <img src={SkillIcon} alt=""  className="skillIconAdmin"/>
                <button onClick={() => showSkillsSelection()} className="addKeyWordButton">Legg til</button>
        </div>
        <div className="skillElementsContainer">
            <div className="keywordElementsContainer">
        {projectSkills.map((skill) => {
            return(
                
                <div class="skillElementAdmin">
                    <p className="eachSkillElementAdmin">{skill}</p>
                    <img src={XLetter} alt="" className="xletterAdmin" onClick={() => removeSkill(skill)}/>
                </div>
                    )
                })}
                </div>
        </div>
        <ProjectSkillsPopup show={show} onHide={hide} fetchedSkills={fetchedSkills}/>
    </div>
    )
}