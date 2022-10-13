//Libraries
import React, { useState } from "react";

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

    async function showKeywordSelection(){
        setShow(true);
        //const allKeywords = await getKeyWordsOfIndustry()
        let skills = []
        //allKeywords.forEach(word => keywords.push(word.title));
        setFetchedSkills(skills);
     }
     function hide(){
         setShow(false);
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