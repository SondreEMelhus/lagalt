import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProject } from "../../redux/slices/ProjectSlice";

import { sanitize } from "../../util/InputSantizer";
import { generateTimestamp } from '../../util/Timestamp';
import { selectUser } from "../../redux/slices/UserSlice";
import { selectChat } from "../../redux/slices/Chat";
import { getChat, addChatMessage } from "../../../../api/ProjectAPI/chatAPI";


import '../../../../css/chat.css'
import { trimTimestamp } from "../../util/TrimTimestamp";


export default function Chat () {

    const [inputText, setInputText] = useState('');
    const project = useSelector(selectProject);
    const user = useSelector(selectUser);
    const chat = useSelector(selectChat);
    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        setInputText(sanitize(event.target.value));
    }

    const updateChat = () => {

        const newMessage = {
            text: inputText,
            timestamp: generateTimestamp(),
            username: user.username,
            project: project
        }

        let response = addChatMessage(newMessage, project.id);
        console.log(response[1]);
        dispatch( addChatMessage(newMessage));
    }

    return (
        <div className='chat-box'>
            <h1>Chat</h1>
            <div className='message-box'>
                {chat.length === 0 && <h3 className="no-message">Ingen meldinger er sendt enda</h3>}
                {chat !== undefined && chat.map((message, index) => {
                    return(
                        <div className="message" key={index}>
                            <p>{trimTimestamp (message.timestamp)}</p>
                            <p>{message.username + ' : '}</p>
                            <p>{message.text}</p>
                        </div>
                    )
                })}
            </div>
            <div className='input-box'>
                <input className='input-field' onChange={ handleInputChange } value={ inputText }/>
                <button onClick= {updateChat} className="input-btn">Send</button>
            </div>
        </div>
    )
}