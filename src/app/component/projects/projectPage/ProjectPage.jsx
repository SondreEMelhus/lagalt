import React, { useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

//Components
import Navbar from "../../navbar/Navbar";

//Style
import '../../../../css/project.css'
import { useDispatch, useSelector } from "react-redux";
import { selectProject } from "../../redux/slices/ProjectSlice";
import BubbleList from "../../bubbleList/BubbleList";

import music from '../../../../assets/note-svgrepo-com.svg';
import film from '../../../../assets/movie-camera-svgrepo-com.svg';
import game from '../../../../assets/video-game-control-svgrepo-com.svg';
import coding from '../../../../assets/coding-svgrepo-com.svg';
import Chat from "./Chat";
import MessageBoard from "./projectBoards/message/MessageBoard";
import StatusBoard from './projectBoards/status/StatusBoard';
import { resetMessageBoard, updateMessageBoard } from "../../redux/slices/ContentBoards/MessageBoard/MessageBoardSlice";
import { getAllContributers } from '../../../../api/ProjectAPI/projectsAPI'
import { getMessageBoard } from "../../../../api/ProjectAPI/messageBoardAPI";
import { getStatusBoard } from "../../../../api/ProjectAPI/statusBoardAPI";
import { resetStatusBoard, updateStatusBoard } from "../../redux/slices/ContentBoards/StatusBoard/StatusBoardSlice";
import { getChat } from "../../../../api/ProjectAPI/chatAPI";
import { updateChat } from "../../redux/slices/Chat";
import { useState } from "react";
import { checkUserRole } from "../../util/CheckUserRole";
import { selectUser } from "../../redux/slices/UserSlice";
import Applications from "./projectApplications/Applications";
import keycloak from "../../keycloak/keycloak";
import { checkUserStatus } from "../../util/CheckContributerStatus";
import { addInteractionHistory, getInteractionHistory } from "../../../../api/fetchUserAPI";
import { selectInteractionHistory, updateInteractionHistory } from "../../redux/slices/InteractionHistorySlice";
import { generateTimestamp } from "../../util/Timestamp";


export default function ProjectPage () {

    const [projectRole, setProjectRole] = useState('non');
    const project = useSelector(selectProject);
    const user = useSelector(selectUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const interactionHistory = useSelector(selectInteractionHistory);

    useEffect( () => {
        fetchInteractionHistory();
        fetchData();
    },[])

    //TODO: Legg til [error, data]
    const fetchData = async () => {
        const role = await getAllContributers(project.id);
        if (role) {
            setProjectRole(checkUserRole(user, role));
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
        if (chat[0]) {
            alert('Feil: Klarte ikke å hente chat. Kontakt administrator for hjelp.')
        } else {
            if (chat[1].length !== 0) {
                dispatch ( updateChat ( chat[1] ))
            } else {
                dispatch ( updateChat ( [] ))
            }
        }
        if (keycloak.authenticated) {
            handleInteractionHist(user.id, project.id);
        }

    }

    const fetchInteractionHistory = async () => {
        if (keycloak.authenticated) {
            const data = await getInteractionHistory(user.id);
            if (data[0]) {
                alert('Feil: Klarte ikke å hente prosjekthistorikk. Kontakt en administrator for hjelp')
            } else {
                dispatch ( updateInteractionHistory ( data[1]));
            }
        }
    }

    const handleInteractionHist = async (userId, projectId) => {
        let added = false;
            if (interactionHistory === undefined) {
                addNewProject(userId, projectId);
            } else {
                for (let projectInteraction of interactionHistory) {
                    if (projectInteraction.projectId === project.id) {
                        const interaction = {
                            timestamp: generateTimestamp(),
                            visited: true,
                            account: {
                                id: userId
                            },
                            project: {
                                id: projectId
                            }
                        }
                        const result = updateInteractionHistory(interaction, project.id);
                        if (result[0]) {
                            alert('Feil: Klarte ikke å oppdater prosjekthistorikken din. Kontakt administrator for hjelp.')
                        } else {
                            const newInteractionHistory = await getInteractionHistory(user.id);
                            dispatch ( updateInteractionHistory( newInteractionHistory ) );
                            added = true;
                        }
                        break;
                    }
                }
                if (!added) {
                    addNewProject(userId, projectId);
                }
            }
        }
    
    const addNewProject = async ( userId, projectId) => {
        const interaction = {
            timestamp: generateTimestamp(),
            visited: true,
            account: {
                id: userId
            },
            project: {
                id: projectId
            }
        }
        const result = addInteractionHistory(interaction);
        if (result[0]) {
            alert('Feil: Klarte ikke å legge prosjektet til i prosjekthistorikken din. Kontakt administrator for hjelp.')
        } else {
            const newInteractionHistory = await getInteractionHistory(user.id, userId, projectId);
            dispatch ( updateInteractionHistory( newInteractionHistory[1] ) );
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

    const navigateToAdmin = () => {
        navigate('/admin');
    }

    const navigateToApplication = () => {
        navigate('/apply')
    }



    return(
        <div>
            <div className="topDivProject">
                <img src={ chooseIcon(project.industry) } alt="" className="icon"/>
                <h2>{project.title}</h2>
                <div className="statusField">
                    <p className="statusText">{project.status}</p>
                </div>
                {keycloak.authenticated && !checkUserStatus(project, user) && <button className="joinButton" onClick={navigateToApplication}>Bli med</button>}
                <button className="adminButton" onClick={navigateToAdmin}>Administrer</button>
            </div>
            <div className="projectInfoField">
                <p className="descriptionProject">{project.description}</p>
                <p>Nøkkelord:</p>
                <BubbleList list={ project.keywords } />
                <p>Ferdigheter vi trenger:</p>
                <BubbleList list={ project.skills } />
                <StatusBoard />
                {keycloak.authenticated && 
                    <div>
                        <MessageBoard />
                        <Chat />
                    </div>
                }
                <Applications />
                {projectRole === 'admin' || projectRole === 'owner' && <Applications />}
                <div className="footer"></div>
            </div>
        </div>
    )
}