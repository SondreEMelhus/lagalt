import React, { useState } from "react";

//Components
import ProjectSkills from "../ProjectSkills";
import ProjectKeyWords from "../ProjectKeyWords";
import ProjectApplicants from "../ProjectApplicants";
import IndusrtyChanger from "../../dropdown/industyChanger";
import Visibility from '../../../../assets/visibility.png'
import { useDispatch, useSelector } from "react-redux";
import { selectAdmin } from "../../redux/slices/AdminSlice";



export default function AdminForm( {StatusClicked, setTitle} ){    

    const project = useSelector(selectAdmin);
    const[titleInput, setTitleInput] = useState(project.name);

    const onChangeTitle = (event) =>{
        setTitleInput(event.target.value)
        setTitle(event.target.value)
    }

    return (
        <div>
            <div className="pageAdmin">
            <div>
            <div className="headProjectAdmin">
                <h2>Administrer prosjekt</h2>
                <button className="buttonUpdateAdmin">Oppdater</button>
            </div>
            <div className="titleDivAdmin">
                <p className="titleTextAdmin">Tittel:</p>
                <input type="text" className="titleInputAdmin" value={titleInput} onChange={onChangeTitle}/>
                <div className="industryChanger">
                <IndusrtyChanger/>
                </div>
            </div>
            <div className="titleDivAdmin">
                <p className="titleTextAdmin">Status:</p>
                <button className="statusButtonWhite" onClick={StatusClicked} id="planing">Planlegges</button>
                <button className="statusButtonWhite" onClick={StatusClicked} id="started">Startet</button>
                <button className="statusButtonWhite" onClick={StatusClicked} id="finished">Ferdig</button>
                <div class="musicNoteBoxAdmin">
                    <img src={Visibility} alt="" className="visibilityIconAdmin"/>
                </div>
            </div>
            <div className="descriptionDivAdmin">
                <p>Prosjekt beskrivelse</p>
                <textarea name="" id="" cols="53" rows="10" className="textAreaAdmin"></textarea>
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