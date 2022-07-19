/* Written by Lidya Iscan-Insense */
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function AddProduct(props) {

    const [name, setName] = useState();
    const [brand, setBrand] = useState();
    const [description, setDescription] = useState();
    const [id, setId] = useState();
    const [amount, setAmount] = useState();
    const [unit, setUnit] = useState();
    const [price, setPrice] = useState();
    const [stock, setStock] = useState();
    const [image, setImage] = useState();

    function add() {
        props.setName(name);
        props.setBrand(brand);
        props.setDescription(description);
        props.setId(id);
        props.setAmount(amount);
        props.setUnit(unit);
        props.setPrice(price);
        props.setStock(stock);
        props.setImage(image);

        props.addToList();
    }

    return (
        <div className="AppProduct">
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>New Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Product Name" onChange={(event) => setName(event.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="brandName">
                            <Form.Label>Brand</Form.Label>
                            <Form.Control type="text" placeholder="Brand Name" onChange={(event) => setBrand(event.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Description" onChange={(event) => setDescription(event.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="productId">
                            <Form.Label>Product ID</Form.Label>
                            <Form.Control type="text" placeholder="Product ID" onChange={(event) => setId(event.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="amount">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control type="text" placeholder="Amount" onChange={(event) => setAmount(event.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="unit">
                            <Form.Label>Unit</Form.Label>
                            <Form.Control type="text" placeholder="Unit" onChange={(event) => setUnit(event.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="price">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" placeholder="Price" onChange={(event) => setPrice(event.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="stock">
                            <Form.Label>Stock</Form.Label>
                            <Form.Control type="text" placeholder="Quantity" onChange={(event) => setStock(event.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="image">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="text" placeholder="Image" onChange={(event) => setImage(event.target.value)} />
                        </Form.Group>
                        <div style={{ float: "right" }}>
                            <Button variant="outline-dark" style={{ marginRight: "10px" }} onClick={() => props.cancel()}>Cancel</Button>
                            <Button variant="dark" onClick={add}>Add</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal.Dialog>
        </div >
    )
}