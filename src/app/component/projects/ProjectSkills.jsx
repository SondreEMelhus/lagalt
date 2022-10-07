//Libraries
import React from "react";

//Components
import SkillIcon from '../../../assets/Skillicon.png'
import XLetter from '../../../assets/xLetter.png'
//Styling
import '../../../css/projectSkills.css'

export default function ProjectSkills () {

    return (
        <div className="skillsdivAdmin">
        <div className="topPartSkillAdmin">
            <img src={SkillIcon} alt=""  className="skillIconAdmin"/>
            <input type="text" class="headSkillAdmin" placeholder="Ferdigheter..."/>
        </div>
        <div class="skillElementAdmin">
            <p className="eachSkillElementAdmin">Guitar</p>
            <img src={XLetter} alt="" className="xletterAdmin"/>
        </div>
    </div>
    )
}