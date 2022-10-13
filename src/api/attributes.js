const apiUrl = "https://lagalt-java-backend.herokuapp.com/api/v1"

//add industryId after async -> ...async (industryId)...
//Change /industry/1/keywords -> /industry/${industryId}/keywords
export const getKeyWordsOfIndustry = async () => {
    try{
        const response = await fetch(`${apiUrl}/industries/1/keywords`);
        if(!response.ok){
            throw new Error("No keywords found");
        }
        const data = await response.json();
        return data

    }catch(error){
        return[error.message, []];
    }
}

//Add id, same as the function above
export const getSkillsOfIndustry = async () => {
    try{
        const response = await fetch(`${apiUrl}/industries/1/skill`);
        if(!response.ok){
            throw new Error("No skills found");
        }
        const data = await response.json();
        return data

    }catch(error){
        return[error.message, []];
    }
}