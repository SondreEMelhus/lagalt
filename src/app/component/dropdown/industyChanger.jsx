//Libraries
import React from "react";
import { useDispatch } from "react-redux";
//icons
import musicNote from '../../../assets/note-svgrepo-com.svg'
import videoIcon from '../../../assets/movie-camera-svgrepo-com.svg'
import codingIcon from '../../../assets/video-game-control-svgrepo-com.svg'
import playIcon from '../../../assets/coding-svgrepo-com.svg'
//Redux slices
import { updateIndustry } from "../redux/slices/ProjectSlice";
import { updateSkill } from "../redux/slices/ProjectSlice";
import { updateKeywords } from "../redux/slices/ProjectSlice";


//Styling
import '../../../css/industryChanger.css'
import musicNote from '../../../assets/musicalNote.png'
import videoIcon from '../../../assets/videoIcon.png'
import codingIcon from '../../../assets/codingIcon.png'
import playIcon from '../../../assets/playIcon.png'


/**
 * Component responsible for handling and changing the currently chosen industry.
 */
export default function IndusrtyChanger (industry) {

    //States
    const iconList = [musicNote, videoIcon, codingIcon, playIcon];
    let currentIndustry = industry.industry;
    let currentIcon = getIndustryIcon();
   
    //Hooks
    const dispatch = useDispatch();

    //Event handlers

    /**
     * OnClick method that handles click actions on the icon dropdown.
     */
    const dropDownClicked = (icon) => {
        currentIcon = icon;
        document.getElementById("hideDiv").className = "hideDiv"
        document.getElementById("selectedIcon").src = icon;
        const indu = getIndustryForIcon(icon);
        dispatch(updateIndustry(indu));
        dispatch(updateSkill([]));
        dispatch(updateKeywords([]));
    }

    /**
     * Method used to change the className of given div
     */
    const openDiv = () =>{
        document.getElementById("hideDiv").className="hideDivShow"
    }

    /**
     * Method used to retrive the icon mathcing the currently chosen industry
     */
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

    /**
     * Method used to retrive the industry matching a chosen icon
     */
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

    //Render function
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