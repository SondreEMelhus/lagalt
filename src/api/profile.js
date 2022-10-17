
import { createHeaders } from '.';
import keycloak from '../app/component/keycloak/keycloak';

const apiUrl = "https://lagalt-java-backend.herokuapp.com/api/v1"

// denne bør muligens flyttes
const getLoggedInUser = () => {
    if( keycloak.authenticated ) {
        return keycloak.tokenParsed;
    }
}

export const getUser = async () => {
    try {
        const token = getLoggedInUser()
        //const username = token.preferred_username;
        const username = 'Synnøve';
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

export const updateAccountInDB = async (id, username, portfolio, description) => {
    console.log("updateAccountInDB")
    try {
        const response = await fetch(`${apiUrl}/accounts/${id}`, {
            method: 'PUT',
            headers: createHeaders(),
            body: JSON.stringify({
                id,
                username,
                description,
                portfolio,
            })
        })
        const data = await response.json();
        console.log(data)
        console.log("datadatadatadatadatadatadatadatadatadata")
        return data
    }
    catch (error) {
        return null
    }
}