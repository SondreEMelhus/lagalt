//Libraries
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//Components
import ProjectKeyWordsPopup from "../ProjectKeywordsPopup";
import { getKeyWordsOfIndustry } from "../../../../api/attributes";

//Redux slices
import { selectProject, updateKeywords } from "../../redux/slices/ProjectSlice";

//Styling
import '../../../../css/projectKeyWords.css'
import KeyWord from '../../../../assets/KeyWord.png'
import XLetter from '../../../../assets/xLetter.png'

export default function ProjectKeyWords () {

    //States
    const[fetchedKeywords, setFetchedKeywords] = useState([])
    const [show, setShow] = useState(false);

    const project = useSelector(selectProject);
    const keywords = (project.keywords);

    //Hooks
    const dispatch = useDispatch();

    //Event handlers
    const removeKeyword = (event) => {
        const newKeywords = [];
        keywords.forEach(word => word !== event ? newKeywords.push(word) : null);
        dispatch(updateKeywords(newKeywords));
    }

    const showKeywordSelection = async () => {
        setShow(true);
        let keywords = []
        const allKeywords = await getKeyWordsOfIndustry(project.industry);
        allKeywords.forEach(word => keywords.push(word.title));
        setFetchedKeywords(keywords);
    }

    const hide = () => {
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