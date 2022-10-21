//Libraries
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//Components
import BubbleList from "../../../bubbleList/BubbleList";

//API
import { approveApplication, declineApplication } from "../../../../../api/ProjectAPI/projectsAPI";

//Redux slices
import { selectUser } from "../../../redux/slices/UserSlice";
import { selectApplication} from '../../../redux/slices/Application'

//Styling
import '../../../../../css/application.css'

/**
 * Component used to manage and handle the process of handling a project application.
 */
export default function ApplicationHandler () {

    //Hooks
    const navigate = useNavigate()
    const user = useSelector(selectUser);
    const application = useSelector(selectApplication);

    //Event handlers

    /**
     * Method used to a approve a project application.
     */
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

    /**
     * Method used to decline a project application
     */
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

    //Render function
    return (
        <div>
            <button onClick={() => navigate('/project')}>Tilbake</button>
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