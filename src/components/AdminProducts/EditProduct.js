/* Written by Lidya Iscan-Insense */
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function EditProduct(props) {

    const [description, setDescription] = useState(props.product.description);
    const [price, setPrice] = useState(props.product.price);
    const [stock, setStock] = useState(props.product.stock);

    function save() {
        props.setDescription(description);
        props.setPrice(price);
        props.setStock(stock);

        props.saveToList();
    }

    return (
        <div className="AppProduct">
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Edit Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>{props.product.name}</Form.Label>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder={props.product.description} onChange={(event) => setDescription(event.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="price">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" placeholder={props.product.price} onChange={(event) => setPrice(event.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="stock">
                            <Form.Label>Stock</Form.Label>
                            <Form.Control type="text" placeholder={props.product.stock} onChange={(event) => setStock(event.target.value)} />
                        </Form.Group>
                        <div style={{ float: "right" }}>
                            <Button variant="outline-dark" style={{ marginRight: "10px" }} onClick={() => props.cancel()}>Cancel</Button>
                            <Button variant="dark" onClick={save}>Save</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal.Dialog>
        </div >
    )
}