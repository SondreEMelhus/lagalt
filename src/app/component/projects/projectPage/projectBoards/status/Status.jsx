//Libraries
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//Components
import { trimTimestamp } from "../../../../util/TrimTimestamp";

//Redux slices
import { selectStatus } from "../../../../redux/slices/ContentBoards/StatusBoard/StatusSlice";

//Styling
import '../../../../../../css/contentItem.css'


export default function Status () {

    //Hooks
    const status = useSelector(selectStatus)
    const navigate = useNavigate();

    //Render function
    return (
        <div className="item">
            <button onClick={() => navigate('/project')} className="item-btn">Tilbake</button>
            <div className="item-content">
                <p className="item-timestamp">Postet: {trimTimestamp(status.timestamp)}</p>
                <p className="item-username">Postet av: {status.username}</p>
                <h1 className="item-title">{status.title}</h1>
                <div className="item-text-box">
                    <p className="item-text">{status.text}</p>
                </div>
            </div>
        </div>
    )
}