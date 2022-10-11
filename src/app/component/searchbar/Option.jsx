import React from "react";

import { useDispatch } from "react-redux";
import { reset } from '../redux/slices/FilteredSlice'

export default function Option ({ setText, item, setInputText, setFound}) {

    const dispatch = useDispatch();

    const handleClick =  (event) => {
        setText(event.target.value);
        setInputText(event.target.value);
        setFound(true);
        dispatch( reset ( ) );
    }

    return (
        <div>
            <button className="option" onClick={handleClick} value={item}>{item}</button>
        </div>
    )
}