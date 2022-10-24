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

/**
 * Component responsible for rendering and managing a project page
 */
export default function ProjectPage () {

    //Hooks
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const project = useSelector(selectProject);
    const interactionHistory = useSelector(selectInteractionHistory);

    //States
    const [, setProjectRole] = useState('non');

    useEffect( () => {
        fetchInteractionHistory();
        fetchData();
    },[])

    


    /**
     * Method used to fetch all necessary data to display the project page
     */
    const fetchData = async () => {
        //Fetch user role
        const role = await getAllContributers(project.id);
        if (role) { setProjectRole( checkUserRole(user, role) ) };
       
        //Fetch messageboard
        const messageBoard = await getMessageBoard(project.id);
        messageBoard.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));
        messageBoard ? dispatch ( updateMessageBoard (messageBoard) ) : dispatch ( resetMessageBoard () );

        //Fetch statusboard
        const statusBoard = await getStatusBoard(project.id);
        statusBoard.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));
        statusBoard ? dispatch ( updateStatusBoard ( statusBoard )) : dispatch ( resetStatusBoard () );

        //Fetch chat
        fetchChat();

        //Fetch user interaction history
        if (keycloak.authenticated) {
            handleInteractionHist(user.id, project.id);
        }
    }

    /**
     * Method used to fetch the chat of a project
     */
    const fetchChat = async () => {
        const chat = await getChat(project.id);
        if (chat[0]) {
            alert('Feil: Klarte ikke å hente chat. Kontakt administrator for hjelp.')
        } else {
            if (chat[1].length !== 0) {
                chat[1].sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));
                dispatch ( updateChat ( chat[1] ))
            } else {
                dispatch ( updateChat ( [] ))
            }
        }
    }

    /**
     * Method used to fetch the interaction history of a project
     */
    const fetchInteractionHistory = async () => {
        if (keycloak.authenticated) {
            const data = await getInteractionHistory(user.id);
            data[0] ? alert('Feil: Klarte ikke å hente prosjekthistorikk. Kontakt en administrator for hjelp') : dispatch ( updateInteractionHistory ( data[1]));
        }
    }

    /**
     * Method used to add a users id to the interaciton history, so that the user can track what projects
     * they have interacted with 
     */
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
    
    /**
     * Method used to add a new project to the users interaction history if not previous interaction
     * exists
     */
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

    /**
     * Method used to choose what industry icon to display based on the projects industry
     */
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

    //Render function
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
                <div className="projectList">
                    <BubbleList list={ project.keywords } />
                </div>
                <p>Ferdigheter vi trenger:</p>
                <div className="projectList">
                    <BubbleList list={ project.skills } />
                </div>
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