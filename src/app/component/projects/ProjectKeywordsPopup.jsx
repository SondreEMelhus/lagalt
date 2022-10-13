import React, { useEffect, useState } from "react";

//components
import XLetter from '../../../assets/xLetter.png'
import { getKeyWordsOfIndustry } from "../../../api/attributes";
import { selectProject, updateKeywords } from "../redux/slices/ProjectSlice";


//Styling
import '../../../css/projectKeywordPopup.css'
import { useDispatch, useSelector } from "react-redux";

export default function ProjectKeyWordsPopup({show, onHide, fetchedKeywords}){

    const project = useSelector(selectProject);
    const dispatch = useDispatch();

    useEffect(() => {

        if(show){
            document.getElementById("popup").className = "visiblePopup";
        }else if(!show){
            document.getElementById("popup").className = "popupBox";
        }

    }, [show])

    function addKeyword(keyword){
        const newKeywords = [];
        const alreadyIn = false;
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
            console.log("Keyword already in project keywords");
        }
    }

    return(
        <div className="popupBox" id="popup">
            <p>Trykk på nøkkelordet du vil ha</p>
            {fetchedKeywords.map((word) => {
                return(
                    <div className="keywordsDiv">
                        <button className="wordToSelect" onClick={() => addKeyword(word)}>{word}</button>
                    </div>
                )
            })}
            <button onClick={onHide} className="closeButton">Lukk vindu</button>
        </div>
    )
}