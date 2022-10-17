import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { selectUser } from "../redux/slices/UserSlice";
import BubbleList from "../bubbleList/BubbleList";

const ProfileForm = ({handleUpdateAccountClick}) => {

    const { register, handleSubmit } = useForm()
    const user = useSelector(selectUser);

    const submit = (input) => {
        handleUpdateAccountClick(input)
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
                <textarea name="" id="" cols="80" rows="10" className="textAreaField" { ...register("portfolio")} />
            </div>
            <div className="portfolioFieldProfile">
                <p className="portfolioHeadProfile">Min beskrivelse</p>
                <textarea name="" id="" cols="80" rows="10" className="textAreaField" { ...register("description")} />
            </div>
            <div className="statusDiv">
                <p className="profileStatusText">Profil status:</p>
                <button className="statusButtonProfile">Offentlig</button>
            </div>
            <button className="btn btn-primary" type="submit">Lagre</button>
        </form>
    )
};
export default ProfileForm
