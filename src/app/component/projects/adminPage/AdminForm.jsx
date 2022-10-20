import React, { useEffect, useState } from "react";

//Components
import ProjectSkills from "../ProjectSkills";
import ProjectKeyWords from "../ProjectKeyWords";
import ProjectApplicants from "../ProjectApplicants";
import IndusrtyChanger from "../../dropdown/industyChanger";
import Visibility from '../../../../assets/visibility.png'
import { useDispatch, useSelector } from "react-redux";
import { patchProject, updateProject } from "../../../../api/ProjectAPI/projectsAPI";
import { selectProject, updateTitle, updateDescription, updateStatus } from "../../redux/slices/ProjectSlice";
import withAuth from "../../../../hoc/withAuth";



function AdminForm( {setTitle} ){    

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
        console.log(project);
    }, [])
    const onChangeTitle = () =>{
        const t = document.getElementById("title").value;
        setTitleInput(t)
        dispatch(updateTitle(t));
    }

    const onChangeDescription = () => {
        setDescriptionInput(document.getElementById("description").value);
        dispatch(updateDescription(document.getElementById("description").value));
    }
    async function sendUpdatedForm(){
        // patchProject(project)
        await updateProject(project);
        //const newProject = useSelector(selectProject)
    }
    
    const changeStatus = (event) =>{
        setStatus(event.target.value)
        StatusClicked(event)
        dispatch(updateStatus(status));
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
                <input type="text" className="titleInputAdmin" id="title" value={titleInput} onChange={onChangeTitle}/>
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
                <textarea name="" cols="53" rows="10" className="textAreaAdmin" id="description" value={descriptionInput} onChange={onChangeDescription}></textarea>
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
export default withAuth(AdminForm);