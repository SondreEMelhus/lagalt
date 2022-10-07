//Libraries
import React from "react";

//Components
import People from '../../../assets/people.png'
import Person from '../../../assets/person.png'
import CheckMark from '../../../assets/checkMark.png'
import Decline from '../../../assets/decline.png'
//Styling
import '../../../css/projectApplicants.css'

export default function ProjectApplicants () {

    return (
        <div className="applicantsDivAdmin">
        <div className="topPartApplicantsAdmin">
            <img src={People} alt=""  className="applicantsIconAdmin"/>
            <p className="headApplicantsAdmin">Forespørsler</p>
        </div>
        <div class="applicantCard">
            <img src={Person} alt="" className="iconsApplicants"/>
            <p className="applicantName">Ola Nordmann</p>
            <img src={CheckMark} alt="" className="iconsApplicants"/>
            <img src={Decline} alt="" className="iconsApplicants"/>
        </div>

    </div>
    )
}     
