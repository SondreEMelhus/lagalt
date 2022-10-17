//Libraries
import React from "react";
import { useDispatch, useSelector } from "react-redux";

//Components
import { addSkill, removeSkill, selectProjectSkills } from "../../redux/slices/createProjectSlices/ProjectSkillsSlice";
import { addIndustrySkill, removeIndustrySkill, selectProjectIndustry } from "../../redux/slices/createProjectSlices/ProjectIndustrySlice";

//Styling
import '../../../../css/projectCreateKeyword.css'


export default function ProjectCreateKeywordRework(){

    const industry = useSelector(selectProjectIndustry)
    const skills = useSelector(selectProjectSkills)
    const dispatch = useDispatch();

    return(
        <div className="projectCreateKeywordBoxes">
            <div className="allKeywordBox">
                {industry.skills !== undefined && industry.skills.map((skill, index) => {
                    return(
                        <p className="keywordElementCreateKeyword" onClick={() => {
                            dispatch( addSkill (skill))
                            dispatch( removeIndustrySkill(skill))
                        }
                        } key={'Add' + '-' + index}>{skill}</p>
                    )
                })}
            </div>
            <div className="allKeywordBox">
            {skills !== undefined && skills.map((skill, index) => {
                    return(
                        <p className="keywordElementCreateKeyword" onClick={() => {
                            dispatch( removeSkill(skill))
                            dispatch( addIndustrySkill(skill))
                        }} key={'Remove' + '-' + index}>{skill}</p>
                    )
                })}
            </div>
        </div>
    )
}