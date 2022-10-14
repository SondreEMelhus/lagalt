import { createHeaders } from "."

const apiUrl = "https://lagalt-java-backend.herokuapp.com/api/v1"

export const addChatMessage = async ( payload ) => {

    try{
        const response = await fetch(`${apiUrl}/chats` ,{
            method: 'POST',
            headers: createHeaders(),
            body: JSON.stringify({
                text: payload.text,
                timestamp: payload.timestamp,
                username: payload.username,
                project: payload.project
            })
        });

        if(!response.ok){
            throw new Error("Could not create a new message with content: " + payload.text);
        }
        const data = await response.json();
        return [null, data];

    }catch(error){
        return [error.message,[]];
    }
}