import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProject, updateChatLog } from "../../redux/slices/ProjectSlice";

import { santize } from "../../util/InputSantizer";

export default function Chat () {

    const [inputText, setInputText] = useState('');
    const project = useSelector(selectProject);
    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        const sanetizedInput = santize(event.target.value);
        setInputText(sanetizedInput);
        project.chat.forEach(message => console.log('Timestamp: ' + message.timestamp + ', Message: ' + message.message));
    }

    const updateChat = () => {
        const time = Math.floor(Date.now() / 1000);
        const newMessage = {
            timestamp: time,
            message: inputText
        }
        const updatedLog = [...project.chat, newMessage];
        dispatch( updateChatLog (updatedLog));
        console.log(project.chat);
    }

    return (
        <div className='chat-box'>
            <div className='message-box'>
                {project.chat.map((message, index) => {
                    return(
                        <div className="message">
                            <p>{message.timestamp}</p>
                            <p>{message.message}</p>
                        </div>
                    )
                })}
            </div>
            <div className='input-box'>
                <input className='input-field' onChange={ handleInputChange } value={ inputText }/>
                <button onClick= {updateChat}>Send</button>
            </div>
        </div>
    )
}