import React, { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProject } from "../../redux/slices/ProjectSlice";

import { sanitize } from "../../util/InputSantizer";
import { generateTimestamp } from '../../util/Timestamp';
import { selectUser } from "../../redux/slices/UserSlice";
import { addMessage, selectChat } from "../../redux/slices/Chat";
import { getChat, addChatMessage } from "../../../../api/ProjectAPI/chatAPI";

import '../../../../css/chat.css'
import { trimTimestamp } from "../../util/TrimTimestamp";
import { checkUserStatus } from "../../util/CheckContributerStatus";


export default function Chat () {

    const [inputText, setInputText] = useState('');
    const project = useSelector(selectProject);
    const user = useSelector(selectUser);
    const chat = useSelector(selectChat);
    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        setInputText(sanitize(event.target.value));
    }

    const updateChat = async () => {
        const payload = {
            text: inputText,
            timestamp: generateTimestamp(),
            username: user.username,
        }
        
        let response = await addChatMessage(payload, project.id);
        if (response[0]) {
            alert('Feil: Klarte ikke å sende melding. Kontakt administrator for hjelp.')
        } else {
            dispatch ( addMessage ( payload ))
        }
    }

    const handleChatRefresh = async () => {
        const response = await getChat(project.id);
        if (response[0]) {
            alert('Feil: klarte ikke å hente chat. Kontakt administrator for hjelp.')
        } else {
            if (response[1].length !== 0) {
                const data = response[1];
            } 
        }
    }

    return (
        <div className='chat-box'>
            <h1>Chat</h1>
            {/*<button onClick={handleChatRefresh}>Refresh</button>*/}
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
            {checkUserStatus(project, user) && 
                <div className='input-box'>
                    <input className='input-field' onChange={ handleInputChange } value={ inputText }/>
                    <button onClick= {updateChat} className="input-btn">Send</button>
                </div>
            }
        </div>
    )
}