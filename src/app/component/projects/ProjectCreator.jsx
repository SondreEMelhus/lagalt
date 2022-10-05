//Libraries
import React from "react";

//Components
import Navbar from "../navbar/Navbar";

//Styling
import '../../../css/projectCreator.css'


export default function ProjectCreator () {

    return (
        <>
        <Navbar/>
            <h2 className="head">Opprett et nytt prosjekt</h2>
        <div>
            <p>Tittel</p>
        </div>
        </>
    )
}