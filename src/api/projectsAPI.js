import { createHeaders } from "."

const apiUrl = "https://lagalt-java-backend.herokuapp.com/api/v1"

export const getProjects = async () => {
    try {
        const response = await fetch(`${apiUrl}/projects`)
        if (!response.ok) {
            throw new Error ('Could not fetch projects');
        } else {
            const result = await response.json();
            return result;
        }
    }
    catch (error) {
        console.log(error);
		return null
	}
}

export const patchProject = async (projectId, payload) => {
    try {
        console.log(payload);
        const response = await fetch(`${apiUrl}/projects/${projectId}`, {
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                title: payload.title,
            })
        })

        if (!response.ok) {
            throw new Error ('Could not update translations')
        }

        const result = await response.json();
        return [null, result]
    } catch (error) {
        return [error.message, null];
    }
}

export const createProject = async (payload) => {
    try {
        const response = await fetch(`${apiUrl}/projects`, {
            method: 'POST',
            headers: createHeaders(),
            body: JSON.stringify({ 
                title: payload.title,
                description: payload.description,
                status: payload.status,
                contributors: payload.contributors,
                applications: [],
                chats: [],
                statusUpdateBoards: [],
                projectInteractionHistory: [],
                skills: payload.skills,
                industry: payload.industry,
                keywords: [] 
            })
        })
        if (!response.ok) {
            throw new Error ('Could not create project');
        } else {
            const result = await response.json();
            return result;
        }
    } catch (error) {
        return error;
    }      
}