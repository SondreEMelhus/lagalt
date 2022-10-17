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
import { updateMessageBoard } from "../../redux/slices/ContentBoards/MessageBoard/MessageBoardSlice";
import { getMessageBoard } from "../../../../api/ProjectAPI/messageBoardAPI";
import { getStatusBoard } from "../../../../api/ProjectAPI/statusBoardAPI";
import { updateStatusBoard } from "../../redux/slices/ContentBoards/StatusBoard/StatusBoardSlice";
import { getChat } from "../../../../api/ProjectAPI/chatAPI";
import { updateChat } from "../../redux/slices/Chat";


export default function ProjectPage () {

    const project = useSelector(selectProject);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect( () => {
        fetchData();
    })

    const fetchData = async () => {
        const messageBoard = await getMessageBoard(project.id);
        if (messageBoard) {
            dispatch ( updateMessageBoard ( messageBoard ) );
        }
        const statusBoard = await getStatusBoard(project.id);
        if (statusBoard) {
            dispatch ( updateStatusBoard ( statusBoard ));
        }
        const chat = await getChat(project.id);
        if (chat) {
            dispatch ( updateChat ( chat ))
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

    return(
        <div>
            <Navbar/>
            <div className="topDivProject">
                <img src={ chooseIcon(project.industry) } alt="" className="icon"/>
                <h2>{project.title}</h2>
                <div className="statusField">
                    <p className="statusText">{project.status}</p>
                </div>
                <button className="joinButton">Bli med</button>
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
            </div>
        </div>
    )
}