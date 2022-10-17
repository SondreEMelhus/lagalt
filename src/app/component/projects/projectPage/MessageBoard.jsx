import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectMessageBoard } from "../../redux/slices/ContentBoards/MessageBoard/MessageBoardSlice";
import { updateMessage } from "../../redux/slices/ContentBoards/MessageBoard/MessageSlice";

import '../../../../css/contentBoard.css'

export default function ContentBoard () {

   const messageBoard = useSelector(selectMessageBoard);
   const dispatch = useDispatch();
   const navigate = useNavigate();

    return (
        <div className="content-board">
            <h1 className="content-title">Meldinger</h1>
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
    )
}