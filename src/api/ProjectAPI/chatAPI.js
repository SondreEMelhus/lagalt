import { createHeaders } from "../index"

const apiUrl = "https://lagalt-java-backend.herokuapp.com/api/v1"

export const getChat = async (projectId) => {
    try {
        const response = await fetch(`${apiUrl}/chats/project/${projectId}`)
        if (!response.ok) {
            throw new Error ('Could not get chat of project with id ' + projectId);
        }
        const data = await response.json();
        return [null, data];
    }
    catch (error) {
		return [error.message, null]
	}
}

export const addChatMessage = async ( payload, projectId ) => {

    try{
        const response = await fetch(`${apiUrl}/chats/${projectId}/addChat` ,{
            method: 'POST',
            headers: createHeaders(),
            body: JSON.stringify({
                text: payload.text,
                timestamp: payload.timestamp,
                username: payload.username,
                project: { 
                    id: projectId
                }
            })
        });
        if(!response.ok){
            throw new Error("Could not create a new message with content: " + payload.text);
        }
        const data = await response.json();
        return [null, data];

    }catch(error){
        return [error.message, null];
    }
}