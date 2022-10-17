const apiUrl = "https://lagalt-java-backend.herokuapp.com/api/v1"

export const getStatusBoard = async (projectId) => {
    try {
        const response = await fetch(`${apiUrl}/statusUpdates/statusUpdateBoard/${projectId}`)
        if (!response.ok) {
            throw new Error ('Could not get the statusboard of project with ID ' + projectId);
        } else {
            const data = await response.json();
            return data;
        }
    }
    catch (error) {
        console.log(error);
		return null
	}
}