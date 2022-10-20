import React, { useState } from "react";
import IndustryBox from "./IndustryBox";
import KeywordBox from "./KeywordBox";
import SkillBox from "./SkillBox";

//import '../../../../css/filterBox.css'
import '../../../../css/navbar.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from "react-redux";
import { selectIndustry, resetIndustry } from "../../redux/slices/filters/IndustrySlice";
import { resetKeyword, selectKeyword } from "../../redux/slices/filters/KeywordSlice";
import { resetSkill, selectSkill } from "../../redux/slices/filters/SkillSlice";
import { selectProjects } from "../../redux/slices/ProjectsSlice";
import { updateFilteredProjects } from "../../redux/slices/filters/FilteredProjects";
import { selectIndustries } from "../../redux/slices/filters/lists/IndustriesSlice";

export default function FilterBox () {

    const [show, setShow] = useState(false);

    const projects = useSelector(selectProjects);
    const industries = useSelector(selectIndustries);
    const industryFilter = useSelector(selectIndustry);
    const keywordFilter = useSelector(selectKeyword);
    const skillFilter = useSelector(selectSkill);

    const dispatch = useDispatch();

    const handleClose = () => {

        //TODO: Legg til en fetch av filteredProjects()
        //dispatch( updateFilteredProjects());    
        setShow(false);
    }

    const handleReset = () => {
        dispatch( updateFilteredProjects( projects ));
        dispatch( resetIndustry() )
        dispatch( resetSkill () );
        dispatch( resetKeyword () );
        setShow(false);
    }

    const handleShow = () => setShow(true);

    return (
        <div className="filter">
            <Button variant="primary" onClick={handleShow}>
                Filtre
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Filtre</Modal.Title>
                </Modal.Header>
                <Modal.Body className="filter-box">
                    <IndustryBox className='filter-option'/>
                    <KeywordBox className='filter-option' />
                    <SkillBox className='filter-option' />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="error" onClick={handleReset}>
                    Nullstill
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                    Lukk
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}