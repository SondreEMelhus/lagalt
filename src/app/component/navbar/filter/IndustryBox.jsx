//Libraries
import React from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownItem from "react-bootstrap/esm/DropdownItem";

//Components
import { useSelector, useDispatch } from "react-redux";
import { selectIndustries } from "../../redux/slices/filters/lists/IndustriesSlice";
import { selectIndustry, update } from "../../redux/slices/filters/IndustrySlice";

export default function IndustryBox () {

    const industries = useSelector(selectIndustries);
    const industry = useSelector(selectIndustry);
    const dispatch = useDispatch();

    const handleClick = (event) => {
        dispatch( update (event.target.id) )
    }

    return (
        <div>
            <DropdownButton as={ButtonGroup}
                      variant="success"
                      id='IndustriKnapp'
                      title={industry}>
            {industries.map((_industry, index) => {
                return (
                    <DropdownItem onClick={handleClick} id={_industry} eventKey={index}>
                    {_industry}
                    </DropdownItem>
                )
            })}
            </DropdownButton>
        </div>
    )
}