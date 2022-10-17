import React, { useEffect, useState } from "react";

//Components
import ProjectSkills from "../ProjectSkills";
import ProjectKeyWords from "../ProjectKeyWords";
import ProjectApplicants from "../ProjectApplicants";
import IndusrtyChanger from "../../dropdown/industyChanger";
import Visibility from '../../../../assets/visibility.png'
import { useDispatch, useSelector } from "react-redux";
import { patchProject } from "../../../../api/ProjectAPI/projectsAPI";
import { selectProject, updateTitle, updateDescription, updateStatus } from "../../redux/slices/ProjectSlice";



export default function AdminForm( {setTitle} ){    

    const project = useSelector(selectProject);
    const[titleInput, setTitleInput] = useState(project.title);
    const[descriptionInput, setDescriptionInput] = useState(project.description);
    const[status, setStatus] = useState(project.status);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(status === 'Ferdig'){
            document.getElementById("finished").className = "statusButtonBlue"
        } else if(status === 'Planlegges'){
            document.getElementById("planing").className = "statusButtonBlue"
        } else if(status === 'Startet'){
            document.getElementById("started").className = "statusButtonBlue"
        }
    }, [])

    const onChangeTitle = (event) =>{
        setTitleInput(event.target.value)
        setTitle(event.target.value)
    }

    const onChangeDescription = (event) => {
        setDescriptionInput(event.target.value);
    }
    function sendUpdatedForm(){
        dispatch(updateTitle(titleInput));
        console.log(titleInput + " Logging inp") ;
        console.log(project.title);
        dispatch(updateDescription(descriptionInput));
        dispatch(updateStatus(status));
        patchProject(project)
        //const newProject = useSelector(selectProject)
    }
    
    const changeStatus = (event) =>{
        setStatus(event.target.value)
        StatusClicked(event)
    }
    const StatusClicked = (event) =>{
        document.getElementById("planing").className = "statusButtonWhite"
        document.getElementById("started").className = "statusButtonWhite"
        document.getElementById("finished").className = "statusButtonWhite"
        event.currentTarget.className = "statusButtonBlue"
    }

    return (
        <div>
            <div className="pageAdmin">
            <div>
            <div className="headProjectAdmin">
                <h2>Administrer prosjekt</h2>
                <button className="buttonUpdateAdmin" onClick={sendUpdatedForm}>Oppdater</button>
            </div>
            <div className="titleDivAdmin">
                <p className="titleTextAdmin">Tittel:</p>
                <input type="text" className="titleInputAdmin" value={titleInput} onChange={onChangeTitle}/>
                <div className="industryChanger">
                <IndusrtyChanger industry={project.industry}/>
                </div>
            </div>
            <div className="titleDivAdmin">
                <p className="titleTextAdmin">Status:</p>
                <button className="statusButtonWhite" onClick={changeStatus} id="planing" value="Planlegges">Planlegges</button>
                <button className="statusButtonWhite" onClick={changeStatus} id="started" value="Startet">Startet</button>
                <button className="statusButtonWhite" onClick={changeStatus} id="finished" value="Ferdig">Ferdig</button>
                <div class="musicNoteBoxAdmin">
                    <img src={Visibility} alt="" className="visibilityIconAdmin"/>
                </div>
            </div>
            <div className="descriptionDivAdmin">
                <p>Prosjekt beskrivelse</p>
                <textarea name="" id="" cols="53" rows="10" className="textAreaAdmin" value={descriptionInput} onChange={onChangeDescription}></textarea>
            </div>
            </div>

            <div className="leftSide">
                <div className="cards">
                    <ProjectSkills/>
                </div>
                <div className="cards">
                    <ProjectKeyWords/>
                </div>
                <div className="cards">
                    <ProjectApplicants/>
                </div>
            </div>
        </div>
        </div>
    )

}