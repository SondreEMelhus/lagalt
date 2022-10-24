//Libraries
import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

//Components
import ProfileCreateSkill from "./ProfileCreateSkill";

/**
 * Component responsible for handling the addition of skills to the users profile
 */
export default function ProfileAddSkill({reload}){

  //States
  const [show, setShow] = useState(false);
  const [updating, setUpdating] = useState(0);

  //Event handlers
  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

  /**
   * OnSubmit method used to increment a users skills
   */
  const handleSubmit = async () => {
      setUpdating(updating + 1);
      setShow(false);
      }

  //Render function
  return(
      <div>
          <button className="addSkillToUserButton" onClick={handleShow}>Legg til ferdighet</button>
          <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Legg til ferdigheter</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Label>Velg ferdigheter for ditt prosjekt fra listen til venstre</Form.Label>
          <ProfileCreateSkill updating={updating} reload={reload}/>
              <br/>
      </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Lukk
        </Button>
        <Button variant="secondary" onClick={handleSubmit}>
          Lagre ferdigheter
        </Button>
      </Modal.Footer>
      </Modal>
      </div>
    )
}