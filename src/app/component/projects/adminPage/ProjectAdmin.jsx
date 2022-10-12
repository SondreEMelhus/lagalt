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

    const project = useSelector(selectAdmin);
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');

    useEffect(() =>{
        console.log("logging project")
        console.log(project)
    }, [])

    useEffect((prevTitle) => {
        if (prevTitle !== title) {
           // console.log(title);
        }

    }, [title])
    
    //const onChangeTitle = (text) =>{
      //  setTitle(text)
    //}
    //Changing status, for now it only changes the css
    //TODO: Add so that it actually changes the status of the given project
    const StatusClicked = event =>{
        document.getElementById("planing").className = "statusButtonWhite"
        document.getElementById("started").className = "statusButtonWhite"
        document.getElementById("finished").className = "statusButtonWhite"
        event.currentTarget.className = "statusButtonBlue"
    }
    
    return (
        <div>
            <Navbar/>
            <AdminForm StatusClicked={StatusClicked} setTitle={setTitle}/>
        </div>
        
    )

}