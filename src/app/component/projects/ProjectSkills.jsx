//Libraries
import React from "react";

//Components
import SkillIcon from '../../../assets/Skillicon.png'
import XLetter from '../../../assets/xLetter.png'
import { useDispatch, useSelector } from "react-redux";
import { selectProject, updateSkill } from "../redux/slices/ProjectSlice";
//Styling
import '../../../css/projectSkills.css'

export default function ProjectSkills () {

    const project = useSelector(selectProject);
    const projectSkills = project.skills;
    const dispatch = useDispatch();

    function removeSkill(selected){
        const newSkillList = [];
        for(let skill of projectSkills){
            if(skill != selected){
                newSkillList.push(skill);
            }
        }
        dispatch(updateSkill(newSkillList));
    }
    return (
        <div className="skillsdivAdmin">
        <div className="topPartSkillAdmin">
                <img src={SkillIcon} alt=""  className="skillIconAdmin"/>
            <input type="text" class="headSkillAdmin" placeholder="Ferdigheter..."/>
        </div>
        <div className="skillElementsContainer">
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
    )
}