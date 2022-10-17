const apiUrl = "https://lagalt-java-backend.herokuapp.com/api/v1"

export const getIndustries = async () => {
    try {
        const response = await fetch(`${apiUrl}/industries`)
        if (!response.ok) {
            throw new Error ('Could not fetch industries');
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