//Libraries
import React, { useEffect, useState } from "react";

//Components
import { useDispatch, useSelector } from "react-redux";
import { addSkillToUser, getSkillsOfUser } from "../../../api/fetchUserAPI";
import { selectUser } from "../redux/slices/UserSlice";
import { getAllSkills } from "../../../api/ProjectAPI/projectsAPI";

//Styling
import '../../../css/projectCreateKeyword.css'


export default function ProfileCreateSkill(updating){

    const [allSkills, setAllSkills] = useState([]);
    const [newSkills, setNewSkills] = useState([]);
    const user = useSelector(selectUser);


    useEffect(() => {
        fetchAllSkills();
        fetchUserSkills();
    },[])

    useEffect(() => {
        pushSkillsToUser()
    },[updating])

    async function fetchUserSkills() {
        const userSkills = await getSkillsOfUser(user.id);
        setNewSkills(userSkills);
        console.log("-------------")
        console.log(newSkills);
        console.log("-------------")


    }

   async function fetchAllSkills(){
    const skills = await getAllSkills();
       setAllSkills(skills); 
    }

    function updateMySkills(skill){
        const s = [];
        newSkills.forEach((skil) => s.push(skil));
        s.push(skill);
        setNewSkills(s);

        const oldSkills = [];
        allSkills.forEach((skil => skil != skill ? oldSkills.push(skil):  null))
        setAllSkills(oldSkills);

    }

    function updateSelectedSkills(skill){
        const s = [];
        newSkills.forEach((skil) => skil != skill ? s.push(skil): null);
        setNewSkills(s);

        const old = [];
        allSkills.forEach((skil) => old.push(skil));
        old.push(skill);
        setAllSkills(old);
    }

    async function pushSkillsToUser(){
        for(let e of newSkills){
            await addSkillToUser(user.id, e.id)
        }
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