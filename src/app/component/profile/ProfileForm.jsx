import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { selectUser, updatePortfolio } from "../redux/slices/UserSlice";
import BubbleList from "../bubbleList/BubbleList";
import { useState } from "react";
import { updateDescription } from "../redux/slices/ProjectSlice";
import { sanitize } from "../util/InputSantizer";

const ProfileForm = ({handleUpdateAccountClick}) => {

    const { register, handleSubmit } = useForm()
    const user = useSelector(selectUser);
    const [portfolio, setPortfolio] = useState(user.portfolio)
    const [description, setDescription] = useState(user.description);
    console.log("VALUES??? " + user.username);

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
    const updateProfile = () => {
        updatePortfolio(portfolio);
        updateDescription(description);
    }

	return (
        <form onSubmit={ handleSubmit(submit) }>
            <h2 className="yourProfile"> { user.username } </h2>
            <div>
                <p className="skillsHeadProfile">Mine ferdigheter</p>
                <div className="skillsFieldProfile">
                    <BubbleList list={user.skills} />
                </div>
            </div>
            <div className="portfolioFieldProfile">
                <p className="portfolioHeadProfile">Portfolio</p>
                <textarea name="" id="" cols="80" rows="10" className="textAreaField" value={portfolio} onChange={changePortfolio} />
            </div>
            <div className="portfolioFieldProfile">
                <p className="portfolioHeadProfile">Min beskrivelse</p>
                <textarea name="" id="" cols="80" rows="10" className="textAreaField" value={description} onChange={changeDescription} />
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
