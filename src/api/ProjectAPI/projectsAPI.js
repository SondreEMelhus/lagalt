import { createHeaders } from ".."

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

export const patchProject = async (payload) => {
    try {
        const projectId = payload.id
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

export const getAllSkills = async () =>{
    try{
        const response = await fetch(`${apiUrl}/skills`)
        if(!response.ok){
            throw new Error('Could not get any skills');
        }
        const data = await response.json();
        return data
    }catch (error) {
        return [error.message, []]
    }
}

export const getAllKeywords = async () => {
    try{
        const response = await fetch(`${apiUrl}/keywords`);
        if(!response.ok) {
            throw new Error('Could not get any keywords')
        }
        const data = await response.json();
        return data;
    }catch ( error ) {
        return[error.message, []];
    }
}

export const getAllContributers = async (projectId) => {
    try{
        const response = await fetch(`${apiUrl}/projects/${projectId}/contributors`);
        if(!response.ok) {
            throw new Error('Could not get contributers for project ' + projectId)
        }
        const data = await response.json();
        return data;
    }catch ( error ) {
        return[error.message, []];
    }
}

export const createProject = async (payload) => {
    const mm = await getAllSkills() ;
    const keywordsForProject = await getAllKeywords();
    const aKeyword = [];
    const aSkills = [];

    for(let kw of payload.keywords){
        for(let i of keywordsForProject){
            console.log("::::::::::::::::::::::::")
            console.log(i.title);
            console.log(kw);
            console.log("::::::::::::::::::::::::")
            if(kw === i.title){
                console.log(i)
                aKeyword.push(i.id);
            }
        }
    }
    console.log("????????????????")
    console.log(aKeyword);

    for(let sk of payload.skills){
        for(let y of mm) {
            if(sk === y.title){
                aSkills.push(y.id)
            }
        }
    }
    const skillsToAdd = [];
    const keywordsToAdd = [];
    aKeyword.forEach((s) => keywordsToAdd.push(s));
    aSkills.forEach((s) => skillsToAdd.push({id: s}));
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
    console.log(keywordsToAdd);
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")

    try {
        let ind = {id: payload.industry}
        const response = await fetch(`${apiUrl}/projects`, {
            method: 'POST',
            headers: createHeaders(),
            body: JSON.stringify({ 
                title: payload.title,
                description: payload.description,
                status: 'Planlegges',
                //contributors: payload.contributors,
                applications: [],
                chats: [],
                messageBoard: [],
                statusBoard: [],
                statusUpdateBoards: [],
                projectInteractionHistory: [],
                skills: skillsToAdd,
                industry: ind,
                keywords: aKeyword
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