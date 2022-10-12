import { useDispatch, useSelector } from "react-redux";
import {update} from '../app/component/redux/slices/MyProjectsSlice';


const apiUrl = "https://lagalt-java-backend.herokuapp.com/api/v1"

export const getProjects = async () => {
    try{
        const response = await fetch(`${apiUrl}/projects`);
        if(!response.ok){
            throw new Error("No projects found");
        }
        const data = await response.json();
        return [null,data]

    }catch(error){
        return[error.message, []];
    }
}