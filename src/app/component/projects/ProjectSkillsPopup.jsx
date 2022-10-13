import React, { useEffect, useState } from "react";

//components
import XLetter from '../../../assets/xLetter.png'
import { selectProject, updateSkill } from "../redux/slices/ProjectSlice";


//Styling
import '../../../css/projectKeywordPopup.css'
import { useDispatch, useSelector } from "react-redux";

export default function ProjectSkillsPopup({show, onHide, fetchedSkills}){

    const project = useSelector(selectProject);
    const dispatch = useDispatch();

    useEffect(() => {

        if(show){
            document.getElementById("popupSkill").className = "visiblePopup";
        }else if(!show){
            document.getElementById("popupSkill").className = "popupBox";
        }

    }, [show])

    function addSkill(skillGiven){
        const newSkills = [];
        const alreadyIn = false;
        for(let skill of project.skills){
            newSkills.push(skill);
            if(skill === skillGiven){
                alreadyIn = true;
            }
        }
        if(!alreadyIn){
            newSkills.push(skillGiven);
            dispatch(updateSkill(newSkills));
        }else{ //Not sure why not working
            prompt("Ferdigheten " + skillGiven + " er allerede koblet opp til prosjektet")
        }
    }

    return(
        <div className="popupBox" id="popupSkill">
            <p>Trykk på nøkkelordet du vil ha</p>
            {fetchedSkills.map((skill) => {
                return(
                    <div className="keywordsDiv">
                        <button className="wordToSelect" onClick={() => addSkill(skill)}>{skill}</button>
                    </div>
                )
            })}
            <button onClick={onHide} className="closeButton">Lukk vindu</button>
        </div>
    )
}