import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { selectUser, updatePortfolio, updateDescription } from "../redux/slices/UserSlice";
import { updateUserInDb } from "../../../api/fetchUserAPI";
import BubbleList from "../bubbleList/BubbleList";
import { useState } from "react";
import { sanitize } from "../util/InputSantizer";
import ProfileAddSkill from "./ProfileAddSkill";

const ProfileForm = ({handleUpdateAccountClick}) => {

    const { register, handleSubmit } = useForm()
    const user = useSelector(selectUser);
    const [portfolio, setPortfolio] = useState(user.portfolio)
    const [description, setDescription] = useState(user.description);

    const submit = (input) => {
        handleUpdateAccountClick(input)
    }

    const changePortfolio = (event) => {
        setPortfolio(sanitize(event.target.value));
        console.log(portfolio)
    }
    const changeDescription = (event) => {
        setDescription(sanitize(event.target.value))
    }
    const updateProfile = async () => {
        updatePortfolio(portfolio);
        updateDescription(document.getElementById("descriptionUser").value);
        const newDescription = document.getElementById("descriptionUser").value;
        const newUser = {id: user.id, username: user.username, description: newDescription, portfolio: user.portfolio, visible: user.visible, skills: user.skills}
       await updateUserInDb(newUser);
    }

	return (
        <form onSubmit={ handleSubmit(submit) }>
            <h2 className="yourProfile"> { user.username } </h2>
            <div>
                <p className="skillsHeadProfile">Mine ferdigheter</p>
                <div className="skillsFieldProfile">
                    <BubbleList list={user.skills} />
                </div>
                    <ProfileAddSkill/>
            </div>
            <div className="portfolioFieldProfile">
                <p className="portfolioHeadProfile">Portfolio</p>
                <textarea name="" id="" cols="80" rows="10" className="textAreaField" value={portfolio} onChange={changePortfolio} />
            </div>
            <div className="portfolioFieldProfile">
                <p className="portfolioHeadProfile">Min beskrivelse</p>
                <textarea name="" id="descriptionUser" cols="80" rows="10" className="textAreaField" value={description} onChange={changeDescription} />
            </div>
            <div className="statusDiv">
                <p className="profileStatusText">Profil status:</p>
                <button className="statusButtonProfile">Offentlig</button>
            </div>
            <button className="btn btn-primary" type="submit" onClick={updateProfile}>Lagre</button>
        </form>
    )
};
export default ProfileForm
