import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectMessage } from "../../../../redux/slices/ContentBoards/MessageBoard/MessageSlice";

import '../../../../../../css/contentItem.css'
import Navbar from "../../../../navbar/Navbar";
import { trimTimestamp } from "../../../../util/TrimTimestamp";

export default function Message () {

    const message = useSelector(selectMessage);
    const navigate = useNavigate();

    const navigateBack = () => {
        navigate('/project');
    }

    return (
        <div className="item">
            <button onClick={navigateBack} className="item-btn">Tilbake</button>
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