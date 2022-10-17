import keycloak from '../app/component/keycloak/keycloak';
import { createHeaders } from './index'
import { updateUser } from '../app/component/redux/slices/UserSlice';
import { useDispatch } from 'react-redux';


const apiUrl = "https://lagalt-java-backend.herokuapp.com/api/v1"

export const registerUser = async () => {

    const username = keycloak.tokenParsed.preferred_username;
    console.log("INDISE REGISTER")
    try{
        const response = await fetch(`${apiUrl}/accounts/`, {
            method: 'POST',
            headers: createHeaders(),
            body: JSON.stringify({
                username: username,
            }),
        })
        console.log(response);
        if (!response.ok) {
            throw new Error ('Could not create user with username ' + username);
        }
        const data = await response.json();

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
        const username = keycloak.tokenParsed.preferred_username;
        const response = await fetch(`${apiUrl}/accounts/search?username=${username}`)
       /* if (!response.ok) {
            throw new Error ('Could not get user with username ' + username);
            
        } else { */
            const data = await response.json();
            return data ? data : await registerUser();
    }
    catch (error) {
        console.log(error);
		return null
	}
}