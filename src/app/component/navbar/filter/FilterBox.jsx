//Libraries
import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";

//Components
import SkillBox from "./SkillBox";
import KeywordBox from "./KeywordBox";
import IndustryBox from "./IndustryBox";
import { applyFilters } from "./ApplyFilter";

//Redux slices
import { selectProjects } from "../../redux/slices/ProjectsSlice";
import { selectIndustry } from "../../redux/slices/filters/IndustrySlice";
import { updateIndustry } from "../../redux/slices/filters/IndustrySlice";
import { resetSkill, selectSkill } from "../../redux/slices/filters/SkillSlice";
import { selectInitialIndustry } from "../../redux/slices/filters/InitialIndustry";
import { updateFilteredProjects } from "../../redux/slices/filters/FilteredProjects";
import { resetKeyword, selectKeyword } from "../../redux/slices/filters/KeywordSlice";

//Styling
import '../../../../css/navbar.css'

/**
 * Component responsible for rendering and handling the filter box, and the filter functionality
 */
export default function FilterBox () {

    //Hooks
    const projects = useSelector(selectProjects);
    const skillFilter = useSelector(selectSkill);
    const keywordFilter = useSelector(selectKeyword);
    const industryFilter = useSelector(selectIndustry);
    const initialIndustry = useSelector(selectInitialIndustry);

    //States
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    //Event handlers

    /**
     * Method used to update the filtered projects when the filterbox is closed
     */
    const handleClose = () => {
        dispatch( updateFilteredProjects(applyFilters(projects, industryFilter, keywordFilter, skillFilter)));    
        setShow(false);
    }

    /**
     * Method used to reset the filtered projects when the user presses the nullstill button
     */
    const handleReset = () => {
        dispatch( updateFilteredProjects( projects ));
        dispatch( resetSkill () );
        dispatch( resetKeyword () );
        dispatch( updateIndustry ( initialIndustry ))
        setShow(false);
    }

    /**
     * Method used to toggle the visibility of the filterbox
     */
    const handleShow = () => setShow(true);

    //Render function
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