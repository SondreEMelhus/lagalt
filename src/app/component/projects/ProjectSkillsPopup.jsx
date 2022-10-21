//Libraries
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//components
import { selectProject, updateSkill } from "../redux/slices/ProjectSlice";

//Styling
import '../../../css/projectKeywordPopup.css'

/**
 * Component used to manage and render popup box containing all choosable skills.
 */
export default function ProjectSkillsPopup({show, onHide, fetchedSkills}){

    //Hooks
    const project = useSelector(selectProject);
    const dispatch = useDispatch();

    useEffect(() => {
        if(show){
            document.getElementById("popupSkill").className = "visiblePopup";
        } else if (!show){
            document.getElementById("popupSkill").className = "popupBox";
        }
    }, [show])

    //Eventhandlers
    function addSkill(skillGiven){
        let newSkills = [];
        let alreadyIn = false;
        for(let skill of project.skills){
            newSkills.push(skill);
            if(skill === skillGiven){
                alreadyIn = true;
            }
        }

        if(!alreadyIn){
            newSkills.push(skillGiven);
            dispatch(updateSkill(newSkills));
        } else { //Not sure why not working
            prompt("Ferdigheten " + skillGiven + " er allerede koblet opp til prosjektet")
        }
    }

    return(
        <div className="popupBox" id="popupSkill">
            <p>Trykk på nøkkelordet du vil ha</p>
            {fetchedSkills.map((skill, index) => {
                return(
                    <div className="keywordsDiv" key={index}>
                        <button className="wordToSelect" onClick={() => addSkill(skill)}>{skill}</button>
                    </div>
                )
            })}
            <button onClick={onHide} className="closeButton">Lukk vindu</button>
        </div>
    )
}