import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { selectUser, updatePortfolio, updateDescription } from "../redux/slices/UserSlice";
import { getSkillsOfUser, updateUserInDb } from "../../../api/fetchUserAPI";
import BubbleList from "../bubbleList/BubbleList";
import { useEffect, useState } from "react";
import { sanitize } from "../util/InputSantizer";
import ProfileAddSkill from "./ProfileAddSkill";

import { Navigate, useNavigate } from "react-router-dom";
import ProfileRemovekill from "./ProfileRemoveSkill";

const ProfileForm = ({handleUpdateAccountClick}) => {

    const { register, handleSubmit } = useForm()
    const user = useSelector(selectUser);
    const [portfolio, setPortfolio] = useState(user.portfolio)
    const [description, setDescription] = useState(user.description);
    const [privateAcc, setPrivate] = useState("Offentlig");
    const [userSkills, setUserSkills] = useState(user.skills)
    const navigate = useNavigate();

    const reload = (input) => {
        setUserSkills(input)
    }

    const submit = (input) => {
        handleUpdateAccountClick(input)
    }

    const changePortfolio = (event) => {
        setPortfolio(sanitize(event.target.value));

    }
    const changeDescription = (event) => {
        setDescription(sanitize(event.target.value))
    }
    const updateProfile = async () => {
        updatePortfolio(document.getElementById("portfolio").value);
        updateDescription(document.getElementById("descriptionUser").value);
        const newDescription = document.getElementById("descriptionUser").value;
        const newPortfolio = document.getElementById("portfolio").value
        const newUser = {id: user.id, username: user.username, description: newDescription, portfolio: newPortfolio, visible: privateAcc, skills: user.skills,}
        await updateUserInDb(newUser);
        navigate('/');
    }

    function changePrivate(){
        if(privateAcc === "Offentlig"){
            setPrivate("Privat")
        }else{
            setPrivate("Offentlig")
        }
    }

	return (
        <form className="profileForm" onSubmit={ handleSubmit(submit) }>
            <h2 className="yourProfile"> { user.username } </h2>
            <div>
                <p className="skillsHeadProfile">Mine ferdigheter</p>
                <div className="skillsFieldProfile">
                    <BubbleList list={userSkills} />
                </div>
                <ProfileAddSkill reload={reload}/>
                <ProfileRemovekill reload={reload}/>      
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