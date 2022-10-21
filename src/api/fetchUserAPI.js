import keycloak from '../app/component/keycloak/keycloak';
import { createHeaders } from './index'


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
        return error.message;
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


export const updateUserInDb = async (user) => {
    const userSkills = await getSkillsOfUser(user.id)
    const visible = user.visible === "Privat" ? true: false


    try{
        const response = await fetch(`${apiUrl}/accounts/${user.id}`, {
            method: 'PUT',
            headers: createHeaders(),
            body: JSON.stringify({
                id: user.id,
                username: user.username,
                description: user.description,
                visible: visible,
                portfolio: user.portfolio,
            })
        })

        for(let s of userSkills){
            await addSkillToUser(user.id, s.id);
        }

        if(!response.ok){
            
        }
    }catch(error){
        return error;
    }
}

export const getSkillsOfUser = async (id) => {
    try{
         const response = await fetch(`${apiUrl}/accounts/${id}/skills`)
        
        const data = await response.json();
        return data;
    }
    catch(error){
        return error;
    }
}

export const addSkillToUser = async (userId, skillId) => {
    try{
        const response = await fetch(`${apiUrl}/accounts/${userId}/addSkill`,{
            method: 'PUT',
            headers: createHeaders(),
            body: skillId
        })
        if(!response.ok){
            throw new Error("Skill could not be added")
        }
    }catch(error){
        return error;
    }
}

export const removeSkillFromUser = async (userId, skillId) => {
    console.log("USER ID: " + userId)
    console.log(skillId)
    try{
        const response = await fetch(`${apiUrl}/accounts/${userId}/removeSkill`,{
            method: 'PUT',
            headers: createHeaders(),
            body: skillId
        })
        if(!response.ok){
            throw new Error("Skill could not be removed")
        }
    }catch(error){
        return error;
    }
}

export const getUserProjects = async (userId) => {
    try {
        const response = await fetch(`${apiUrl}/accounts/${userId}/projects`);
        if (!response.ok) {
            throw new Error('Could not get users projects');
        }
        const data = await response.json();
        return [null, data];

    } catch (error) {
        return [error.message, null]
    }
}

export const getInteractionHistory = async ( userId ) => {
    try{
        const response = await fetch(`${apiUrl}/projectInteractionHistories/account/${userId}`)
        if (!response.ok) {
            throw new Error ('Could not get the interaction history of ' + userId);
        }
        const data = await response.json();
        return [null, data];
    }
    catch(error){
        return[error, null];
    } 
}

export const addInteractionHistory = async ( payload ) => {

    try{
        const response = await fetch(`${apiUrl}/projectInteractionHistories`, {
            method: 'POST',
            headers: createHeaders(),
            body: JSON.stringify({
                timestamp: payload.timestamp,
                visited: true,
                account: {
                      id: payload.account.id
                },
                project: {
                    id: payload.project.id
                }
            })
        })
        if (!response.ok) {
            throw new Error ('Could not add the interaction history of ' + payload.username);
        }
        const data = await response.json();

        return [null, data];
    }
    catch(error){
        return[error.message, null];
    } 
}

export const updateIntaractionHistory = async ( payload, projectId ) => {

    try {
        const response = await fetch(`${apiUrl}/projectInteractionHistories/${projectId}`, {
            method: 'PUT',
            headers: createHeaders(),
            body: JSON.stringify({
                    id: payload.id,
                    timestamp: payload.timestamp,
                    visited: payload.visited,
                    account: {
                        id: payload.id
                    },
                    project: {
                        id: payload.project.id
                    }
                })
            })
            if (!response.ok) {
                throw new Error ('Could not update the interaction history of ' + payload.username);
            }
            const data = await response.json();
    
            return [null, data];
    } catch (error) {
        return [error.message, null];
    }
} 