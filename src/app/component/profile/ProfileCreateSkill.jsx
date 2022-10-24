//Libraries
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//API
import { getAllSkills } from "../../../api/ProjectAPI/projectsAPI";
import { addSkillToUser, getSkillsOfUser } from "../../../api/fetchUserAPI";

//Redux slices
import { selectUser } from "../redux/slices/UserSlice";
import { updateSkillsOfCurrentUser } from "../redux/slices/UserSlice";

//Styling
import '../../../css/projectCreateKeyword.css'

/**
 * Component responsible for creating the skills that a visible on the profile page
 */
export default function ProfileCreateSkill({updating, reload}){

    //Hooks
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    //States
    const [allSkills, setAllSkills] = useState([]);
    const [newSkills, setNewSkills] = useState([]);

    useEffect(() => {
        fetchAllSkills();
        fetchUserSkills();
    },[])

    useEffect(() => {
        pushSkillsToUser()
    },[updating])

    /**
     * Method sending request to get skills of a user
     */
    const fetchUserSkills = async () => {
        const userSkills = await getSkillsOfUser(user.id);
        setNewSkills(userSkills);
    }

    /**
     * Method requesting all skills
     */
   const fetchAllSkills = async () => {
        const skills = await getAllSkills();
        setAllSkills(skills); 
    }

    /**
     * Method to update the list available skills when one is selected
     */
    const updateMySkills = (skill) => {
        let s = [];
        newSkills.forEach((skil) => s.push(skil));
        s.push(skill);
        setNewSkills(s);
        let oldSkills = [];
        allSkills.forEach((skil => skil !== skill ? oldSkills.push(skil):  null))
        setAllSkills(oldSkills);
    }

    /**
     * Updating array of selected skills
     */
    const updateSelectedSkills = (skill) => {
        let s = [];
        newSkills.forEach((skil) => skil !== skill ? s.push(skil): null);
        setNewSkills(s);
        let old = [];
        allSkills.forEach((skil) => old.push(skil));
        old.push(skill);
        setAllSkills(old);
    }

    /**
     * Actually adding the skill in DB, and the display of the new skills
     */
    async function pushSkillsToUser(){
        for(let e of newSkills){
            await addSkillToUser(user.id, e.id)
        }
        const allNewSkills = await getSkillsOfUser(user.id);
        const titleOfNewSkills = [];
        allNewSkills.forEach((s) => titleOfNewSkills.push(s.title));
        dispatch(updateSkillsOfCurrentUser(titleOfNewSkills));
        reload(titleOfNewSkills);
    }

    //Render function
    return(
        <div className="projectCreateKeywordBoxes">
            <div className="allSkillsBox">
                {allSkills.map((skill, index) => {
                    return(
                        <p className="keywordElementCreateKeyword" onClick={() => updateMySkills(skill)} key={index}>{skill.title}</p>
                    )
                })}
            </div>
            <div className="allSkillsBox">
            {newSkills.map((skill, index) => {
                    return(
                        <p className="keywordElementCreateKeyword" onClick={() => updateSelectedSkills(skill)} key={index}>{skill.title}</p>
                    )
                })}
            </div>
        </div>
    )
}