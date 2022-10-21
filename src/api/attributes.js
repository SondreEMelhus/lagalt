import { useState } from "react";

const apiUrl = "https://lagalt-java-backend.herokuapp.com/api/v1"

//add industryId after async -> ...async (industryId)...
//Change /industry/1/keywords -> /industry/${industryId}/keywords
export const getKeyWordsOfIndustry = async (industry) => {
    const id = getId(industry);
    try{
        console.log("Logging ID: " + id);
        const response = await fetch(`${apiUrl}/industries/${id}/keywords`);
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
export const getSkillsOfIndustry = async (industry) => {
    const id = getId(industry)
    try{
        console.log("Logging ID: " + id);
        const response = await fetch(`${apiUrl}/industries/${id}/skill`);
        if(!response.ok){
            throw new Error("No skills found");
        }
        const data = await response.json();
        console.log(data);
        return data

    }catch(error){
        return[error.message, []];
    }
}

function getId(industry){
    if(industry === "Musikk"){
        return 1;
    }else if(industry === "Film"){
        return 2;
    }else if(industry === "Spillutvikling"){
        return 3
    }else if(industry === "Webutvikling"){
        return 4;
    }
}