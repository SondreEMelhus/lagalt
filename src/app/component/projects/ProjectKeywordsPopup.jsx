import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//components
import { selectProject, updateKeywords } from "../redux/slices/ProjectSlice";

//Styling
import '../../../css/projectKeywordPopup.css'

/**
 * Component responsible for rendering and manageing a popupbox contiaing all selctable keywords 
 */
export default function ProjectKeyWordsPopup({show, onHide, fetchedKeywords}){

    //Hooks
    const project = useSelector(selectProject);
    const dispatch = useDispatch();

    useEffect(() => {

        if(show){
            document.getElementById("popup").className = "visiblePopup";
        }else if(!show){
            document.getElementById("popup").className = "popupBox";
        }

    }, [show])


    /**
     * Method used to add a keyword to the project
     */
    const addKeyword = (keyword) => {
        let newKeywords = [];
        let alreadyIn = false;
        for(let word of project.keywords){
            newKeywords.push(word);
            if(word === keyword){
                alreadyIn = true;
            }
        }
        if(!alreadyIn){
            newKeywords.push(keyword);
            dispatch(updateKeywords(newKeywords));
        }else{
            alert("Nøkkelordet er allerede lagt til prosjektet");
        }
    }

    //Render function
    return(
        <div className="popupBox" id="popup">
            <p>Trykk på nøkkelordet du vil ha</p>
            <div className="popupContent">
            {fetchedKeywords.map((word, index) => {
                return(
                    <div className="keywordsDiv" key={index}>
                        <button className="wordToSelect" onClick={() => addKeyword(word)}>{word}</button>
                    </div>
                )
            })}
            </div>
            <button onClick={onHide} className="closeButton">Lukk vindu</button>
        </div>
    )
}