//Libraries
import React from "react";

//Components
import keycloak from "../keycloak/keycloak";

//Styling
import '../../../css/login.css'

export default function Login () {

    return (
        <>
            {!keycloak.authenticated &&
                <>
                    <button className="loginButton" onClick={ keycloak.login }>Logg in</button>
                    <button className="registerButton" onClick={ keycloak.register }>Registrer</button>
                </>
            }
            {keycloak.authenticated && <button className="loginButton" onClick={ keycloak.logout }>Logg ut</button>}
        </>
    )
}