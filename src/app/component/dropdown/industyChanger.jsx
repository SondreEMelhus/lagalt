//Libraries
import React from "react";

//Components
import musicNote from '../../../assets/musicalNote.png'
import videoIcon from '../../../assets/videoIcon.png'
import codingIcon from '../../../assets/codingIcon.png'
import playIcon from '../../../assets/playIcon.png'
import { updateIndustry } from "../redux/slices/ProjectSlice";


//Styling
import '../../../css/industryChanger.css'
import { waitFor } from "@testing-library/react";
import { useDispatch } from "react-redux";

export default function IndusrtyChanger (industry) {

    let currentIndustry = industry.industry;
    let currentIcon = getIndustryIcon();
    const iconList = [musicNote, videoIcon, codingIcon, playIcon];
    const dispatch = useDispatch();


    const dropDownClicked = (icon) => {
        currentIcon = icon;
        document.getElementById("hideDiv").className = "hideDiv"
        document.getElementById("selectedIcon").src = icon;
        const indu = getIndustryForIcon(icon);
        dispatch(updateIndustry(indu));
    }

    const openDiv = () =>{
        document.getElementById("hideDiv").className="hideDivShow"
    }

    function getIndustryIcon(){
        if(currentIndustry === "Musikk"){
            return musicNote;
        }else if(currentIndustry === "Film"){
            return videoIcon;
        }else if (currentIndustry === "Webutvikling"){
            return codingIcon;
        }else if (currentIndustry === "Spillutvikling"){
            return playIcon;
        }
    }

    function getIndustryForIcon(icon){
        if(icon === musicNote){
            return "Musikk";
        }else if(icon === codingIcon){
            return "Webutvikling";
        }else if (icon === playIcon){
            return "Spillutvikling";
        }else if (icon === videoIcon){
            return "Film";
        }
    }


    function changeIcon(){

    }

    return (
        <div class="musicNoteBox">
            <img src={currentIcon} alt="" className="musicNoteAdmin" onClick={openDiv} id="selectedIcon"/>
            <div className="hideDiv" id="hideDiv">
            {iconList.map((icon) => {
                return(
                    <div className="dropDownDiv" id="dropDownDivDisplay">
                        <img src={icon} alt="" className="musicNoteAdminDropDown" onClick={() => dropDownClicked(icon)}/>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}