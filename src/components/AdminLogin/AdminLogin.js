import React from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AdminLogin() {

    const navigate = useNavigate();

    const [username, changeUsername] = useState("");
    const [password, changePassword] = useState("");
    const [errorinfo, setErrorInfo] = useState([]);

    function validate(username, password) {
        if (username === "admin" && password === "admin") {
            navigate('/adminDashboard');
        } else {
            const errors = [];
            errors.push("Username or password are incorrect");
            setErrorInfo(errors);
        }
    }

    return (
        <div className="AdminLogin">
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Admin Log In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Control type="username" placeholder="Username" onChange={(event) => changeUsername(event.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" onChange={(event) => changePassword(event.target.value)} />
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button variant="dark" onClick={() => validate(username, password)}>LOG IN</Button>
                        </div>
                        <div className="d-grid gap-2">
                            {errorinfo.map((item, index) => (
                                <p key={index}>{item}</p>
                            ))}
                        </div>
                    </Form>
                </Modal.Body>
            </Modal.Dialog>
        </div>
    )
}

export default AdminLogin;