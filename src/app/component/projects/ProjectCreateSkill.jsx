import React, { useState, useEffect } from "react";

//Components
import { getSkillsOfIndustry } from "../../../api/attributes";

//Styling
import '../../../css/projectCreateKeyword.css'
export default function ProjectCreateSkill(industry){

    const [selectedSkills, setSelectedSkills] = useState([]);
    const [industrySkills, setIndustrySkills] = useState([]);

    console.log(industry.industry + " INDUSTRY")

    
    useEffect(() => {
        getSkills();
    }, [industry])

    async function getSkills(){
        const allSkills = await getSkillsOfIndustry(industry.industry);
        const newAllSkills = [];
        allSkills.forEach((word) => newAllSkills.push(word.title))
        setIndustrySkills(newAllSkills);
    }

    function selectSkill(skill){
        const newSelect = [];
        selectedSkills.forEach((word) => newSelect.push(word));
        newSelect.push(skill);
        setSelectedSkills(newSelect)

        const updatedIndustrySkillArr = [];
        industrySkills.forEach((word) => word != skill ? updatedIndustrySkillArr.push(word) : null);
        setIndustrySkills(updatedIndustrySkillArr);
    } 

    function removeSkill(skill){
        const newSelect = [];
        selectedSkills.forEach((word) => word != skill ? newSelect.push(word) : null);
        setSelectedSkills(newSelect);

        const updatedIndustrySkillArr = [];
        industrySkills.forEach((word) => updatedIndustrySkillArr.push(word));
        updatedIndustrySkillArr.push(skill);
        setIndustrySkills(updatedIndustrySkillArr);
         
    }

    return(
        <div className="projectCreateKeywordBoxes">
            <div className="allKeywordBox">
                {industrySkills.map((skill) => {
                    return(
                        <div >
                        <p className="keywordElementCreateKeyword" onClick={() => selectSkill(skill)}>{skill}</p>
                        </div>
                    )
                })}
            </div>
            <div className="allKeywordBox">
            {selectedSkills.map((skill) => {
                    return(
                        <div >
                        <p className="keywordElementCreateKeyword" onClick={() => removeSkill(skill)}>{skill}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}