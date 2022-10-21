//Libraries
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//Components
import ProjectSkills from "./ProjectSkills"
import ProjectKeyWords from "./ProjectKeywords";
import ProjectApplicants from "../ProjectApplicants";
import IndusrtyChanger from "../../dropdown/industyChanger";
import { updateProject } from "../../../../api/ProjectAPI/projectsAPI";
import withAuth from "../../../../hoc/withAuth";

//Redux slices
import { selectUserAdmin } from "../../redux/slices/UserAdminSlice";
import { selectProject, updateTitle, updateDescription, updateStatus } from "../../redux/slices/ProjectSlice";

//Styling
import Visibility from '../../../../assets/visibility.png'


function AdminForm(){    

    //Hooks
    const userIsAdmin = useSelector(selectUserAdmin);
    const project = useSelector(selectProject);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //States
    const[titleInput, setTitleInput] = useState(project.title);
    const[descriptionInput, setDescriptionInput] = useState(project.description);
    const[status, setStatus] = useState(project.status);

    
    useEffect(() => {
        if (userIsAdmin === null) { navigate('/') };
        if (status === 'Ferdig') { document.getElementById("finished").className = "statusButtonBlue" };
        if (status === 'Planlegges') { document.getElementById("planing").className = "statusButtonBlue" }
        if (status === 'Startet') { document.getElementById("started").className = "statusButtonBlue" }
    }, [])

    //Event handlers
    const onChangeTitle = () =>{
        const title = document.getElementById("title").value;
        setTitleInput(title);
        dispatch( updateTitle ( title ) );
    }

    const onChangeDescription = () => {
        setDescriptionInput(document.getElementById("description").value);
        dispatch(updateDescription(document.getElementById("description").value));
    }

    //TODO: Legg til sjekk om oppdatering ble fullført
    const sendUpdatedForm = async () => {
        await updateProject(project);
    }

    const statusClicked = (event) =>{
        document.getElementById("planing").className = "statusButtonWhite"
        document.getElementById("started").className = "statusButtonWhite"
        document.getElementById("finished").className = "statusButtonWhite"
        event.currentTarget.className = "statusButtonBlue"
    }
    
    const changeStatus = (event) =>{
        setStatus(event.target.value)
        statusClicked(event)
        dispatch( updateStatus ( status ) );
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