import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectStatusBoard } from "../../../../redux/slices/ContentBoards/StatusBoard/StatusBoardSlice";
import { updateStatus } from "../../../../redux/slices/ContentBoards/StatusBoard/StatusSlice";
import keycloak from "../../../../keycloak/keycloak";
import { checkUserStatus } from "../../../../util/CheckContributerStatus";

import create from '../../../../../../assets/create.png'

import '../../../../../../css/contentBoard.css'
import { selectProject } from "../../../../redux/slices/ProjectSlice";
import { selectUser } from "../../../../redux/slices/UserSlice";

export default function StatusBoard () {

   const statusBoard = useSelector(selectStatusBoard);
   const project = useSelector(selectProject);
   const user = useSelector(selectUser);
   const dispatch = useDispatch();
   const navigate = useNavigate();

    return (
        <div className="content-board">
            <div className="content-header">
                <h1 className="content-title">Status</h1>
                {keycloak.authenticated && checkUserStatus(project, user) && <img src={create} alt='create' onClick={(event) => navigate('/postStatus')} className="create-button" />}
            </div>
            <div className="content-box">
            {statusBoard.length === 0 && <h3 className="no-message">Ingen status oppdateringer er postet enda</h3>}
            {statusBoard !== undefined && statusBoard.map((status, index) => {
                return (
                    //TODO: Bruk message-board controller
                    <div key={index} className="content-item">
                        <p onClick={(e) => {
                            dispatch( updateStatus ( status ))
                            navigate('/status')
                        }} obj={status} className="content-text">{status.text}</p>
                    </div>
                )
            })}
            </div>
        </div>
    )
}