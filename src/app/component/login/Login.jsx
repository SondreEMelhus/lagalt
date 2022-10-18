//Libraries
import React from "react";

//Components
import keycloak from "../keycloak/keycloak";

//Styling
import '../../../css/login.css'
import { useDispatch } from "react-redux";
import { resetUser } from "../redux/slices/UserSlice";
import { useNavigate } from "react-router-dom";

export default function Login () {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    return (
        <>
            { !keycloak.authenticated &&
                <>
                    <button className="loginButton" onClick={ keycloak.login }>Logg in</button>
                    <button className="registerButton" onClick={ keycloak.register }>Registrer</button>
                </>
            }
            { keycloak.authenticated && <button className="loginButton" onClick={event => {
                dispatch( resetUser() )
                navigate('/')
                keycloak.logout() }
            }>Logg ut</button> }
        </>
    )
}