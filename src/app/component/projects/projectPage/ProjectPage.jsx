import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Components
import Navbar from "../../navbar/Navbar";

//Style
import '../../../../css/project.css'
import { useDispatch, useSelector } from "react-redux";
import { selectProject } from "../../redux/slices/ProjectSlice";
import BubbleList from "../../bubbleList/BubbleList";

import music from '../../../../assets/musicalNote.png';
import film from '../../../../assets/videoIcon.png';
import game from '../../../../assets/playIcon.png';
import coding from '../../../../assets/codingIcon.png';
import Chat from "./Chat";
import MessageBoard from "./MessageBoard";
import StatusBoard from './StatusBoard';
import { resetMessageBoard, updateMessageBoard } from "../../redux/slices/ContentBoards/MessageBoard/MessageBoardSlice";
import { getAllContributers } from '../../../../api/ProjectAPI/projectsAPI'
import { getMessageBoard } from "../../../../api/ProjectAPI/messageBoardAPI";
import { getStatusBoard } from "../../../../api/ProjectAPI/statusBoardAPI";
import { resetStatusBoard, updateStatusBoard } from "../../redux/slices/ContentBoards/StatusBoard/StatusBoardSlice";
import { getChat } from "../../../../api/ProjectAPI/chatAPI";
import { updateChat } from "../../redux/slices/Chat";
import { useState } from "react";
import { checkUserRole } from "../../util/CheckUserRole";


export default function ProjectPage () {

    const [projectRole, setProjectRole] = useState('');
    const project = useSelector(selectProject);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect( () => {
        fetchData();
    })

    const fetchData = async () => {
        const role = await getAllContributers(project.id);
        if (role) {
            setProjectRole(checkUserRole(role));
        }
        const messageBoard = await getMessageBoard(project.id);
        if (messageBoard) {
            dispatch ( updateMessageBoard ( messageBoard ) );
        } else {
            dispatch ( resetMessageBoard () );
        }
        const statusBoard = await getStatusBoard(project.id);
        if (statusBoard) {
            dispatch ( updateStatusBoard ( statusBoard ));
        } else {
            dispatch ( resetStatusBoard () );
        }
        const chat = await getChat(project.id);
        if (chat) {
            dispatch ( updateChat ( chat ))
        } else {
            dispatch ( updateChat ( [] ))
        }
    }

    const chooseIcon = (industry) => {
        if (industry === 'Musikk') {
            return music;
        }
        if (industry === 'Film') {
            return film;
        }
        if (industry === 'Spillutvikling') {
            return game;
        }
        if (industry === 'Webutvikling') {
            return coding;
        }
    }

    //TODO: Legg inn sjekk for å se om du er admin
    const navigateToAdmin = () => {
        navigate('/admin');
    }

    const navigateToApplication = () => {
        navigate('/apply')
    }



    return(
        <div>
            <Navbar/>
            <div className="topDivProject">
                <img src={ chooseIcon(project.industry) } alt="" className="icon"/>
                <h2>{project.title}</h2>
                <div className="statusField">
                    <p className="statusText">{project.status}</p>
                </div>
                <button className="joinButton" onClick={navigateToApplication}>Bli med</button>
                <button className="adminButton" onClick={navigateToAdmin}>Administrer</button>
            </div>
            <div className="projectInfoField">
                <h3 className="projecSubTitle">Sub-header</h3>
                <p className="descriptionProject">{project.description}</p>
                <p>Nøkkelord:</p>
                <BubbleList list={ project.keywords } />
                <p>Ferdigheter vi trenger:</p>
                <BubbleList list={ project.skills } />
                {/* TODO: Legg til fetchMethod for statusBoard <ContentBoard id='UpdateBoard' list={} />*/}
                {/* TODO: Legg til fetchMethod for messageBoard <ContentBoard id='MessageBoard' list={} />*/}
                <Chat />
                <MessageBoard />
                <StatusBoard />
                <div className="footer"></div>
            </div>
        </div>
    )
}