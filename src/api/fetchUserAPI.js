import keycloak from '../app/component/keycloak/keycloak';
import { createHeaders } from './index'
import { updateUser } from '../app/component/redux/slices/UserSlice';
import { useDispatch } from 'react-redux';


const apiUrl = "https://lagalt-java-backend.herokuapp.com/api/v1"

export const registerUser = async () => {

    const username = keycloak.tokenParsed.preferred_username;
    try{
        const response = await fetch(`${apiUrl}/accounts/`, {
            method: 'POST',
            headers: createHeaders(),
            body: JSON.stringify({
                username: username,
            }),
        })
        if (!response.ok) {
            throw new Error ('Could not create user with username ' + username);
        }
        const data = await response.json();

        return data;
    }
    catch(error){
        return[error.message, null];
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
		return null
	}
}

export const getUserProjects = async (userId) => {

    try {
        const response = await fetch(`${apiUrl}/accounts/${userId}/projects`);
        if (!response.ok) {
            throw new Error('Could not get users projects');
        }
        const data = await response.json();
        console.log(data);
        return [null, data];

    } catch (error) {
        return [error.message, null]
    }
}