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

    try {
        let ind = {id: payload.industry}
        console.log("KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK")
        console.log(keywordsToAdd)
        console.log("KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK")

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
            })
        })

        for(let k of keywordsToAdd){

            addKeywordToProject(payload.title, k)
        }
        console.log("where u at???")

        console.log("-------------------")
        console.log(response)
        console.log("-------------------")
            const result = await response.json();

            return result;
        
    } catch (error) {
        return error;
    }
}

export const addKeywordToProject = async (title, keywordId) => {

    const idObj = await getProjectByName(title);
    const id = idObj[0].id;
    console.log("DIDIDIIDIDIDIDIDIDIDDI")
    console.log(id)
    console.log("DIDIDIIDIDIDIDIDIDIDDI")

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