import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProject, set, updateChatLog } from "../../redux/slices/ProjectSlice";
import { patchProject } from "../../../../api/project";

import { santize } from "../../util/InputSantizer";
import { generateTimestamp } from '../../util/Timestamp';
import { selectUser } from "../../redux/slices/UserSlice";
import { addChatMessage } from "../../../../api/chatAPI"

import '../../../../css/chat.css'
import { selectChat } from "../../redux/slices/Chat";

export default function Chat () {

    const [inputText, setInputText] = useState('');
    const project = useSelector(selectProject);
    const user = useSelector(selectUser);
    const chat = useSelector(selectChat);
    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        const sanetizedInput = santize(event.target.value);
        setInputText(sanetizedInput);
    }

    const updateChat = () => {

        const newMessage = {
            text: inputText,
            timestamp: generateTimestamp(),
            username: user.username,
        }

        let response = addChatMessage(newMessage, project.id);
        console.log(response[1]);
        dispatch( addChatMessage(newMessage));
    }

    return (
        <div className='chat-box'>
            <div className='message-box'>
                {chat !== undefined && chat.map((message, index) => {
                    return(
                        <div className="message">
                            <p>{message.timestamp}</p>
                            <p>{message.username + ' : '}</p>
                            <p>{message.text}</p>
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