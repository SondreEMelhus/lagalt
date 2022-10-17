import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectStatusBoard } from "../../redux/slices/ContentBoards/StatusBoard/StatusBoardSlice";
import { updateStatus } from "../../redux/slices/ContentBoards/StatusBoard/StatusSlice";

export default function StatusBoard () {

   const statusBoard = useSelector(selectStatusBoard);
   const dispatch = useDispatch();
   const navigate = useNavigate();

    return (
        <div>
            <h1>Status</h1>
            {statusBoard !== undefined && statusBoard.map((status, index) => {
                return (
                    //TODO: Bruk message-board controller
                    <div key={index}>
                        <p onClick={(e) => {
                            dispatch( updateStatus ( status ))
                            navigate('/status')
                        }} obj={status}>{status.text}</p>
                    </div>
                )
            })}
        </div>
    )
}