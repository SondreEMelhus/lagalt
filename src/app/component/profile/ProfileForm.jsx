//Libraries
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

//Components
import ProfileAddSkill from "./ProfileAddSkill";
import { sanitize } from "../util/InputSantizer";
import BubbleList from "../bubbleList/BubbleList";
import ProfileRemoveSkill from "./ProfileRemoveSkill";

//Redux slices
import { selectUser, updatePortfolio, updateDescription } from "../redux/slices/UserSlice";

//API 
import { updateUserInDb } from "../../../api/fetchUserAPI";

/**
 * Component responsible for rendering and managing the profileForm which lets a project
 * admin/owner update their project
 */
const ProfileForm = ({ handleUpdateAccountClick }) => {

    //Hooks
    const { handleSubmit } = useForm()
    const user = useSelector(selectUser);
    const navigate = useNavigate();

    //States
    const [privateAcc, setPrivate] = useState("Offentlig");
    const [userSkills, setUserSkills] = useState(user.skills);
    const [portfolio, setPortfolio] = useState(user.portfolio);
    const [description, setDescription] = useState(user.description);

    //Event handlers

    /**
     * OnClick event handler that updates the user skills
     */
    const reload = (input) => {
        setUserSkills(input)
    }

    /**
     * OnClick event handler that updated the users users profile info
     */
    const submit = (input) => {
        handleUpdateAccountClick(input)
    }

    /**
     * OnChange event handler that updates the portfolio of the users profile
     */
    const changePortfolio = (event) => {
        setPortfolio(sanitize(event.target.value));
    }

    /**
     * OnChange event handler that updates the description of the users profile
     */
    const changeDescription = (event) => {
        setDescription(sanitize(event.target.value))
    }

    /**
     * OnClick event hancler that updated the users entire profile
     */
    const updateProfile = async () => {
        updatePortfolio(document.getElementById("portfolio").value);
        updateDescription(document.getElementById("descriptionUser").value);

        const newDescription = document.getElementById("descriptionUser").value;
        const newPortfolio = document.getElementById("portfolio").value
        const newUser = {id: user.id, username: user.username, description: newDescription, portfolio: newPortfolio, visible: privateAcc, skills: user.skills,}
        
        await updateUserInDb(newUser);
        navigate('/');
    }

    /**
     * OnClick event handler that changes the visibility of the users profile
     */
    const changePrivate = () => {
        privateAcc === "Offentlig" ? setPrivate("Privat") : setPrivate("Offentlig");
    }

    //Render function
	return (
        <form className="profileForm" onSubmit={ handleSubmit(submit) }>
            <h2 className="yourProfile"> { user.username } </h2>
            <div>
                <p className="skillsHeadProfile">Mine ferdigheter</p>
                <div className="skillsFieldProfile">
                    <BubbleList list={userSkills} />
                </div>
                <ProfileAddSkill reload={reload}/>
                <ProfileRemoveSkill reload={reload}/>      
            </div>
            <div className="portfolioFieldProfile">
                <p className="portfolioHeadProfile">Portfolio</p>
                <textarea name="" id="portfolio" cols="80" rows="10" className="application-motivation-text" value={portfolio} onChange={changePortfolio} />
            </div>
            <div className="portfolioFieldProfile">
                <p className="portfolioHeadProfile">Min beskrivelse</p>
                <textarea name="" id="descriptionUser" cols="80" rows="10" className="application-motivation-text" value={description} onChange={changeDescription} />
            </div>
            <div className="statusDiv">
                <p className="profileStatusText">Profil status:</p>
                <button className="statusButtonProfile" onClick={() => changePrivate()}>{privateAcc}</button>
            </div>
            <button className="btn btn-primary save-btn" type="submit" onClick={updateProfile}>Lagre</button>
        </form>
    )
};

export default ProfileForm