import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createBrand} from "../../htpp/deviceAPI";

const CreateBrand = ({show,onHide}) => {
    const [value, setValue] = useState('')
    const addBrand = () => {
        createBrand({name: value}).then(data => {
            setValue('')
            onHide()
        })
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new Brand
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control placeholder={"Input brand name"} value={value}
                                  onChange={e => setValue(e.target.value)}/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}  variant={"outline-danger"}>Close</Button>
                <Button onClick={addBrand} variant={"outline-success"}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;