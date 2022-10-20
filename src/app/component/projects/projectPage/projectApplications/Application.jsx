import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { approveApplication, declineApplication } from "../../../../../api/ProjectAPI/projectsAPI";
import BubbleList from "../../../bubbleList/BubbleList";
import Navbar from "../../../navbar/Navbar";
import { selectApplication} from '../../../redux/slices/Application'
import { selectUser } from "../../../redux/slices/UserSlice";

import '../../../../../css/application.css'

export default function Application () {

    //application slice
    const application = useSelector(selectApplication);
    const user = useSelector(selectUser);
    const navigate = useNavigate()

    const handleBack = () => {
        navigate('/project');
    }

    const handleApprove = async () => {
        const response = await approveApplication(application.id);
        if (!response[0]) {
            alert('Feil: Klarte ikke å godkjenne søknaden. Kontakt administrator for hjelp.');
            navigate('/project');
        } else {
            alert('Søknad godkjent');
            navigate('/project');
        }
    }
//
    const handleDecline = async () => {
        const response = await declineApplication(application.id);
        if (!response[0]) {
            alert('Feil: Klarte ikke å avvise søknaden. Kontakt administrator for hjelp.');
            navigate('/project');
        } else {
            alert('Søknad avvist');
            navigate('/project');
        }
    }

    return (
        <div>
            <Navbar />
            <button onClick={handleBack}>Tilbake</button>
            <div className="application-box">
                <h1 className="application-title">Søknad fra {application.username}</h1>
                <div className="application-skills">
                    <h3>Ferdigheter:</h3>
                    <div className="application-infobox">
                        {user.skills.length !== 0 ? <BubbleList list={user.skills} /> : <p>Brukeren har ikke fylt inn noen ferdigheter</p>}
                    </div>
                </div>
                <div className="application-portfolio">
                    <h3>Portfolio:</h3>
                    <div className="application-infobox">
                    {user.portfolio !== null ? <p>{user.portfolio}</p> : <p>Brukeren har ikke fylt inn portfolio</p>}
                    </div>
                </div>
                <div className="application-description">
                    <h3>Beskrivelse:</h3>
                    <div className="application-infobox">
                    {user.description !== null ? <p>{user.description}</p> : <p>Brukeren har ikke fylt inn beskrivelse</p>}
                    </div>
                </div>
                <h3>Søknadstekst</h3>
                <div className="application-infobox">
                    <p>{application.motivation}</p>
                </div>
                <div className="application-btns">
                    <button onClick={handleApprove} className="application-approve">Godkjenn</button>
                    <button onClick={handleDecline} className="application-decline">Avslå</button>
                </div>
            </div>
        </div>
    )
}