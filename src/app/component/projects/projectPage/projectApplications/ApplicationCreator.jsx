//Libraries
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//Components
import { sanitize } from "../../../util/InputSantizer";

//API
import { addApplication } from "../../../../../api/ProjectAPI/projectsAPI";

//Redux slices
import { selectUser } from "../../../redux/slices/UserSlice";
import { selectProject } from "../../../redux/slices/ProjectSlice";

//Styling

/**
 * Component used to manage and handle the process of creating an application for a project
 */
export default function ApplicationCreator () {

    //Hooks
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    const project = useSelector(selectProject);

    //States
    const [motivation, setMotvation] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    //Event handlers
    
    /**
     * Method used to submit a project application
     */
    const handleSubmit = () => {
        if (isChecked) {
            const submission = {
                motivation: motivation,
                status: "Pending",
                account: {
                id: user.id
                },
                project: {
                id: project.id
                }
            }

            const response = addApplication(submission);

            response  ? navigate('/project') : alert('Feil: Klarte ikke å opprette søknad. Kontakt en administator for å få hjelp');
        } else {
            alert('Du må godta å dele informasjonen din med prosjekt eier og administratorer')
        }
    }

    //Render function
    return (
        <>
            <div className="application-form">
                <h1 className="application-title">Søknad om å bli med i {project.title} prosjektet</h1>
                <div className="application-motivation">
                    <p>Hvorfor vil jeg bli med i prosjektet:</p>
                    <form>
                        <textarea onChange={(event) => setMotvation(sanitize(event.target.value))} id='motivation-input' className='application-motivation-text'></textarea>
                    </form>
                </div>
                <div className="information-request">
                    <label>Jeg godtar at prosjekt eier og administrator får tilgang til all informasjon som ligger på min profil:</label>
                    <input className="information-approval-checkbox" type="checkbox" onClick={() => isChecked ? setIsChecked(false) : setIsChecked(true)}></input>
                </div>
                <button className="application-button" onClick={handleSubmit}>Send inn søknad</button>
            </div>
        </>
    )
}