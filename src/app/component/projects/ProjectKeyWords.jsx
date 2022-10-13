//Libraries
import React, { useState } from "react";

//Components
import KeyWord from '../../../assets/KeyWord.png'
import XLetter from '../../../assets/xLetter.png'
import { useDispatch, useSelector } from "react-redux";
import { selectProject, updateKeywords } from "../redux/slices/ProjectSlice";
import ProjectKeyWordsPopup from "./ProjectKeywordsPopup";
import { getKeyWordsOfIndustry } from "../../../api/attributes";

//Styling
import '../../../css/projectKeyWords.css'

export default function ProjectKeyWords () {

    const project = useSelector(selectProject);
    const keywords = (project.keywords)
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const[fetchedKeywords, setFetchedKeywords] = useState([])


    function removeKeyword (event){
        const newKeywords = [];
        for(let word of keywords){
            if(word != event){
                newKeywords.push(word);
            }
        }
        dispatch(updateKeywords(newKeywords));
    }

    async function showKeywordSelection(){
        console.log("hello")
       setShow(true);
       const allKeywords = await getKeyWordsOfIndustry()
       let keywords = []
       allKeywords.forEach(word => keywords.push(word.title));
       setFetchedKeywords(keywords);
    }
    function hide(){
        setShow(false);
    }


    return (
        <div className="keyWorddivAdmin">
        <div className="topPartKeyWordAdmin">
            <img src={KeyWord} alt=""  className="keyWordIconAdmin"/>
            <button onClick={() => showKeywordSelection()} className="addKeyWordButton">Legg til</button>
        </div>
        <div className="keywordElementsContainer">
        {keywords.map((keyword, index) => {
            return(
                <div class="keyWordElementAdmin" key={index}>
            <p className="eachKeyWordElementAdmin">{keyword}</p>
            <div onClick={() => removeKeyword(keyword)} id="give" value={keyword}>
            <img src={XLetter} alt="" className="xletterAdmin" id="image" value={keyword}/>
            </div>
        </div>
            )
        })}
        </div>
        <ProjectKeyWordsPopup show={show} onHide={hide} fetchedKeywords={fetchedKeywords}/>
    </div>
    )
}