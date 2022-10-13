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
        console.log(data)
        return data

    }catch(error){
        return[error.message, []];
    }
}