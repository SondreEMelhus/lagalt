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
import KeyWord from '../../../../assets/key-svgrepo-com.svg'
import XLetter from '../../../../assets/xLetter.png'

/**
 * Component used to render and manage a projects keywords
 */
export default function ProjectKeyWords () {

    //States
    const[fetchedKeywords, setFetchedKeywords] = useState([])
    const [show, setShow] = useState(false);

    const project = useSelector(selectProject);
    const keywords = (project.keywords);

    //Hooks
    const dispatch = useDispatch();

    //Event handlers

    /**
     * OnClick event handler that is used to remove a keyword from a project
     */
    const removeKeyword = (event) => {
        const newKeywords = [];
        keywords.forEach(word => word !== event ? newKeywords.push(word) : null);
        dispatch(updateKeywords(newKeywords));
    }

    /**
     * OnClick event handler that is used to show all selected keywords 
     */
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

    //Render function
    return (
        <div className="keyWorddivAdmin">
        <div className="topPartKeyWordAdmin">
            <img src={KeyWord} alt=""  className="keyWordIconAdmin"/>
            <p className="skillTitle">Nøkkelord</p>
            <button onClick={() => showKeywordSelection()} className="input-btn">Legg til</button>
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