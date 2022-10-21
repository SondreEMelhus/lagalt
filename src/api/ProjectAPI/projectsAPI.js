import { createHeaders } from ".."

const apiUrl = "https://lagalt-java-backend.herokuapp.com/api/v1"

export const getProjects = async () => {
    try {
        const response = await fetch(`${apiUrl}/projects`)
        if (!response.ok) {
            throw new Error ('Could not fetch projects');
        } else {
            const result = await response.json();
            return [null, result];
        }
    }
    catch (error) {
		return [error, null]
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

export const updateProject = async (payload) => {
    const mm = await getAllSkills();
    const aSkills = [];
    for(let sk of payload.skills){
        for(let y of mm) {
            if(sk === y.title){
                aSkills.push(y.id)
            }
        }
    }
    const skillsToAdd = [];
    aSkills.forEach((s) => skillsToAdd.push({id: s}));
    let indus = {};
    if(payload.industry === "Musikk"){
        indus = {id: 1};
    }else if(payload.industry === "Film"){
        indus = {id: 2};
    }else if (payload.industry === "Webutvikling"){
        indus = {id: 4};
    }else if (payload.industry === "Spillutvikling"){
        indus = {id: 3};
    }

    const aKeyword = [];
    const keywordsForProject = await getAllKeywords();
    for(let kw of payload.keywords){
        for(let i of keywordsForProject){

            if(kw === i.title){
                aKeyword.push(i.id);
            }
        }
    }
    const keywordsToAdd = [];
    aKeyword.forEach((s) => keywordsToAdd.push(s));

    try{
        const response = await fetch(`${apiUrl}/projects/${payload.id}`,{
            method: 'PUT',
            headers: createHeaders(),
            body: JSON.stringify({
                id: payload.id,
                title: payload.title,
                description: payload.description,
                status: payload.status,
                applications: payload.applications,
                chats: payload.chats,
                messageBoard: payload.messageBoard,
                statusboard: payload.statusBoard,
                projectInteractionHistory: payload.projectInteractionHistory,
                skills: skillsToAdd,
                 industry: 
                 {
                    id: indus.id
                 }
               // keywords: payload.keywords
            })
        })

        for(let k of keywordsToAdd){

            addKeywordToProject(payload.title, k)
        }
        if(!response.ok){
            throw new Error("Could not patch project");
        }else{
            const data = await response.json();
            return data;
        }
    }catch(error){
        return error;
    }
}


export const createProject = async (payload, user) => {
    const mm = await getAllSkills() ;
    const keywordsForProject = await getAllKeywords();
    const aKeyword = [];
    const aSkills = [];

    for(let kw of payload.keywords){
        for(let i of keywordsForProject){

            if(kw === i.title){
                aKeyword.push(i.id);
            }
        }
    }

    for(let sk of payload.skills){
        for(let y of mm) {
            if(sk.title === y.title){
                aSkills.push(y.id)
            }
        }
    }
    const skillsToAdd = [];
    const keywordsToAdd = [];
    aKeyword.forEach((s) => keywordsToAdd.push(s));
    aSkills.forEach((s) => skillsToAdd.push({id: s}));


    let indus = {};
    if(payload.industry === "Musikk"){
        indus = {id: 1};
    }else if(payload.industry === "Film"){
        indus = {id: 2};
    }else if (payload.industry === "Webutvikling"){
        indus = {id: 4};
    }else if (payload.industry === "Spillutvikling"){
        indus = {id: 3};
    }

    try {
        const response = await fetch(`${apiUrl}/projects`, {
            method: 'POST',
            headers: createHeaders(),
            body: JSON.stringify({ 
                title: payload.title,
                description: payload.description,
                status: 'Planlegges',
               // contributors: payload.contributors,
                applications: [],
                chats: [],
                messageBoard: [],
                statusBoard: [],
                statusUpdateBoards: [],
                projectInteractionHistory: [],
                skills: skillsToAdd,
                industry: indus,
            })
        })
        for(let k of payload.keywords){
           await addKeywordToProject(payload.title, k.id)
        }
            const projectObject = await getProjectByName(payload.title);

            addOwnerContributor(user, projectObject[0])
            const result = await response.json();
            return result;
        
    } catch (error) {
        return error;
    }
}

export const addOwnerContributor = async (user, project) => {
    try{
        const response = await fetch(`${apiUrl}/projects/addContributor`, {
            method: 'POST',
            headers: createHeaders(),
            body: JSON.stringify({
                role: "Owner",
                account: {
                    id: user.id
                },
                project: {
                    id: project.id
                }
            })
        })

        if(!response.ok){
            throw new Error("Owner was not added to project")
        }else{
            const data = await response.json();
            return data;
        }
    }catch(error){
        return error;
    }
}

export const addKeywordToProject = async (title, keywordId) => {
    const idObj = await getProjectByName(title);
    const id = idObj[0].id;

    try{
        const response = await fetch(`${apiUrl}/projects/${id}/addKeyword`, {
            method: 'PUT',
            headers: createHeaders(),
            body: keywordId
        })
        const result = await response.json();
        return result
    }catch(error){
        return error
    }

}

export const getProjectByName = async (title) => {
    try{
        const response = await fetch(`${apiUrl}/projects/search?name=${title}`);
        if(!response.ok)  {
            throw new Error("No project found");
        }else{
            const data = response.json();
            return data
        }
    }catch(error){
        return error
    }
}

export const getApplications = async ( projectId ) => {

    try {
        const response = await fetch(`${apiUrl}/applications/project/${projectId}`)
        if(!response.ok) {
            throw new Error('Could not get applications for project with id: ' + projectId)
        }
        const data = await response.json();
        return data;
    } catch (error) {
        return error.message;
    }
}

export const addApplication = async ( payload ) => {

    try{
        const response = await fetch(`${apiUrl}/applications` ,{
            method: 'POST',
            headers: createHeaders(),
            body: JSON.stringify({
                motivation: payload.motivation,
                status: payload.status,
                account: {
                    id: payload.account.id
                },
                project: {
                    id: payload.project.id
                }
            })
        });

        if(!response.ok){
            throw new Error("Could not create a new application for project with id: " + payload.project.id);
        }
        const data = await response.json();
        return data;

    }catch(error){
        return error.message;
    }
}

export const approveApplication = async ( projectId ) => {
    try {
        const response = await fetch(`${apiUrl}/applications/${projectId}/accept`, {
            method: 'PUT',
            headers: createHeaders()
        })

        if (!response.ok) {
            throw new Error ('Could not approve application')
        }

        const result = await response.json();
        return [null, result]
    } catch (error) {
        return [error, null];
    }
}

export const declineApplication = async ( projectId ) => {
    try {
        const response = await fetch(`${apiUrl}/applications/${projectId}/deny`, {
            method: 'PUT',
            headers: createHeaders()
        })

        if (!response.ok) {
            throw new Error ('Could not deny application')
        }

        const result = await response.json();
        return [null, result]
    } catch (error) {
        return [error, null];
    }
}