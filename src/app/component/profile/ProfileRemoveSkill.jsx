//Libraries
import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

//Components
import ProfileDeleteSkill from "./ProfileDeleteSkill";

/**
 * Component responsible for handeling the removal of a users skills in the profileForm component
 */
export default function ProfileRemoveSkill({reload}){

  //States
  const [show, setShow] = useState(false);
  const [updating, setUpdating] = useState(0);

  /**
   * OnClick methods that updates the updating state with one
   */
  const handleSubmit = async () => {
      setUpdating(updating + 1);
      setShow(false);
  }

  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

  //Render function
  return(
      <div>
          <button className="addSkillToUserButton" onClick={handleShow}>Fjern ferdighet</button>
          <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Fjern ferdigheter</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>

          {/*Ferdigheter*/}
          <Form.Label>Velg ferdigheter som skal fjernes fra prosjekt fra listen til venstre</Form.Label>
          <ProfileDeleteSkill  updating={updating} reload={reload}/>
              <br/>
      </Form>
      </Modal.Body>

      {/*Footer*/}
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