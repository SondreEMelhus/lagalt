//Libraries
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownItem from "react-bootstrap/esm/DropdownItem";

//Redux slices
import { selectKeyword, updateKeyword } from "../../redux/slices/filters/KeywordSlice";
import { selectIndustry } from "../../redux/slices/filters/IndustrySlice";

/**
 * Component responsible for managing and rendering the options in the keyword filterbox
 */
export default function KeywordBox () {

    //Hooks
    const industry = useSelector(selectIndustry);
    const keyword = useSelector(selectKeyword);
    const dispatch = useDispatch();

    //Render function
    return (
        <div>
            <p>Nøkkelord</p>
            <DropdownButton as={ButtonGroup}
                variant="success"
                id='KeywordBtn'
                title={keyword}>
            {industry.keywords !== undefined && industry.keywords.map((_keyword, index ) => {
                return (
                
                    <DropdownItem onClick={() => dispatch( updateKeyword (_keyword) )} id={_keyword} eventKey={index + '-' + _keyword} key={index + '-' + _keyword}>
                        {_keyword}
                    </DropdownItem>
                )
            })}
            </DropdownButton>
        </div>
    )
}