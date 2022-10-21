//Libraries
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//Components
import { addSkill, removeSkill, selectProjectSkills } from "../../redux/slices/createProjectSlices/ProjectSkillsSlice";
import { addIndustrySkill, removeIndustrySkill, selectProjectIndustry, setIndustry } from "../../redux/slices/createProjectSlices/ProjectIndustrySlice";

//Styling
import '../../../../css/projectCreateKeyword.css'
import { getSkillsOfIndustry } from "../../../../api/attributes";


export default function ProjectCreateKeywordRework({industry, setSkills, submitted}){

    const [industrySkills, setIndustrySkills] = useState([]);
    const [selectedSkills, setSelectedSkills] = useState([]);

    useEffect(() => {
        getSkills();
    }, [industry])

    //Updating skills in ProjectCreateRework
    useEffect(() => {
        setSkills(selectedSkills);
    }, [submitted])

    async function getSkills(){
        console.log(industry);
        const newSkills = await getSkillsOfIndustry(industry)
        const allSkills = [];
        newSkills.forEach((skill) => allSkills.push(skill));
        setIndustrySkills(allSkills);
    }

    function selectSkill(skill){
        const newIndustrySkills = [];
        const newSelectedSkills = [];

        selectedSkills.forEach((s => newSelectedSkills.push(s)));
        newSelectedSkills.push(skill);
        setSelectedSkills(newSelectedSkills);

        industrySkills.forEach((s) => s.title !== skill.title ? newIndustrySkills.push(s): null);
        setIndustrySkills(newIndustrySkills);
    }

    function removeSelectedSkill(skill){
        const newIndustrySkills = [];
        const newSelectedSkills = [];

        selectedSkills.forEach((s) => s.title !== skill.title ? newSelectedSkills.push(s): null);
        setSelectedSkills(newSelectedSkills);

        industrySkills.forEach((s) => newIndustrySkills.push(s));
        newIndustrySkills.push(skill);
        setIndustrySkills(newIndustrySkills);
    }

    function submitted(){
        setSkills(selectedSkills);
    }

    return(
        <div className="projectCreateKeywordBoxes">
            <div className="allKeywordBox">
                {industrySkills !== undefined && industrySkills.map((skill) => {
                    return(
                        <p className="keywordElementCreateKeyword" onClick={() => selectSkill(skill)}>{skill.title}</p>
                    )
                })}
            </div>
            <div className="allKeywordBox">
            {selectedSkills !== undefined && selectedSkills.map((skill) => {
                    return(
                        <p className="keywordElementCreateKeyword" onClick={() => removeSelectedSkill(skill)}>{skill.title}</p>
                    )
                })}
            </div>
        </div>
    )
}