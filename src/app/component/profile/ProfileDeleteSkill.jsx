//Libraries
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//API
import { getSkillsOfUser } from "../../../api/fetchUserAPI";
import { removeSkillFromUser } from "../../../api/fetchUserAPI";

//Redux slices
import { selectUser } from "../redux/slices/UserSlice";
import { updateSkillsOfCurrentUser } from "../redux/slices/UserSlice";

//Styling
import '../../../css/projectCreateKeyword.css'

/**
 * Component that renders and manages the deletion of the users skills in the profile
 */
export default function ProfileDeleteSkill({updating, reload}){

    //Hooks
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    //States
    const [allSkills, setAllSkills] = useState([]);
    const [skillsToRemove, setSkillsToRemove] = useState([]);

    useEffect(() => {
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
        setAllSkills(userSkills);
    }

    /**
     * Method used to remove a skill from the users skills
     */
    const updateMySkills = (skill) => {

        const newMySkills = []
        const newRemovingSkills = [];

        allSkills.forEach((s) => s.title !== skill.title ? newMySkills.push(s): null);
        setAllSkills(newMySkills);

        skillsToRemove.forEach((s) => newRemovingSkills.push(s));
        newRemovingSkills.push(skill);
        setSkillsToRemove(newRemovingSkills);
    }

    /**
     * Updating array of selected skills
     */
    const updateSelectedSkills = (skill) => {

        const newMySkills = [];
        const newRemovingSkills = [];

        skillsToRemove.forEach((s) => s.title !== skill.title ? newRemovingSkills.push(s): null);
        setSkillsToRemove(newRemovingSkills);

        allSkills.forEach((s) => newMySkills.push(s));
        newMySkills.push(skill);
        setAllSkills(newMySkills);
    }

    /**
     * Actually removing the skill in DB, and the display of the new skills
     */
    const pushSkillsToUser = async () => {        
        for(let e of skillsToRemove){
            await removeSkillFromUser(user.id, e.id)
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
            {skillsToRemove.map((skill, index) => {
                    return(
                        <p className="keywordElementCreateKeyword" onClick={() => updateSelectedSkills(skill)} key={index}>{skill.title}</p>
                    )
                })}
            </div>
        </div>
    )
}
