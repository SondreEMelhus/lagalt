import { createHeaders } from "../index";

const apiUrl = "https://lagalt-java-backend.herokuapp.com/api/v1"

export const getMessageBoard = async (projectId) => {
    try {
        const response = await fetch(`${apiUrl}/messageBoards/project/${projectId}`)
        if (!response.ok) {
            throw new Error ('Could not get the messageboards of project with ID ' + projectId);
        } else {
            const data = await response.json();
            return data;
        }
    }
    catch (error) {
        console.log(error);
		return null
	}
}

export const addMessageBoardPost = async ( payload ) => {

    try{
        const response = await fetch(`${apiUrl}/messageBoards` ,{
            method: 'POST',
            headers: createHeaders(),
            body: JSON.stringify({
                title: payload.title,
                text: payload.text,
                timestamp: payload.timestamp,
                username: payload.username,
                project: {
                    id: payload.project.id
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