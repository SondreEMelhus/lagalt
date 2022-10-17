import keycloak from '../app/component/keycloak/keycloak';
import { createHeaders } from './index'


const apiUrl = "https://lagalt-java-backend.herokuapp.com/api/v1"

export const registerUser = async () => {
    const firstName = keycloak.tokenParse.given_name;
    const lastName = keycloak.tokenParse.family_name;
    const username = keycloak.tokenParse.preferred_username;
    const email = keycloak.tokenParse.email;
    
    try{
        const response = await fetch(`${apiUrl}/accounts/`, {
            method: 'POST',
            headers: createHeaders(),
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                username: username,
                email: email
            }),
        })
        console.log(response);
        if (!response.ok) {
            throw new Error ('Could not create user with username ' + username);
        }
        const data = await response.json();
        console.log('Creating user');
        return data;
    }
    catch(error){
        console.log(error);
        return[error.message, []];
    } 
}

//TODO: Endre username tilbake til keycloak token
//Finn ut hvorfor getUser ikke registrer en ny bruker dersom de ikke finnes i databasen
export const getUser = async () => {
    try {
        //const username = keycloak.tokenParsed.preferred_username;
        const username = 'Synnøve'
        const response = await fetch(`${apiUrl}/accounts/search?username=${username}`)
        if (!response.ok) {
            throw new Error ('Could not get user with username ' + username);
        } else {
            const data = await response.json();
            return data ? data : await registerUser();
        }
    }
    catch (error) {
        console.log(error);
		return null
	}
}