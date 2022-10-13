//Libraries
import React, { useEffect, useState } from "react";

//Components

import Navbar from "../../navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";




//Styling
import '../../../../css/projectAdmin.css'
import { selectAdmin } from "../../redux/slices/AdminSlice";
import AdminForm from "./AdminForm";

export default function ProjectAdmin () {

    const [title, setTitle] = useState('');

    useEffect(() =>{
        console.log("logging project")
    }, [])

    useEffect((prevTitle) => {
        if (prevTitle !== title) {
           // console.log(title);
        }

    }, [title])
    //Changing status, for now it only changes the css
    //TODO: Add so that it actually changes the status of the given project
    
    return (
        <div>
            <Navbar/>
            <AdminForm setTitle={setTitle}/>
        </div>
        
    )

}