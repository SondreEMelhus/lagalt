//Libraries
import React, { useEffect, useState } from "react";

//Components
import { useDispatch, useSelector } from "react-redux";
import { addSkillToUser, getSkillsOfUser } from "../../../api/fetchUserAPI";
import { selectUser } from "../redux/slices/UserSlice";
import { getAllSkills } from "../../../api/ProjectAPI/projectsAPI";
import { updateSkillsOfCurrentUser } from "../redux/slices/UserSlice";


//Styling
import '../../../css/projectCreateKeyword.css'


export default function ProfileCreateSkill({updating, reload}){

    const [allSkills, setAllSkills] = useState([]);
    const [newSkills, setNewSkills] = useState([]);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    //On load, get fetch all existing user skills, and all skills
    useEffect(() => {
        fetchAllSkills();
        fetchUserSkills();
    },[])

    useEffect(() => {
        pushSkillsToUser()
    },[updating])

    //Method sending request to get skills of a user
    async function fetchUserSkills() {
        const userSkills = await getSkillsOfUser(user.id);
        setNewSkills(userSkills);
        console.log("-------------")
        console.log(newSkills);
        console.log("-------------")


    }
    //Method requesting all skills
   async function fetchAllSkills(){
    const skills = await getAllSkills();
       setAllSkills(skills); 
    }
    //Method to update the list available skills when one is selected
    function updateMySkills(skill){
        const s = [];
        newSkills.forEach((skil) => s.push(skil));
        s.push(skill);
        setNewSkills(s);
        const oldSkills = [];
        allSkills.forEach((skil => skil != skill ? oldSkills.push(skil):  null))
        setAllSkills(oldSkills);

    }
    //Updating array of selected skills
    function updateSelectedSkills(skill){
        const s = [];
        newSkills.forEach((skil) => skil != skill ? s.push(skil): null);
        setNewSkills(s);
        const old = [];
        allSkills.forEach((skil) => old.push(skil));
        old.push(skill);
        setAllSkills(old);
    }

    //Actually adding the skill in DB, and the display of the new skills
    async function pushSkillsToUser(){
        console.log("IM IN PUSHSKILLSTOUSER")
        for(let e of newSkills){
            await addSkillToUser(user.id, e.id)
        }
        const allNewSkills = await getSkillsOfUser(user.id);
        const titleOfNewSkills = [];
        allNewSkills.forEach((s) => titleOfNewSkills.push(s.title));
        dispatch(updateSkillsOfCurrentUser(titleOfNewSkills));
        reload(titleOfNewSkills);
        console.log(user.skills)



    }




    console.log(newSkills);
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
            {newSkills.map((skill, index) => {
                    return(
                        <p className="keywordElementCreateKeyword" onClick={() => updateSelectedSkills(skill)}>{skill.title}</p>
                    )
                })}
            </div>
        </div>
    )
}