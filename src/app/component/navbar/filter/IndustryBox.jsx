//Libraries
import React, { useState } from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownItem from "react-bootstrap/esm/DropdownItem";

//Components
import { useSelector, useDispatch } from "react-redux";
import { selectIndustries } from "../../redux/slices/filters/lists/IndustriesSlice";
import { updateIndustry } from "../../redux/slices/filters/IndustrySlice";
import { selectKeyword, updateKeyword } from "../../redux/slices/filters/KeywordSlice";
import { selectSkill, updateSkill } from "../../redux/slices/filters/SkillSlice";

export default function IndustryBox () {

    const [industryTitle, setIndustrytitle] = useState('Industrier');

    const industries = useSelector(selectIndustries);
    const keyword = useSelector(selectKeyword);
    const skill = useSelector(selectSkill);
    const dispatch = useDispatch();

    const handleClick = (event) => {
        for (let i of industries) {
            if (i.title === event.target.id) {
                dispatch( updateIndustry (i) )
                if (!i.keywords.includes(keyword)) {
                    dispatch ( updateKeyword( 'Nøkkelord'));
                }
                if (!i.skills.includes(skill)) {
                    dispatch ( updateSkill( 'Ferdighet'));
                }
                break;
            }
        }
        setIndustrytitle(event.target.id);
    }

    return (
        <div>
            <p>Industri</p>
            <DropdownButton as={ButtonGroup}
                      variant="success"
                      id='IndustriKnapp'
                      title={industryTitle}>
            {industries.map((industry, index) => {
                return (
                    <DropdownItem onClick={handleClick} id={industry.title} eventKey={index + '-' + industry.id} key={index + '-' + industry.id}>
                    {industry.title}
                    </DropdownItem>
                )
            })}
            </DropdownButton>
        </div>
    )
}