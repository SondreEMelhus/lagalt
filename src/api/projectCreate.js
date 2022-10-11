import { createHeaders } from "."
import keycloak from "../app/component/keycloak/keycloak";

const apiUrl = "https://lagalt-java-backend.herokuapp.com/api/v1"

export const addProject = async (title, description, ) => {
    try{
        console.log("In function " + title + " " + description)
            const response = await fetch(`${apiUrl}/projects` ,{
                method: 'POST',
                headers: createHeaders(),
                body: JSON.stringify({
                    title: title,
                    description: description,
                })
            });
            if(!response.ok){
                throw new Error("Could not create new project with title" + title);
        }
        const data = await response.json();
        return [null,data];
    }catch(error){
        return [error.message,[]];
    }
}