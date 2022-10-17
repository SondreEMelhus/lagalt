//Libraries
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, updateUser } from "../redux/slices/UserSlice";

//Components

//Styling
import '../../../css/profile.css'
import Navbar from "../navbar/Navbar";
import ProfileForm from "./ProfileForm";
import { updateAccountInDB } from "../../../api/profile";


export default function Profile () {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const handleUpdateAccountClick = async (input) => {
        // 1) lagre bruker i db (og få tilbake endret bruker?)
        await updateAccountInDB(user.id, user.username, input.portfolio, input.description)

        // 2) lagre bruker fra db i redux
        //dispatch( updateUser(account))
    }

    return (
        <>
            <Navbar/>
            <ProfileForm handleUpdateAccountClick={ handleUpdateAccountClick }/>
        </>
    )
}