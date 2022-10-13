//Libraries
import React, { useState } from "react";

//Components
import KeyWord from '../../../assets/KeyWord.png'
import XLetter from '../../../assets/xLetter.png'
import { useSelector } from "react-redux";
import { selectProject } from "../redux/slices/ProjectSlice";
//Styling
import '../../../css/projectKeyWords.css'

export default function ProjectKeyWords () {

    const project = useSelector(selectProject);
    const [keywords, setKeywords] = useState(project.keywords)

    const removeKeyword = (event) => {
        console.log("hello")
        const word2 = document.getElementById("image").value;

        console.log(word2)
        const newKeywords = [];
        for(let word of keywords){
            console.log("-------")
            console.log(event.target.value)
            console.log("-------")

            if(word === event){
                newKeywords.push(word);
            }
        }
        console.log(newKeywords);
    }

    return (
        <div className="keyWorddivAdmin">
        <div className="topPartKeyWordAdmin">
            <img src={KeyWord} alt=""  className="keyWordIconAdmin"/>
            <input type="text" class="headKeyWordAdmin" placeholder="Nøkkelord..."/>
        </div>
        <div className="keywordElementsContainer">
        {keywords.map((keyword, index) => {
            
            return(
                <div class="keyWordElementAdmin" key={index + '-' + keyword}>
            <p className="eachKeyWordElementAdmin">{keyword}</p>
            <div >
            <img src={XLetter} alt="ffs" className="xletterAdmin" id="image" value={index} onClick={removeKeyword}/>
            </div>
        </div>
            )
        })}
        </div>
    </div>
    )
}