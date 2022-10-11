//Libraries
import React from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownItem from "react-bootstrap/esm/DropdownItem";

//Components
import { useSelector, useDispatch } from "react-redux";
import { selectSkills } from '../../redux/slices/filters/lists/SkillsSlice'
import { selectSkill, updateSkill } from "../../redux/slices/filters/SkillSlice";

export default function SkillBox () {

    const skills = useSelector(selectSkills);
    const skill = useSelector(selectSkill);
    const dispatch = useDispatch();

    const handleClick = (event) => {
        dispatch( updateSkill ( event.target.id ))
    }

    return (
        <div>
            <p>Ferdigheter</p>
            <DropdownButton as={ButtonGroup}
                variant="success"
                id='SkillsBtn'
                title={skill}>
            {skills.map((_skill, index ) => {
                return (
                    <DropdownItem onClick={handleClick} id={_skill} eventKey={index + '-' + _skill} key={index + '-' + _skill}>
                        {_skill}
                    </DropdownItem>
                )
            })}
            </DropdownButton>
        </div>
    )
}