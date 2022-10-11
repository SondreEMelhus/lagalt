const apiUrl = "https://lagalt-java-backend.herokuapp.com/api/v1"

export const getAllProjects = async () => {
    try{
        const response = await fetch(`${apiUrl}/projects`);
        console.log(response);
        if(!response.ok){
            throw new Error("No projects found");
        }
        const data = await response.json();
        return [null, data]

        
    }catch(error){
        return[error.message, []];
    }
}