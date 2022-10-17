import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {update} from '../redux/slices/MyProjectsSlice';
import { getProjects } from "../../../api/project";
import { selectMyProjects } from "../redux/slices/MyProjectsSlice";

export default function NavigateMyProjects(){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const myProjects = useSelector(selectMyProjects)


    const handleClick = async () => {
        const array = await getProjects();
        console.log(array)
        dispatch(update(array[1]))
        console.log(myProjects)
        navigate('/projects')
    }

    return(
        <button onClick={handleClick}>Mine Prosjekter</button>
    )
}