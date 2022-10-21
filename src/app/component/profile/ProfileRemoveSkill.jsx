import React from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import ProfileDeleteSkill from "./ProfileDeleteSkill";


export default function ProfileRemovekill({reload}){
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