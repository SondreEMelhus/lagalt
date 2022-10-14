//Libraries
import React, { useState } from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownItem from "react-bootstrap/esm/DropdownItem";

//Components
import { useSelector, useDispatch } from "react-redux";
import { selectKeyword, updateKeyword } from "../../redux/slices/filters/KeywordSlice";
import { selectIndustry } from "../../redux/slices/filters/IndustrySlice";


export default function KeywordBox () {

    const industry = useSelector(selectIndustry);
    const keyword = useSelector(selectKeyword);
    const dispatch = useDispatch();

    const handleClick = (event) => {
        dispatch( updateKeyword (event.target.id) )
    }

    //TODO: Legg til en ekstra knapp under map som setter keyword til å være {} og keyword title til Nøkkelord
    return (
        <div>
            <p>Nøkkelord</p>
            <DropdownButton as={ButtonGroup}
                variant="success"
                id='KeywordBtn'
                title={keyword}>
            {industry.keywords.map((_keyword, index ) => {
                return (
                
                    <DropdownItem onClick={handleClick} id={_keyword} eventKey={index + '-' + _keyword} key={index + '-' + _keyword}>
                        {_keyword}
                    </DropdownItem>
                )
            })}
            </DropdownButton>
        </div>
    )
}