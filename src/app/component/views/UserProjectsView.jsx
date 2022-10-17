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
import { selectMyProjects } from "../redux/slices/MyProjectsSlice";

export default function MyProjects () {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //Populate skills and keywords in filter

    //TODO: Antar det er protfolio som er en brukers prosjekter??
    return (
        <>
            <Navbar/>
            <p>Mine prosjekter</p>
            <div className="home-body">
                    {user.portfolio.length > 0 && user.portfolio.map((project, index) => {
                        return (
                            <ProjectBanner key={index + '-' + project.id} project={project}/>
                        )
                    })

                }
                </div>

        </>
    )
}