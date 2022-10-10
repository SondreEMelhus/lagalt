import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectFilter } from '../redux/slices/FilteredSlice'
import Option from "./Option";

import magglass from '../../../assets/MagnifyingGlass.png';

export default function InputField ({ setText, setFound }) {

    const [inputText, setInputText] = useState('');

    const filteredList = useSelector(selectFilter);
    const dispatch = useDispatch();

    const handleInputChange =  (event) => {
        setFound(false);
        setText(event.target.value);
        setInputText(event.target.value);
    }

    return (
        <>
            <div className="searchField">
                    <img src={magglass} alt="" className="magnifyingGlass"/>
                    <input type="text" name="" id="" placeholder="Søk..." className="inputtext" onChange={ handleInputChange } value={inputText}/>
            </div>
            <div className="filter-options">
            {filteredList.map( item => {
                return (
                    <Option setText = { setText} item = { item } setInputText = { setInputText } setFound = { setFound } />
                )
            })}
            </div>
    </>

    )

}