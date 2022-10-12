import React from "react";

//Components
import Navbar from "../../navbar/Navbar";
import codeSymbol from '../../../../assets/codingIcon.png'

//Style
import '../../../../css/project.css'


export default function ProjectPage (){

    //Industry image - Tittel - Status - Bli med button - Administrate button
    //div
    //Sub Heading
    //Description - KeyWords(comp) - Skills(comp)
    //Chatt(comp)
    //Git history(comp)
    //MessageBoard(comp)
    //UpdateBoard(MessageBoard comp)
    //div/
    return(
        <div>
            <Navbar/>
            <div className="topDivProject">
                <img src={codeSymbol} alt="" className="icon"/>
                <h2>Prosjekt tittel</h2>
                <div className="statusField">
                    <p className="statusText">Startet</p>
                </div>
                <button className="joinButton">Bli med</button>
                <button className="adminButton">Administrer</button>
            </div>
            <div className="projectInfoField">
                <h3 className="projecSubTitle">Prosjekt tittel</h3>
                <p className="descriptionProject">Jeg ønsker å utvikle en web app Jeg ønsker å utvikle en web app Jeg ønsker å utvikle en web app Jeg ønsker å utvikle en web app Jeg ønsker å utvikle en web app Jeg ønsker å utvikle en web app Jeg ønsker å utvikle en web</p>
            </div>
        </div>
    )
}