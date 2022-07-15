import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function AddProduct(props) {

    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [stock, setStock] = useState();
    const [image, setImage] = useState();

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
                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Description" onChange={(event) => setDescription(event.target.value)} />
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
                            <Button variant="dark" onClick={() => props.addToList(name, description, price, stock, image)}>Add</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal.Dialog>
        </div >
    )
}