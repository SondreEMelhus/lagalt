//Libraries
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//Components
import keycloak from "../../../../keycloak/keycloak";
import { checkUserStatus } from "../../../../util/CheckContributerStatus";

//Redux slices
import { selectUser } from "../../../../redux/slices/UserSlice";
import { selectProject } from "../../../../redux/slices/ProjectSlice";
import { updateMessage } from "../../../../redux/slices/ContentBoards/MessageBoard/MessageSlice";
import { selectMessageBoard } from "../../../../redux/slices/ContentBoards/MessageBoard/MessageBoardSlice";

//Styling
import '../../../../../../css/contentBoard.css'
import create from '../../../../../../assets/create.png'
import { trimTimestamp } from "../../../../util/TrimTimestamp";


export default function ContentBoard () {

    //Hooks
    const messageBoard = useSelector(selectMessageBoard);
    const project = useSelector(selectProject);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

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