import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { filter as filterFunction } from "./Filters";
import { reset, search } from '../redux/slices/FilteredSlice'
import InputField from "./InputField";

import '../../../css/searchbar.css'
import { selectProjectNames } from "../redux/slices/filters/lists/ProjectNamesSlice";


//TODO: Endre dette så det bruker provider pattern (Unngå propdrilling)

export default function Searchbar () {

    const filterList = useSelector(selectProjectNames);

    const [text, setText] = useState('');
    const [found, setFound] = useState(false);

    const dispatch = useDispatch();

    useEffect((prevText) => {
        if (prevText !== text) {
            dispatch( search ( filterFunction(text, filterList) ) );
            console.log(text);
        }
        if (text !== '' && found) {
            dispatch( reset ());
        }
    }, [text, dispatch])

    return (
        <div className="searchbar">
            <InputField setText = { setText } setFound = { setFound } />
        </div>
    )
}