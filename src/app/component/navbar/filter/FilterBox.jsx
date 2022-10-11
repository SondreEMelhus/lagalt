import React, { useState } from "react";
import IndustryBox from "./IndustryBox";
import KeywordBox from "./KeywordBox";
import SkillBox from "./SkillBox";

import '../../../../css/filterBox.css'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function FilterBox () {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
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
                    <IndustryBox className='filter-option' />
                    <KeywordBox className='filter-option' />
                    <SkillBox className='filter-option' />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                    Lukk
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}