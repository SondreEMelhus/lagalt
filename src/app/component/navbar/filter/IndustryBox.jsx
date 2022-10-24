//Libraries
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownItem from "react-bootstrap/esm/DropdownItem";

//Redux slices
import { updateIndustry } from "../../redux/slices/filters/IndustrySlice";
import { selectSkill, updateSkill } from "../../redux/slices/filters/SkillSlice";
import { selectIndustries } from "../../redux/slices/filters/lists/IndustriesSlice";
import { selectKeyword, updateKeyword } from "../../redux/slices/filters/KeywordSlice";


export default function IndustryBox () {

     //Hooks
     const industries = useSelector(selectIndustries);
     const keyword = useSelector(selectKeyword);
     const skill = useSelector(selectSkill);
     const dispatch = useDispatch();

    //States
    const [industryTitle, setIndustrytitle] = useState('Industrier');

    //Event handlers

    /**
     * OnClick method responsible for filtering what keywords and skills are being shown when choosing a industry
     */
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

    //Render function
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