//Libraries
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { selectProject } from "../redux/slices/ProjectSlice";
import { selectUser } from "../redux/slices/UserSlice";

//Components

//Styling

export default function ProjectApplication () {

    const [motivation, setMotvation] = useState('');
    const project = useSelector(selectProject);
    const user = useSelector(selectUser);
    const navigate = useNavigate();

    const handleChange = (event) => {
        setMotvation(event.target.value);
    }

    const handleClick = () => {
        const submission = {
            motivation: motivation,
            status: 'Ikke behandlet',
            account: user
        }
        console.log(submission);
        navigate('/project')
    }

    return (
        <>
            <Navbar />
            <div>
                <h1>Søknad om å bli med i {project.title} prosjektet</h1>
                <div>
                    <p>Hvorfor vil jeg bli med i prosjektet:</p>
                    <input types='text' onChange={handleChange} id='motivationText' className='application-motivation-text' />
                </div>
                <button onClick={handleClick}>Send inn søknad</button>
            </div>
        </>
    )
}