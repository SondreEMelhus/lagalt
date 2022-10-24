//Libraries
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//Components
import { getSkillsOfIndustry } from "../../../../api/attributes";
import ProjectSkillsPopup from "../ProjectSkillsPopup";

//Redux slices
import { selectProject, updateSkill } from "../../redux/slices/ProjectSlice";

//Styling
import '../../../../css/projectSkills.css'
import SkillIcon from '../../../../assets/puzzle-svgrepo-com.svg'
import XLetter from '../../../../assets/xLetter.png'

/**
 * Component responsible managing and handling a projects skills
 */
export default function ProjectSkills () {

    //Hooks
    const project = useSelector(selectProject);
    const projectSkills = project.skills;
    const dispatch = useDispatch();

    //States
    const [fetchedSkills, setFetchedSkills] = useState([]);
    const [show, setShow] = useState(false);

    //Event handlers
    const removeSkill = (selected) => {
        const newSkillList = [];
        projectSkills.forEach(skill => skill !== selected ? newSkillList.push(skill) : null);
        dispatch(updateSkill(newSkillList));
    }

    const showSkillsSelection = async () => {
        setShow(true);
        const allSkills = await getSkillsOfIndustry(project.industry)
        let skills = []
        allSkills.forEach(word => skills.push(word.title));
        setFetchedSkills(skills);
     }

     const hide = () => {
         setShow(false);
     }

    return (
        <div className="skillsdivAdmin">
        <div className="topPartSkillAdmin">
                <img src={SkillIcon} alt=""  className="skillIconAdmin"/>
                <p className="skillTitle">Ferdigheter</p>
                <button onClick={() => showSkillsSelection()} className="input-btn">Legg til</button>
        </div>
        <div className="skillElementsContainer">
            <div className="keywordElementsContainer">
        {projectSkills.map((skill, index) => {
            return(
                <div class="skillElementAdmin" key={index}>
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