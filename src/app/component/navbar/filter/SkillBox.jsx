//Libraries
import React, { useState } from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownItem from "react-bootstrap/esm/DropdownItem";

//Components
import { useSelector, useDispatch } from "react-redux";
import { selectSkill, updateSkill } from "../../redux/slices/filters/SkillSlice";
import { selectIndustry } from "../../redux/slices/filters/IndustrySlice";

export default function SkillBox () {


    const industry = useSelector(selectIndustry);
    const skill = useSelector(selectSkill);
    const dispatch = useDispatch();

    const handleClick = (event) => {
        console.log(industry);
        dispatch( updateSkill (event.target.id))
    }

    return (
        <div>
            <p>Ferdigheter</p>
            <DropdownButton as={ButtonGroup}
                variant="success"
                id='SkillsBtn'
                title={skill}>
            {industry.skills !== undefined && industry.skills.map((_skill, index ) => {
                return (
                    <DropdownItem onClick={(event => dispatch( updateSkill (_skill)))} id={_skill} eventKey={index + '-' + _skill} key={index + '-' + _skill}>
                        {_skill}
                    </DropdownItem>
                )
            })}
            </DropdownButton>
        </div>
    )
}