//Libraries
import React from "react";

//Components
import musicNote from '../../../assets/musicalNote.png'
import videoIcon from '../../../assets/videoIcon.png'
import codingIcon from '../../../assets/codingIcon.png'


//Styling
import '../../../css/industryChanger.css'

export default function IndusrtyChanger () {

    let currentIcon = musicNote;
    const iconList = [musicNote, videoIcon]
    const dropDownClicked = (icon) => {
        console.log(currentIcon)
        console.log(icon)
        currentIcon = icon;
        document.getElementById("dropDown").className = "dropDownDiv"
        document.getElementById("selectedIcon").src = icon;
    }
    let clicked = false;

    const openDiv = event =>{
        document.getElementById("dropDown").className="dropDownDiv"
    }


    function changeIcon(){

    }

    return (
        <div class="musicNoteBox">
            <img src={currentIcon} alt="" className="musicNoteAdmin" onClick={openDiv} id="selectedIcon"/>
            {iconList.map((icon) => {
                return(
                    <div key={icon} className="dropDownDivHide" id="dropDown">
                        <img src={icon} alt="" className="musicNoteAdminDropDown" onClick={() => dropDownClicked(icon)}/>
                    </div>

            )
            })}
        </div>
    )
}