//Libraries
import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//API
import { getApplications } from "../../../../../api/ProjectAPI/projectsAPI";

//Redux slices
import { selectProject } from "../../../redux/slices/ProjectSlice";
import { updateApplication } from "../../../redux/slices/Application";
import { selectApplications, updateApplications } from "../../../redux/slices/Applications";

//Styling
import '../../../../../css/applications.css'


/**
 * Component used to render all the applications for a project.
 */
export default function ApplicationsRenderer () {

    //Hooks
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const project = useSelector(selectProject);
    const applications = useSelector(selectApplications);

    useEffect(() => {
        fetchApplications()
    }, [])

    /**
     * Method that fetches all applications for a project
     */
    const fetchApplications = async () => {
        const data = await getApplications(project.id);
        if (data) {
            dispatch( updateApplications ( data) );
        }
    }
    
    //Render function
    return (
        <div className="applications-box">
            <h1 className="applicationTitle">Søkere</h1>
            {applications.length === 0 && <h3 className="applications-no-apps">Ingen ubehandlede søknader</h3>}
            {applications !== undefined && applications.map((application, index) => {
                return (
                    <div className="application" key={index + '-' + application.id}>
                        <p className="applicationName" onClick={(event) => {
                            dispatch( updateApplication(application));
                            navigate('/application');
                        }}
                        >{application.username}</p>
                    </div>
                )
            })}
        </div>
    ) 
}