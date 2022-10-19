//Libraries
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { generateTimestamp } from "../../../../util/Timestamp";
import Navbar from "../../../../navbar/Navbar";
import { selectProject } from "../../../../redux/slices/ProjectSlice";
import { selectUser } from "../../../../redux/slices/UserSlice";
import { sanitize } from "../../../../util/InputSantizer";
import { addStatusPost } from "../../../../../../api/ProjectAPI/statusBoardAPI";

//Components

//Styling

export default function CreateProjectMessage () {

    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const project = useSelector(selectProject);
    const user = useSelector(selectUser);
    const navigate = useNavigate();

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

            console.log(submission);
            const response = addStatusPost(submission);
            if(response[0]) {
                alert('Feil: Klarte ikke å opprette melding. Ta kontakt med admin for å få hjelp.')
            } else {
                alert('Statusoppdateringen er send')
                navigate('/project');
            }
        } else {
            alert('Tittelen og statusoppdateringen må minimum være ett tegn lang')
        }
    }

    return (
        <>
            <Navbar />
            <div className="application-form">
                <h1 className="application-title">Opprett og post en ny statusmelding til {project.title} prosjektet:</h1>
                <input types='text' onChange={(event) => setTitle(sanitize(event.target.value))} id='motivation-input' className='application-motivation-text' />
                <h3 className="application-error">{error}</h3>
                <div className="application-motivation">
                    <p>Skriv meldingen din:</p>
                    <input types='text' onChange={(event) => setMessage(sanitize(event.target.value))} id='motivation-input' className='application-motivation-text' />
                </div>
                <button onClick={(event) => navigate('/project')}>Avbryt</button>
                <button onClick={handleClick}>Send</button>
            </div>
        </>
    )
}