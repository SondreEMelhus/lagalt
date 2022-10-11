//Libraries
import React from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownItem from "react-bootstrap/esm/DropdownItem";

//Components
import { useSelector, useDispatch } from "react-redux";
import { selectKeywords } from '../../redux/slices/filters/lists/KeywordsSlice'
import { selectKeyword, updateKeyword } from "../../redux/slices/filters/KeywordSlice";


export default function KeywordBox () {

    const keywords = useSelector(selectKeywords);
    const keyword = useSelector(selectKeyword);
    const dispatch = useDispatch();

    const handleClick = (event) => {
        dispatch( updateKeyword ( event.target.id ));
    }

    return (
        <div>
            <p>Nøkkelord</p>
            <DropdownButton as={ButtonGroup}
                variant="success"
                id='KeywordBtn'
                title={keyword}>
            {keywords.map((_keyword, index ) => {
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