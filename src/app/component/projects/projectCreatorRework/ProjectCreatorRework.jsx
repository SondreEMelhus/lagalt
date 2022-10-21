import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ProjectCreateKeywordRework from './ProjectCreateKeywordRework';
import ProjectCreateSkillRework from "./ProjectCreateSkillRework";
import { useSelector } from "react-redux";

import { selectUser } from "../../redux/slices/UserSlice";
import { createProject } from "../../../../api/ProjectAPI/projectsAPI";
import { sanitize } from "../../util/InputSantizer";

import '../../../../css/navbar.css'



export default function ProjectCreatorRework () {
    
    const [show, setShow] = useState(false);
    const [radioValue, setRadioValue] = useState('');
    const handleShow = () => setShow(true);
    const [industry, setIndustry] = useState(0);
    const [submitted, setSubmitted] = useState(0);

    //1const industry = useSelector(selectProjectIndustry);
    const [skills, setSkills] = useState([]);
    const [keywords, setKeywords] = useState([]);
    const user = useSelector(selectUser);


    const radios = [
      { name: "Musikk",         value: "Musikk"},
      { name: "Film",           value: "Film"},
      { name: "Spillutvikling", value: "Spillutvikling"},
      { name: "Webutvikling",   value: "Webutvikling"},
    ]
    
    const handleClose = () => {
        setShow(false);
    }

    const handleSubmit = async () => {
      setSubmitted(submitted + 1);



    const project = {
        title: sanitize(document.getElementById("title").value),
        description: sanitize(document.getElementById("description").value),
        status: 'Started',
        contributors: [user],
        applications: [],
        chats: [],
        statusUpdateBoards: [],
        projectInteractionHistory: [],
        skills: skills,
        industry: industry,
        keywords: keywords 
      }
      const response = await createProject(project, user);
      setShow(false); 
    }
    
    function updateRadio(inp) {
      setRadioValue(inp);
      setIndustry(inp);
      
    }
    
    return (
        <div>
            <button className="projectCreatorButton" onClick={handleShow}>Opprett prosjekt</button>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Opprett nytt prosjekt</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>

            {/*Title*/}
            <Form.Group className="mb-3">
              <Form.Label>Tittel</Form.Label>
              <Form.Control type="text" id="title"/>
            </Form.Group>

            {/*Description*/}
            <Form.Group className="mb-3">
              <Form.Label>Beskrivelse</Form.Label>
              <Form.Control as="textarea" rows={3} id="description"/>
            </Form.Group>

            {/*Industri*/}
            <Form.Label>Industri</Form.Label>
                <br/>
            <ButtonGroup className="mb-2">
                {radios.map((radio, index) => (
                    <ToggleButton
                    key={index}
                    id={`radio-${index}`}
                    type="radio"
                    variant="secondary"
                    name="radio"
                    value={radio.name}
                    checked={radioValue === radio.name}
                    onClick={() => updateRadio(radio.value)}
                    >
                    {radio.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>

            {/*Nøkkelord*/}
            <Form.Label>Velg nøkkelord for ditt prosjekt fra listen til venstre</Form.Label>
            <ProjectCreateKeywordRework industry={industry} setKeywords={setKeywords} submitted={submitted}/>

            {/*Ferdigheter*/}
            <Form.Label>Velg ferdigheter for ditt prosjekt fra listen til venstre</Form.Label>
            <ProjectCreateSkillRework industry={industry} setSkills={setSkills} submitted={submitted}/>
        </Form>
        </Modal.Body>

        {/*Footer*/}
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Lukk
          </Button>
          <Button variant="secondary" onClick={handleSubmit}>
            Lagre prosjekt
          </Button>
        </Modal.Footer>
        </Modal>
        </div>
        )
}