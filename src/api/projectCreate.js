import { createHeaders } from "."

const apiUrl = "https://lagalt-java-backend.herokuapp.com/api/v1"

export const addProject = async ( payload ) => {
    try{
        console.log('Logging in POST: ' + ' Title ' + payload.title + ', Skills ' + payload.skills);
            const response = await fetch(`${apiUrl}/projects` ,{
                method: 'POST',
                headers: createHeaders(),
                body: JSON.stringify({
                    title: payload.title,
                    description: payload.description
                })
            });

        if(!response.ok){
            throw new Error("Could not create new project with title" + payload.title);
        }
        const data = await response.json();
        return [null, data];

    }catch(error){
        return [error.message,[]];
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