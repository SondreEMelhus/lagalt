const apiUrl = "https://lagalt-java-backend.herokuapp.com/api/v1"

export const getMessageBoard = async (projectId) => {
    try {
        const response = await fetch(`${apiUrl}/messageBoards/project/${projectId}`)
        if (!response.ok) {
            throw new Error ('Could not get the messageboards of project with ID ' + projectId);
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