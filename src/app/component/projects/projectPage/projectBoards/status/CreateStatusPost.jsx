//Libraries
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//Components
import { sanitize } from "../../../../util/InputSantizer";
import { generateTimestamp } from "../../../../util/Timestamp";

//API
import { addStatusPost } from "../../../../../../api/ProjectAPI/statusBoardAPI";

//Redux slices
import { selectUser } from "../../../../redux/slices/UserSlice";
import { selectProject } from "../../../../redux/slices/ProjectSlice";

//Styling
import '../../../../../../css/createStatus.css'

/**
 * Component repsonsible for rendering and manageing the process of creating a project status post
 */
export default function CreateProjectMessage () {

    //States
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
  
    //Hooks
    const project = useSelector(selectProject);
    const user = useSelector(selectUser);
    const navigate = useNavigate();

    //Event handlers

    /**
     * Method used to submit a new status post to the statusboard of a project
     */
    const handleSubmit = async () => {
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

            const response = await addStatusPost(submission);

           
            if(response[0] !== 'Unexpected end of JSON input') {
                alert('Feil: Klarte ikke å opprette melding. Ta kontakt med admin for å få hjelp.')
            } else {
                alert('Statusoppdateringen er send')
                navigate('/project');
            }

        } else {
            alert('Tittelen og statustekst må minimum være ett tegn lang')
        }
    }

    //Render function
    return (
        <>
            <div className="application-form">
                <h1 className="application-title">Opprett og post en ny statusmelding til {project.title} prosjektet:</h1>
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
                <button className="send-btn" onClick={handleSubmit}>Send</button>
                <button className="cancel-btn" onClick={() => navigate('/project')}>Avbryt</button>
            </div>
        </>
    )
}