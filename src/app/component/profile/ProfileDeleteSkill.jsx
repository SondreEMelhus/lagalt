//Libraries
import React, { useEffect, useState } from "react";

//Components
import { useDispatch, useSelector } from "react-redux";
import { addSkillToUser, getSkillsOfUser } from "../../../api/fetchUserAPI";
import { selectUser } from "../redux/slices/UserSlice";
import { getAllSkills } from "../../../api/ProjectAPI/projectsAPI";
import { updateSkillsOfCurrentUser } from "../redux/slices/UserSlice";
import { removeSkillFromUser } from "../../../api/fetchUserAPI";


//Styling
import '../../../css/projectCreateKeyword.css'


export default function ProfileDeleteSkill({updating, reload}){

    const [allSkills, setAllSkills] = useState([]);
    const [skillsToRemove, setSkillsToRemove] = useState([]);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    //On load, get fetch all existing user skills, and all skills
    useEffect(() => {
        fetchUserSkills();
    },[])

    useEffect(() => {
        pushSkillsToUser()
    },[updating])

    //Method sending request to get skills of a user
    async function fetchUserSkills() {
        const userSkills = await getSkillsOfUser(user.id);

        setAllSkills(userSkills);
    }
    function updateMySkills(skill){

        const newMySkills = []
        const newRemovingSkills = [];

        allSkills.forEach((s) => s.title !== skill.title ? newMySkills.push(s): null);
        setAllSkills(newMySkills);

        skillsToRemove.forEach((s) => newRemovingSkills.push(s));
        newRemovingSkills.push(skill);
        setSkillsToRemove(newRemovingSkills);

    }
    //Updating array of selected skills
    function updateSelectedSkills(skill){

        const newMySkills = [];
        const newRemovingSkills = [];

        skillsToRemove.forEach((s) => s.title !== skill.title ? newRemovingSkills.push(s): null);
        setSkillsToRemove(newRemovingSkills);

        allSkills.forEach((s) => newMySkills.push(s));
        newMySkills.push(skill);
        setAllSkills(newMySkills);
    }

    //Actually removing the skill in DB, and the display of the new skills
    async function pushSkillsToUser(){        
        for(let e of skillsToRemove){
            await removeSkillFromUser(user.id, e.id)
        }
        const allNewSkills = await getSkillsOfUser(user.id);
        const titleOfNewSkills = [];
        allNewSkills.forEach((s) => titleOfNewSkills.push(s.title));
        dispatch(updateSkillsOfCurrentUser(titleOfNewSkills));
        reload(titleOfNewSkills);



    }




    return(
        <div className="projectCreateKeywordBoxes">
            <div className="allSkillsBox">
                {allSkills.map((skill, index) => {
                    return(
                        <p className="keywordElementCreateKeyword" onClick={() => updateMySkills(skill)} >{skill.title}</p>
                    )
                })}
            </div>
            <div className="allSkillsBox">
            {skillsToRemove.map((skill, index) => {
                    return(
                        <p className="keywordElementCreateKeyword" onClick={() => updateSelectedSkills(skill)}>{skill.title}</p>
                    )
                })}
            </div>
        </div>
    )
}
