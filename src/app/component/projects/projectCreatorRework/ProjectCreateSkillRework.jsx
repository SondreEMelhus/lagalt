//Libraries
import React, { useEffect, useState } from "react";

//API
import { getSkillsOfIndustry } from "../../../../api/attributes";

//Styling
import '../../../../css/projectCreateKeyword.css'

/**
 * Component used to render and manage a projects selected skills
 */
export default function ProjectCreateKeywordRework({industry, setSkills, submitted}){

    //States
    const [industrySkills, setIndustrySkills] = useState([]);
    const [selectedSkills, setSelectedSkills] = useState([]);

    //Hooks
    useEffect(() => {
        getSkills();
    }, [industry])

    //Updating skills in ProjectCreateRework
    useEffect(() => {
        setSkills(selectedSkills);
    }, [submitted])

    /**
     * Method used to fetach all the skills of a industry
     */
    const getSkills = async () => {
        const newSkills = await getSkillsOfIndustry(industry)
        const allSkills = [];
        newSkills.forEach((skill) => allSkills.push(skill));
        setIndustrySkills(allSkills);
    }

    /**
     * Method used to add a skill to the list of selected skills
     */
    const selectSkill = (skill) => {
        const newIndustrySkills = [];
        const newSelectedSkills = [];

        selectedSkills.forEach((s => newSelectedSkills.push(s)));
        newSelectedSkills.push(skill);
        setSelectedSkills(newSelectedSkills);

        industrySkills.forEach((s) => s.title !== skill.title ? newIndustrySkills.push(s): null);
        setIndustrySkills(newIndustrySkills);
    }

    /**
     * Method used to remove a skill from the list of selected skills
     */
    const removeSelectedSkill = (skill) => {
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

    //Render function
    return(
        <div className="projectCreateKeywordBoxes">
            <div className="allKeywordBox">
                {industrySkills !== undefined && industrySkills.map((skill, index) => {
                    return(
                        <p className="keywordElementCreateKeyword" onClick={() => selectSkill(skill)} key={index}>{skill.title}</p>
                    )
                })}
            </div>
            <div className="allKeywordBox">
            {selectedSkills !== undefined && selectedSkills.map((skill, index) => {
                    return(
                        <p className="keywordElementCreateKeyword" onClick={() => removeSelectedSkill(skill)} key={index}>{skill.title}</p>
                    )
                })}
            </div>
        </div>
    )
}