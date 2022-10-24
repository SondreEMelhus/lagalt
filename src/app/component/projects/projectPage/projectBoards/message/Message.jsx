//Libraries
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//Components
import { trimTimestamp } from "../../../../util/TrimTimestamp";

//Redux slices
import { selectMessage } from "../../../../redux/slices/ContentBoards/MessageBoard/MessageSlice";

//Styling
import '../../../../../../css/contentItem.css'

/**
 * Component used to render and manage a message in a projects messageboard
 */
export default function Message () {

    //Hooks
    const message = useSelector(selectMessage);
    const navigate = useNavigate();

    //Render function
    return (
        <div className="item">
            <button onClick={() => navigate('/project')} className="item-btn">Tilbake</button>
            <div className="item-content">
                <p className="item-timestamp">Postet: {trimTimestamp(message.timestamp)}</p>
                <p className="item-username">Postet av: {message.username}</p>
                <h1 className="item-title">{message.title}</h1>
                <div className="item-text-box">
                    <p obj={message} className="item-text">{message.text}</p>
                </div>
            </div>
        </div>
    )
}