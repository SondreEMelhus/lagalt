import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectMessageBoard } from "../../redux/slices/ContentBoards/MessageBoard/MessageBoardSlice";
import { updateMessage } from "../../redux/slices/ContentBoards/MessageBoard/MessageSlice";

export default function ContentBoard () {

   const messageBoard = useSelector(selectMessageBoard);
   const dispatch = useDispatch();
   const navigate = useNavigate();

    return (
        <div>
            <h1>Meldinger</h1>
            {messageBoard !== undefined && messageBoard.map((message, index) => {
                return (
                    //TODO: Bruk message-board controller
                    <div key={index}>
                        <p onClick={(e) => {
                            dispatch( updateMessage ( message ))
                            navigate('/message')
                        }} obj={message}>{message.text}</p>
                    </div>
                )
            })}
        </div>
    )
}