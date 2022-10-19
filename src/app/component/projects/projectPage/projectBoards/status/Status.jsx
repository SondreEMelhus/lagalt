import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectStatus } from "../../../../redux/slices/ContentBoards/StatusBoard/StatusSlice";

import '../../../../../../css/contentItem.css'
import Navbar from "../../../../navbar/Navbar";
import { trimTimestamp } from "../../../../util/TrimTimestamp";

export default function Status () {

    const status = useSelector(selectStatus)
    const navigate = useNavigate();

    const navigateBack = () => {
        navigate('/project');
    }

    return (
        <div className="item">
            <Navbar />
            <button onClick={navigateBack} className="item-btn">Tilbake</button>
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