import { createHeaders } from "."


const apiUrl = "https://lagalt-java-backend.herokuapp.com/api/v1"

export const getProjects = async () => {
    try{
        const response = await fetch(`${apiUrl}/projects`);
        if(!response.ok){
            throw new Error("No projects found");
        }
        const data = await response.json();
        return [null,data]

    }catch(error){
        return[error.message, []];
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

/*
 title: payload.title,
                description: payload.description,
                contributors: payload.contributors,
                applications: payload.applications,
                skills: payload.skills,
                industry: payload.industry,
                keywords: payload.keywords,
                accounts: payload.accounts
*/