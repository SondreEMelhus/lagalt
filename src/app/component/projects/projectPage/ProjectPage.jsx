//Libraries
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//Components
import Chat from "./Chat";
import keycloak from "../../keycloak/keycloak";
import BubbleList from "../../bubbleList/BubbleList";
import { checkUserRole } from "../../util/CheckUserRole";
import { generateTimestamp } from "../../util/Timestamp";
import StatusBoard from './projectBoards/status/StatusBoard';
import Applications from "./projectApplications/ApplicationsRenderer";
import MessageBoard from "./projectBoards/message/MessageBoard";
import { checkUserStatus } from "../../util/CheckContributerStatus";

//API
import { getChat } from "../../../../api/ProjectAPI/chatAPI";
import { getStatusBoard } from "../../../../api/ProjectAPI/statusBoardAPI";
import { getAllContributers } from '../../../../api/ProjectAPI/projectsAPI'
import { getMessageBoard } from "../../../../api/ProjectAPI/messageBoardAPI";
import { addInteractionHistory, getInteractionHistory } from "../../../../api/fetchUserAPI"

//Redux slices
import { updateChat } from "../../redux/slices/Chat";
import { selectUser } from "../../redux/slices/UserSlice";
import { selectProject } from "../../redux/slices/ProjectSlice";
import { selectInteractionHistory, updateInteractionHistory } from "../../redux/slices/InteractionHistorySlice";
import { resetStatusBoard, updateStatusBoard } from "../../redux/slices/ContentBoards/StatusBoard/StatusBoardSlice";
import { resetMessageBoard, updateMessageBoard } from "../../redux/slices/ContentBoards/MessageBoard/MessageBoardSlice";

//Styling
import '../../../../css/project.css'
import music from '../../../../assets/note-svgrepo-com.svg';
import coding from '../../../../assets/coding-svgrepo-com.svg';
import film from '../../../../assets/movie-camera-svgrepo-com.svg';
import game from '../../../../assets/video-game-control-svgrepo-com.svg';


export default function ProjectPage () {

    //Hooks
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const project = useSelector(selectProject);
    const interactionHistory = useSelector(selectInteractionHistory);

    //States
    const [projectRole, setProjectRole] = useState('non');

    useEffect( () => {
        fetchInteractionHistory();
        fetchData();
    },[])

    //TODO: Legg til [error, data]
    const fetchData = async () => {
        //Fetch user role
        const role = await getAllContributers(project.id);
        if (role) { setProjectRole( checkUserRole(user, role) ) };
       
        //Fetch messageboard
        const messageBoard = await getMessageBoard(project.id);
        messageBoard ? dispatch ( updateMessageBoard (messageBoard) ) : dispatch ( resetMessageBoard () );

        //Fetch statusboard
        const statusBoard = await getStatusBoard(project.id);
        statusBoard ? dispatch ( updateStatusBoard ( statusBoard )) : dispatch ( resetStatusBoard () );

        //Fetch chat
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

        //Fetch user interaction history
        if (keycloak.authenticated) {
            handleInteractionHist(user.id, project.id);
        }
    }

    const fetchInteractionHistory = async () => {
        if (keycloak.authenticated) {
            const data = await getInteractionHistory(user.id);
            data[0] ? alert('Feil: Klarte ikke å hente prosjekthistorikk. Kontakt en administrator for hjelp') : dispatch ( updateInteractionHistory ( data[1]));
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

    return(
        <div>
            <div className="topDivProject">
                <img src={ chooseIcon(project.industry) } alt="" className="icon"/>
                <h2>{project.title}</h2>
                <div className="statusField">
                    <p className="statusText">{project.status}</p>
                </div>
                {keycloak.authenticated && !checkUserStatus(project, user) && <button className="joinButton" onClick={() => navigate('/apply')}>Bli med</button>}
                <button className="adminButton" onClick={() => navigate('/admin')}>Administrer</button>
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
                <div className="footer"></div>
            </div>
        </div>
    )
}