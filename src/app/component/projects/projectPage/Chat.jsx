//Libraries
import React, { useState} from "react";
import { useDispatch, useSelector } from "react-redux";

//Components
import { sanitize } from "../../util/InputSantizer";
import { generateTimestamp } from '../../util/Timestamp';
import { trimTimestamp } from "../../util/TrimTimestamp";
import { checkUserStatus } from "../../util/CheckContributerStatus";

//API
import { addChatMessage } from "../../../../api/ProjectAPI/chatAPI";

//Redux slices
import { selectUser } from "../../redux/slices/UserSlice";
import { selectProject } from "../../redux/slices/ProjectSlice";
import { addMessage, selectChat } from "../../redux/slices/Chat";

//Styling
import '../../../../css/chat.css'


export default function Chat () {

    //States
    const [inputText, setInputText] = useState('');

    //Hooks
    const project = useSelector(selectProject);
    const user = useSelector(selectUser);
    const chat = useSelector(selectChat);
    const dispatch = useDispatch();

    //Event handlers

    const handleInputChange = (event) => setInputText( sanitize(event.target.value) );

    const updateChat = async () => {
        if (inputText.length !== 0) {
            const payload = {
                text: inputText,
                timestamp: generateTimestamp(),
                username: user.username,
            }
            
            let response = await addChatMessage(payload, project.id);
            response[0] !== 'Unexpected end of JSON input' ? alert('Feil: Klarte ikke å sende melding. Kontakt administrator for hjelp.') : dispatch ( addMessage (payload) );
            setInputText('');
        } else {
            alert('Du må minimum skrive inn 1 tegn for å kunne sende en melding');
        }
    }

    return (
        <div className='chat-box'>
            <h1 className="chat-title">Chat</h1>
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