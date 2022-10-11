//Libraries
import React from "react";

//Components
import Navbar from "../navbar/Navbar";
import ProjectBanner from "../projects/ProjectBanner";

//Styling
import '../../../css/home.css'
import { useSelector } from "react-redux";
import { selectProjects } from "../redux/slices/ProjectsSlice";

export default function HomePage () {

    const projects = useSelector(selectProjects)

    return (
        <div>
            <Navbar />
            <div className="home-outer-body">
                <div className="home-body">
                    {projects.map((project, index) => {
                        return (
                            <ProjectBanner key={index + '-' + project.id} project={project} />
                        )
                    })

                    }
                </div>
            </div>
        </div>
    )
}