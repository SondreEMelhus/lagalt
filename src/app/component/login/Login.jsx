//Libraries
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

//Components
import keycloak from "../keycloak/keycloak";

//Redux slices
import { resetUser } from "../redux/slices/UserSlice";

//Styling
import '../../../css/login.css'

/**
 * Component used to render and handle the login, register and logout process
 */
export default function Login () {

    //Hooks
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    //Render function
    return (
        <>
            { !keycloak.authenticated &&
                <>
                    <button className="loginButton" onClick={() => {
                        navigate('/')
                        keycloak.login()
                    }}>Logg in</button>
                    <button className="registerButton" onClick={() => {
                        navigate('/')
                        keycloak.register() 
                    }}>Registrer</button>
                </>
            }
            { keycloak.authenticated && <button className="loginButton" onClick={() => {
                dispatch( resetUser() )
                navigate('/')
                keycloak.logout() }
            }>Logg ut</button> }
        </>
    )
}