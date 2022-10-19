import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { approveApplication, declineApplication } from "../../../../../api/ProjectAPI/projectsAPI";
import Navbar from "../../../navbar/Navbar";
import { selectApplication} from '../../../redux/slices/Application'

export default function Application () {

    //application slice
    const application = useSelector(selectApplication);
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
            <h1>Søknad fra {application.username}</h1>
            <h3>Søknadstekst</h3>
            <p>{application.motivation}</p>
            <div>
                <button onClick={handleApprove}>Godkjenn</button>
                <button onClick={handleDecline}>Avslå</button>
            </div>
        </div>
    )
}