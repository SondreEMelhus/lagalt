import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ProjectCreateKeywordRework from './ProjectCreateKeywordRework';
import ProjectCreateSkillRework from "./ProjectCreateSkillRework";
import { useDispatch, useSelector } from "react-redux";
import { selectIndustries } from "../../redux/slices/filters/lists/IndustriesSlice";
import { selectProjectIndustry, setIndustry } from "../../redux/slices/createProjectSlices/ProjectIndustrySlice";
import { removeAllKeywords, selectProjectKeywords } from "../../redux/slices/createProjectSlices/ProjectKeywordsSlice";
import { removeAllSkills, selectProjectSkills } from "../../redux/slices/createProjectSlices/ProjectSkillsSlice";
import { selectUser } from "../../redux/slices/UserSlice";
import { createProject } from "../../../../api/ProjectAPI/projectsAPI";
import { sanitize } from "../../util/InputSantizer";



export default function ProjectCreatorRework () {
    
    const [show, setShow] = useState(false);
    const [radioValue, setRadioValue] = useState('');
    const handleShow = () => setShow(true);

    //Redux states
    const industries = useSelector(selectIndustries);
    const industry = useSelector(selectProjectIndustry);
    const keywords = useSelector(selectProjectKeywords);
    const skills = useSelector(selectProjectSkills);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    
    const handleClose = () => {
        dispatch ( removeAllSkills() )
        dispatch ( removeAllKeywords() );
        dispatch( setIndustry({}));
        setShow(false);
    }

    const handleSubmit = async () => {
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
        industry: industry.id,
        keywords: keywords 
      }
      const response = await createProject(project);
      console.log(response);
      console.log(project);
      dispatch ( removeAllSkills() )
      dispatch ( removeAllKeywords() );
      dispatch( setIndustry({}));
      setShow(false);
    }
    
    return (
        <div>
            <button onClick={handleShow}>Opprett prosjekt</button>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Opprett nytt prosjekt</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>

            {/*Title*/}
            <Form.Group className="mb-3">
              <Form.Label>Tittel</Form.Label>
              <Form.Control type="text" autoFocus id="title"/>
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
                {industries.map((radio, index) => (
                    <ToggleButton
                    key={index}
                    id={`radio-${index}`}
                    type="radio"
                    variant="secondary"
                    name="radio"
                    value={radio.title}
                    checked={radioValue === radio.title}
                    onChange={(e) => {
                      setRadioValue(e.currentTarget.value)
                      dispatch( setIndustry(radio))
                      dispatch( removeAllKeywords())
                      dispatch( removeAllSkills())
                    }}
                    >
                    {radio.title}
                    </ToggleButton>
                ))}
            </ButtonGroup>

            {/*Nøkkelord*/}
            <Form.Label>Velg nøkkelord for ditt prosjekt fra listen til venstre</Form.Label>
            <ProjectCreateKeywordRework />

            {/*Ferdigheter*/}
            <Form.Label>Velg ferdigheter for ditt prosjekt fra listen til venstre</Form.Label>
            <ProjectCreateSkillRework />
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