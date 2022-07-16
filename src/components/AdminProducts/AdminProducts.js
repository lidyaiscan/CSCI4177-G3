import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from './Product';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import NavBar from 'react-bootstrap/NavBar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';
import back from '../../assets/back.jpg';

function Products() {

    const navigateAdminDashboard = () => {
        navigate('/adminDashboard')
    }

    const navigate = useNavigate();

    //retrieve product data from MongoDB
    const [products, setProducts] = useState([{
        pId: '',
        name: '',
        description: '',
        measure: '',
        unit: '',
        price: '',
        stock: '',
        rating: '',
        ratingCount: '',
        image: ''
    }])

    useEffect(() => {
        fetch("/adminProducts").then(res => {
            console.log(res);
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setProducts(jsonRes));
    })

    const [id, setId] = useState();
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [stock, setStock] = useState();
    const [image, setImage] = useState();

    var newId = 4;

    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const handleCloseDeletePopup = () => setShowDeletePopup(false);
    const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);

    const [editForm, setEditForm] = useState(false);
    const [showEditPopup, setShowEditPopup] = useState(false);
    const handleCloseEditPopup = () => setShowEditPopup(false);
    const [showEditSuccess, setShowEditSuccess] = useState(false);

    const [addForm, setAddForm] = useState(false);
    const [showAddPopup, setShowAddPopup] = useState(false);
    const handleCloseAddPopup = () => setShowAddPopup(false);
    const [showAddSuccess, setShowAddSuccess] = useState(false);

    function display() {
        if (addForm) {
            return (
                <div className="container w-75">
                    <AddProduct
                        addToList={() => addToList()}
                        cancel={() => cancel()}
                    />
                </div>
            )
        } else if (editForm) {
            return (
                <div className="container w-75">
                    <EditProduct
                        id={id}
                        saveToList={() => saveToList(name)}
                        cancel={() => cancel()}
                    />
                </div>
            )
        } else {
            return (
                <div className="container w-75">
                    {products.map(product => (
                        <Product
                            name={product.name}
                            id={product.pId}
                            editItem={() => editItem(id)}
                            removeFromList={() => removeFromList(id)}
                        />
                    ))}
                </div>
            )
        }
    }

    function removeFromList(id) {
        setId(id);
        setShowDeletePopup(true);
    }

    function remove() {
        products.deleteOne({ id: id });

        setShowDeletePopup(false);
        setShowDeleteSuccess(true);
    }

    function editItem(id) {
        setId(id);
        setEditForm(true);
    }

    function saveToList(name, description, price, stock) {
        setName(name);
        setDescription(description);
        setPrice(price);
        setStock(stock);
        setShowEditPopup(true);
    }

    function save() {
        products.findOneAndUpdate({ pId: id }, { name: name, description: description, price: price, stock: stock });

        setShowEditPopup(false);
        setShowEditSuccess(true);
        setEditForm(false);
    }

    function addItem() {
        setAddForm(true);
    }

    function addToList(name, description, price, stock, image) {
        setName(name);
        setDescription(description);
        setPrice(price);
        setStock(stock);
        setImage(image);
        setShowAddPopup(true);
    }

    function add() {
        const id = newId.toString();
        const newProduct = new Product({
            pId: id,
            name: name,
            description: description,
            price: price,
            stock: stock,
            image: image
        });
        newProduct.save();

        newId++;
        setShowAddPopup(false);
        setShowAddSuccess(true);
        setAddForm(false);
    }

    function cancel() {
        setAddForm(false);
        setEditForm(false);
    }

    return (
        <div className="Products">
            <div className="Content">
                <div className="Header">
                    <NavBar bg="white" style={{ marginLeft: "30px", marginRight: "30px", paddingTop: "30px" }}>
                        <Container>
                            <img src={back} alt="back" onClick={navigateAdminDashboard} />
                            <NavBar.Brand>Products</NavBar.Brand>
                            <Nav className="justify-content-end">
                                <Button variant="outline-dark" onClick={() => addItem()}>Add Item</Button>
                            </Nav>
                        </Container>
                    </NavBar>
                </div>
                {showDeleteSuccess ? (
                    <div className="Alert">
                        <Alert variant="success" onClose={() => setShowDeleteSuccess(false)} dismissible>
                            <Alert.Heading>{name} Deleted From Product List</Alert.Heading>
                        </Alert>
                    </div>
                ) : null}
                {showEditSuccess ? (
                    <div className="Alert">
                        <Alert variant="success" onClose={() => setShowEditSuccess(false)} dismissible>
                            <Alert.Heading>{name} Was Edited</Alert.Heading>
                        </Alert>
                    </div>
                ) : null}
                {showAddSuccess ? (
                    <div className="Alert">
                        <Alert variant="success" onClose={() => setShowAddSuccess(false)} dismissible>
                            <Alert.Heading>{name} Added To Product List</Alert.Heading>
                        </Alert>
                    </div>
                ) : null}
                {display()}
            </div>
            <Modal show={showDeletePopup} onHide={handleCloseDeletePopup}>
                <Modal.Header>
                    <Modal.Title>Are you sure you want to delete this item?</Modal.Title>
                </Modal.Header>
                <Modal.Body>{name}</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-dark" onClick={handleCloseDeletePopup}>
                        No
                    </Button>
                    <Button variant="outline-dark" onClick={remove}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showEditPopup} onHide={handleCloseEditPopup}>
                <Modal.Header>
                    <Modal.Title>Are you sure you want to edit this item?</Modal.Title>
                </Modal.Header>
                <Modal.Body>{name}</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-dark" onClick={handleCloseEditPopup}>
                        No
                    </Button>
                    <Button variant="outline-dark" onClick={save}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showAddPopup} onHide={handleCloseAddPopup}>
                <Modal.Header>
                    <Modal.Title>Are you sure you want to add this item?</Modal.Title>
                </Modal.Header>
                <Modal.Body>{name}</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-dark" onClick={handleCloseAddPopup}>
                        No
                    </Button>
                    <Button variant="outline-dark" onClick={add}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    )
}

export default Products;