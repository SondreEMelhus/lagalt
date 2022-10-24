//Libraries
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

//Components
import ProfileForm from "./ProfileForm";
import withAuth from "../../../hoc/withAuth";

//Redux slices
import { updateUser } from "../redux/slices/UserSlice";

//API
import { getUser } from "../../../api/fetchUserAPI";

//Styling
import '../../../css/profile.css'


/**
 * Component responsible for fetching a the newest version of the user, and displaying the ProfileForm component
 */
function Profile () {
    
    //Hooks
    const dispatch = useDispatch();

    useEffect(() => {
        getUserAcc();
    }, [])

    /**
     * Method responsible for fetching the updated user
     */
    const getUserAcc = async () => {
        const currUser = await getUser() 
        dispatch(updateUser(currUser))
    }

    //Render function
    return (
        <>
            <ProfileForm />
        </>
    )
}

export default withAuth(Profile);