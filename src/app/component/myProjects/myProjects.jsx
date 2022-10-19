//Libraries
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


//Components
import {update} from '../redux/slices/MyProjectsSlice';
import { updateAdminProject } from "../redux/slices/AdminSlice";
import { getProjects } from "../../../api/project";
import {selectUser, userSlice} from '../redux/slices/UserSlice'

import Navbar from "../navbar/Navbar";
import ProjectBanner from "../projects/ProjectBanner";


//Styling
import '../../../css/profile.css'
import { selectUserProjects } from '../redux/slices/UserProjects'
import { getUserProjects } from "../../../api/fetchUserAPI";
import { updateUserProjects } from "../redux/slices/UserProjects";

export default function MyProjects () {

    const user = useSelector(selectUser);
    const userProjects = useSelector(selectUserProjects);
    const dispatch = useDispatch();

    //Populate skills and keywords in filter
    useEffect(() => {
        fetchProjects();
    }, [])

    const fetchProjects = async () => {
        const result = await getUserProjects(user.id);

        if (result[0] !== null) {
            alert('Feil: Kunne ikke hente dine prosjekter. Kontakt en administrator.')
        } else {
            console.log(result[1]);
            dispatch( updateUserProjects (result[1]));
        }
    }

    //TODO: Antar det er protfolio som er en brukers prosjekter??
    return (
        <>
            <Navbar/>
            <p>Mine prosjekter</p>
            <div className="home-body">
                    {userProjects.length === 0 && <h3 className="no-message">Du har ingen prosjekter</h3>}
                    {userProjects !== undefined && userProjects.map((project, index) => {
                        return (
                            <ProjectBanner key={index + '-' + project.id} project={project}/>
                        )
                    })

                    }
                </div>

        </>
    )
}
