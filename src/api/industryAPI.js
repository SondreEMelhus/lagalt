const apiUrl = "https://lagalt-java-backend.herokuapp.com/api/v1"

export const getIndustries = async () => {
    try {
        const response = await fetch(`${apiUrl}/industries`)
        if (!response.ok) {
            throw new Error ('Could not fetch industries');
        } 
        const result = await response.json();
        return [null, result];
    }
    catch (error) {
		return [error, null]
	}
}

export const getSkills = async (industryId) => {
    try {
        const response = await fetch(`${apiUrl}/industries/${industryId}/skills`);
        if (!response.ok) {
            throw new Error ('Kunne ikke hente ferdigheter for industri med id: ' + industryId);
        }
        const result = await response.json();
        return [null, result];
    } catch (error) {
        return [error, null]
    }
}

export const getKeywords = async (industryId) => {
    try {
        const response = await fetch(`${apiUrl}/industries/${industryId}/keywords`);
        if (!response.ok) {
            throw new Error ('Kunne ikke hente nøkkelord for industri med id: ' + industryId);
        }
        const result = await response.json();
        return [null, result];
    } catch (error) {
        return [error, null]
    }
}