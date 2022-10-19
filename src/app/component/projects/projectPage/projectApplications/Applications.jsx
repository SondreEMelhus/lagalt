import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getApplications } from "../../../../../api/ProjectAPI/projectsAPI";
import { updateApplication } from "../../../redux/slices/Application";
import { selectApplications, updateApplications } from "../../../redux/slices/Applications";
import { selectProject } from "../../../redux/slices/ProjectSlice";

import '../../../../../css/applications.css'

export default function Applications () {

    const project = useSelector(selectProject);
    const applications = useSelector(selectApplications);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        fetchApplications()
    }, [])

    const fetchApplications = async () => {
        const data = await getApplications(project.id);
        if (data) {
            dispatch( updateApplications ( data) );
        }
    }
    
    return (
        <div className="applications-box">
            <h1>Søkere</h1>
            {applications.length === 0 && <h3>Ingen ubehandlede søknader</h3>}
            {applications !== undefined && applications.map((application, index) => {
                return (
                    <div className="application" key={index + '-' + application.id}>
                        <p onClick={(event) => {
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