//Libraries
import React from "react";

//Components
import Navbar from "../navbar/Navbar";
import ProjectBanner from "../projects/ProjectBanner";

//Styling
import '../../../css/home.css'

export default function HomePage () {

    return (
        <div>
            <Navbar />
            <div className="home-outer-body">
                <div className="home-body">
                    <ProjectBanner />
                    <ProjectBanner />
                    <ProjectBanner />
                    <ProjectBanner />
                    <ProjectBanner />
                    <ProjectBanner />
                    <ProjectBanner />
                    <ProjectBanner />
                </div>
            </div>
        </div>
    )
}