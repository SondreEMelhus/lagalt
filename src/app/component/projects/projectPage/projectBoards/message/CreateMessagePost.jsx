//Libraries
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//Components
import { sanitize } from "../../../../util/InputSantizer";
import { generateTimestamp } from "../../../../util/Timestamp";

//API
import { addMessageBoardPost } from "../../../../../../api/ProjectAPI/messageBoardAPI";

//Redux slices
import { selectUser } from "../../../../redux/slices/UserSlice";
import { selectProject } from "../../../../redux/slices/ProjectSlice";

//Styling

export default function CreateProjectMessage () {

    //Hooks
    const project = useSelector(selectProject);
    const user = useSelector(selectUser);
    const navigate = useNavigate();

    //States
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');

    //Event handlers
    const handleClick = () => {
        if (message.length !== 0 || title.length !== 0) {
            const submission = {
                title: title,
                text: message,
                timestamp: generateTimestamp(),
                username: user.username,
                project: {
                    id: project.id
                }
            }

            const response = addMessageBoardPost(submission);

            if(response[0]) {
                alert('Feil: Klarte ikke å opprette melding. Ta kontakt med admin for å få hjelp.')
            } else {
                alert('Meldingen din er send')
                navigate('/project');
            }
        } else {
            alert('Tittelen og meldingen må minimum være ett tegn lang')
        }
    }

    //Render function
    return (
        <>
            <div className="application-form">
                <h1 className="application-title">Opprett og post en ny melding til {project.title} prosjektet:</h1>
                <div className="application-motivation">
                    <p>Skriv tittel:</p>
                    <form>
                        <textarea onChange={(event) => setTitle(sanitize(event.target.value))} id='motivation-input' className='title-input'></textarea>
                    </form>
                    <p>Skriv meldingen din:</p>
                    <form>
                        <textarea onChange={(event) => setMessage(sanitize(event.target.value))} id='motivation-input' className='application-motivation-text'></textarea>
                    </form>
                </div>
                <button className="send-btn" onClick={handleClick}>Send</button>
                <button className="cancel-btn" onClick={(event) => navigate('/project')}>Avbryt</button>
            </div>
        </>
    )
}