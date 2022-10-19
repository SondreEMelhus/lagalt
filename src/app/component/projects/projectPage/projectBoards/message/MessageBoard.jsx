import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectMessageBoard } from "../../../../redux/slices/ContentBoards/MessageBoard/MessageBoardSlice";
import { updateMessage } from "../../../../redux/slices/ContentBoards/MessageBoard/MessageSlice";
import keycloak from "../../../../keycloak/keycloak";
import { checkUserStatus } from "../../../../util/CheckContributerStatus";

import create from '../../../../../../assets/create.png'

import '../../../../../../css/contentBoard.css'
import { selectProject } from "../../../../redux/slices/ProjectSlice";
import { selectUser } from "../../../../redux/slices/UserSlice";

export default function ContentBoard () {

   const messageBoard = useSelector(selectMessageBoard);
   const project = useSelector(selectProject);
   const user = useSelector(selectUser);
   const dispatch = useDispatch();
   const navigate = useNavigate();

    return (
        <div className="content-board">
            <div className="content-header">
                <h1 className="content-title">Meldinger</h1>
                {keycloak.authenticated && checkUserStatus(project, user) && <img src={create} alt='create' onClick={(event) => navigate('/postMessage')} className="create-button"/>}
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
                    </div>
                )
            })}
            </div>
        </div>
    )
}