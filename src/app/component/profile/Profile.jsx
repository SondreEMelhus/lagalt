//Libraries
import React from "react";

//Components

//Styling
import '../../../css/profile.css'

export default function Profile () {

    return (
        <>
            <h2 className="yourProfile">Din profil</h2>

            <div>
                <p className="skillsHeadProfile">Mine ferdigheter</p>
                <div className="skillsFieldProfile">
                    <div className="skillElementProfile">
                        <p>Java</p>
                    </div>
                </div>
            </div>
            <div className="portfolioFieldProfile">
                <p className="portfolioHeadProfile">Portfolio</p>
                <textarea name="" id="" cols="80" rows="10" className="textAreaField"></textarea>
            </div>
            <div className="portfolioFieldProfile">
                <p className="portfolioHeadProfile">Min beskrivelse</p>
                <textarea name="" id="" cols="80" rows="10" className="textAreaField"></textarea>
            </div>
            <div className="statusDiv">
                <p className="profileStatusText">Profil status:</p>
                <button className="statusButtonProfile">Offentlig</button>
            </div>
        </>
    )
}