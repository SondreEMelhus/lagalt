import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ProjectCreateKeyword from "./ProjectCreateKeyword";
import ProjectCreateSkill from "./ProjectCreateSkill";


export default function CreateProject () {
    const [show, setShow] = useState(false);
    const [radioValue, setRadioValue] = useState("");
    const handleShow = () => setShow(true);
    const [industry, setIndustry] = useState("")
    
    const handleClose = () => {
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        setShow(false);
        const newProject =  {
            title: title,
            industry: radioValue,
            status: 'Planlegges',
            description: description,
            chat: [
              {
                
              }
            ],
            skills: [
              'Java',
              'React',
              'Heroku',
              'Spring boot',
              'Hibernate',
              'Redux',
            ],
            keywords: [
              'Erfaren',
              'Full-stack',
              'Front-end',
              'Back-end'
            ]
          }
    }

    useEffect(() => {
        setIndustry(radioValue);
    }, [radioValue])
    
    const radios = [
        { name: 'Spillutvikling', value: "Spillutvikling" },
        { name: 'Webutvikling', value: "Webutvikling" },
        { name: 'Film', value: "Film" },
        { name: 'Musikk', value: "Musikk"},
      ];

    return (
        <div>
            <button onClick={handleShow}>Opprett prosjekt</button>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Opprett nytt prosjekt</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Tittel</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                id ="title"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
            >
              <Form.Label>Beskrivelse</Form.Label>
              <Form.Control as="textarea" rows={3} id="description"/>
            </Form.Group>
                <Form.Label>Industri</Form.Label>
                <br/>
            <ButtonGroup className="mb-2">
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant="secondary"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      <Form.Label>Velg nøkkelord for ditt prosjekt fra listen til venstre</Form.Label>
      <ProjectCreateKeyword industry={industry}/>
      <Form.Label>Velg ferdigheter for ditt prosjekt fra listen til venstre</Form.Label>

      <ProjectCreateSkill industry={industry}/>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Lukk
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Lagre prosjekt
          </Button>
        </Modal.Footer>
        </Modal>
        </div>
        )
}