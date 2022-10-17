import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectStatus } from "../../redux/slices/ContentBoards/StatusBoard/StatusSlice";

export default function Status () {

    const status = useSelector(selectStatus)
    const navigate = useNavigate();

    const navigateBack = () => {
        navigate('/project');
    }

    return (
        <div>
            <button onClick={navigateBack}>Tilbake</button>
            <p>Postet: {status.timestamp}</p>
            <p>Postet av: {status.username}</p>
            <p>{status.text}</p>
        </div>
    )
}