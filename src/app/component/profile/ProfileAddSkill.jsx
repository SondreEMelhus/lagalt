import React from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import ProfileCreateSkill from "./ProfileCreateSkill";
export default function ProfileAddSkill(){

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const [updating, setUpdating] = useState(0);

    const handleSubmit = async () => {
        setUpdating(updating + 1);
        setShow(false);
        }
    const handleClose = () => {
        setShow(false);
    }
    return(
        <div>
            <button className="addSkillToUserButton" onClick={handleShow}>Legg til ferdighet</button>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Legg til ferdigheter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>

            {/*Ferdigheter*/}
            <Form.Label>Velg ferdigheter for ditt prosjekt fra listen til venstre</Form.Label>
            <ProfileCreateSkill updating={updating}/>
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