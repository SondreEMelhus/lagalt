//Libraries
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//Components
import keycloak from "../../../../keycloak/keycloak";
import { checkUserStatus } from "../../../../util/CheckContributerStatus";

//Redux slices
import { selectUser } from "../../../../redux/slices/UserSlice";
import { selectProject } from "../../../../redux/slices/ProjectSlice";
import { updateStatus } from "../../../../redux/slices/ContentBoards/StatusBoard/StatusSlice";
import { selectStatusBoard } from "../../../../redux/slices/ContentBoards/StatusBoard/StatusBoardSlice";

//Styling
import '../../../../../../css/contentBoard.css'
import create from '../../../../../../assets/create.png'
import { trimTimestamp } from "../../../../util/TrimTimestamp";


export default function StatusBoard () {

    //Hooks
   const statusBoard = useSelector(selectStatusBoard);
   const project = useSelector(selectProject);
   const user = useSelector(selectUser);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   //Render function
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
                    <div key={index} className="content-item">
                        <p onClick={(e) => {
                            dispatch( updateStatus ( status ))
                            navigate('/status')
                        }} obj={status} className="content-text">{status.text}</p>
                        <em className="content-author">Postet av: {status.username}, {trimTimestamp(status.timestamp)}</em>
                    </div>
                )
            })}
            </div>
        </div>
    )
}