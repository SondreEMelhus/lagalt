import { useDispatch, useSelector } from "react-redux";

const dispatch = useDispatch();

const apiUrl = "https://lagalt-java-backend.herokuapp.com/api/v1"

export const getProjectById = async (id) => {
    try{
        const response = await fetch(`${apiUrl}/projects/${id}`);
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