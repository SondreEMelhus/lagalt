import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectMessage } from "../../redux/slices/ContentBoards/MessageBoard/MessageSlice";

export default function Message () {

    const message = useSelector(selectMessage);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(message);
    })

    const navigateBack = () => {
        navigate('/project');
    }

    return (
        <div>
            <button onClick={navigateBack}>Tilbake</button>
            <p>Postet: {message.timestamp}</p>
            <p>Postet av: {message.username}</p>
            <h1>{message.title}</h1>
            <p obj={message}>{message.text}</p>
        </div>
    )
}