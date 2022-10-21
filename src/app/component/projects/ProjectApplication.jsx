//Libraries
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addApplication } from "../../../api/ProjectAPI/projectsAPI";
import Navbar from "../navbar/Navbar";
import { selectProject } from "../redux/slices/ProjectSlice";
import { selectUser } from "../redux/slices/UserSlice";
import { sanitize } from "../util/InputSantizer";

//Components

//Styling

export default function ProjectApplication () {

    const [motivation, setMotvation] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [error, setError] = useState('');
    const project = useSelector(selectProject);
    const user = useSelector(selectUser);
    const navigate = useNavigate();

    const handleClick = () => {
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
            response  ? navigate('/project') : console.log('Could not create application');
        } else {
            setError('Du må godta å dele informasjonen din med prosjekt eier og administratorer')
        }
    }

    const handleChecked = () => {
        if (isChecked) {
            setError('');
            setIsChecked(false);
        } else {
            setError('');
            setIsChecked(true);
        }
    }

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
                    <input className="information-approval-checkbox" type="checkbox" onClick={handleChecked}></input>
                </div>
                <h3 className="application-error">{error}</h3>
                <button className="application-button" onClick={handleClick}>Send inn søknad</button>
            </div>
        </>
    )
}