//Libraries
import React from "react";

//Components
import KeyWord from '../../../assets/KeyWord.png'
import XLetter from '../../../assets/xLetter.png'
//Styling
import '../../../css/projectKeyWords.css'

export default function ProjectKeyWords () {

    return (
        <div className="keyWorddivAdmin">
        <div className="topPartKeyWordAdmin">
            <img src={KeyWord} alt=""  className="keyWordIconAdmin"/>
            <input type="text" class="headKeyWordAdmin" placeholder="Nøkkelord..."/>
        </div>
        <div class="keyWordElementAdmin">
            <p className="eachKeyWordElementAdmin">Guitar</p>
            <img src={XLetter} alt="" className="xletterAdmin"/>
        </div>
    </div>
    )
}