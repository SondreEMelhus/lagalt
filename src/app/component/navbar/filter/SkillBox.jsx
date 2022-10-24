//Libraries
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownItem from "react-bootstrap/esm/DropdownItem";

//Redux slices
import { selectSkill, updateSkill } from "../../redux/slices/filters/SkillSlice";
import { selectIndustry } from "../../redux/slices/filters/IndustrySlice";

/**
 * Component responsible for managing and rendering the options in the skill filterbox
 */
export default function SkillBox () {

    //Hooks
    const industry = useSelector(selectIndustry);
    const skill = useSelector(selectSkill);
    const dispatch = useDispatch();

    //Render function
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