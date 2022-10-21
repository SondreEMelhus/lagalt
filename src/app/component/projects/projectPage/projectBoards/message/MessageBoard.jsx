//Libraries
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//Components
import keycloak from "../../../../keycloak/keycloak";
import { trimTimestamp } from "../../../../util/TrimTimestamp";
import { checkUserStatus } from "../../../../util/CheckContributerStatus";

//API
import { getMessageBoard } from "../../../../../../api/ProjectAPI/messageBoardAPI";

//Redux slices
import { selectUser } from "../../../../redux/slices/UserSlice";
import { selectProject } from "../../../../redux/slices/ProjectSlice";
import { updateMessage } from "../../../../redux/slices/ContentBoards/MessageBoard/MessageSlice";
import { resetMessageBoard, selectMessageBoard, updateMessageBoard } from "../../../../redux/slices/ContentBoards/MessageBoard/MessageBoardSlice";

//Styling
import '../../../../../../css/contentBoard.css'
import create from '../../../../../../assets/create.png'


export default function ContentBoard () {

    //Hooks
    const messageBoard = useSelector(selectMessageBoard);
    const project = useSelector(selectProject);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //States
    const [count, setCount] = useState(0);

    useEffect(() => {
        const id = setInterval(() => setCount((oldCount) => oldCount + 1), 1000);

        return () => {
          clearInterval(id);
        };
    }, [])

    useEffect(() => {
        if (count % 15 === 0) {
            fetchMessageBoard()
        }
    }, [count])

    const fetchMessageBoard = async () => {
        const messageBoard = await getMessageBoard(project.id);
        messageBoard.sort((a,b) => (a.id < b.id) ? 1 : ((b.id < a.id) ? -1 : 0));
        messageBoard ? dispatch ( updateMessageBoard (messageBoard) ) : dispatch ( resetMessageBoard () );
    }

    //Render function
    return (
        <div className="content-board">
            <div className="content-header">
                <h1 className="content-title">Meldinger</h1>
                {keycloak.authenticated && checkUserStatus(project, user) && <img src={create} alt='create' onClick={() => navigate('/postMessage')} className="create-button"/>}
            </div>
            <div className="content-box">
            {messageBoard.length === 0 && <h3 className="no-content">Ingen beskjeder er postet enda</h3>}
            {messageBoard !== undefined && messageBoard.map((message, index) => {
                return (
                    //TODO: Bruk message-board controller
                    <div key={index} className="content-item">
                        <p onClick={(e) => {
                            dispatch( updateMessage ( message ))
                            navigate('/message')
                        }} obj={message} className="content-text">{message.text}</p>
                        <em className="content-author">Postet av: {message.username}, {trimTimestamp(message.timestamp)}</em>
                    </div>
                )
            })}
            </div>
        </div>
    )
}