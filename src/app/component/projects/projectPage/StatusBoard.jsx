import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectStatusBoard } from "../../redux/slices/ContentBoards/StatusBoard/StatusBoardSlice";
import { updateStatus } from "../../redux/slices/ContentBoards/StatusBoard/StatusSlice";

import '../../../../css/contentBoard.css'

export default function StatusBoard () {

   const statusBoard = useSelector(selectStatusBoard);
   const dispatch = useDispatch();
   const navigate = useNavigate();

    return (
        <div className="content-board">
            <h1 className="content-title">Status</h1>
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
    )
}