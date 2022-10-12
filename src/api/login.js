
import keycloak from '../app/component/keycloak/keycloak';
import { createHeaders } from './index'


const apiUrl = "https://lagalt-java-backend.herokuapp.com/api/v1"

// denne bør muligens flyttes
const getLoggedInUser = () => {
    if( keycloak.authenticated ) {
        return keycloak.tokenParsed;
    }
}

export const registerUser = async () => {
    const token = getLoggedInUser()
    const firstName = token.given_name;
    const lastName = token.family_name;
    const username = token.preferred_username;
    const email = token.email;
    try{
        const response = await fetch(`${apiUrl}/accounts/`, {
            method: 'POST',
            headers: createHeaders(),
            body: JSON.stringify({
                firstName,
                lastName,
                username,
                email
            }),
        })
        const data = await response.json();
        console.log(data);
        return [null, data]
    }
    catch(error){
        return[error.message, []];
    } 
}

export const checkIfUserExists = async () => {
    try {
        const token = getLoggedInUser()
        const username = token.preferred_username;
        const response = await fetch(`${apiUrl}/accounts/search?username=${username}`)
        const account = await response.json()
        if (account.JSON) {
            console.log("user.JSON.stringify: " + account.JSON.stringify)
        }
        return account
    }
    catch (error) {
		return null
	}
}