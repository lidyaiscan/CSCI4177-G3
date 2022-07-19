/* Written by Lidya Iscan-Insense */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Product from "./Product";
import AddProduct from "./AddProduct";
import EditProduct from './EditProduct';
import NavBar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/Modal";
import back from "../../assets/back.jpg";

function Products() {
    const navigateAdminDashboard = () => {
        navigate("/adminDashboard");
    };

    const navigate = useNavigate();

    //retrieve product data from MongoDB
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const prods = await (
            await fetch("https://food4u-backend.herokuapp.com/products")
        ).json();
        setProducts(prods);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const [item, setItem] = useState("");
    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [description, setDescription] = useState("");
    const [id, setId] = useState("");
    const [amount, setAmount] = useState("");
    const [unit, setUnit] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [image, setImage] = useState("");

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
                        setName={(name) => setName(name)}
                        setBrand={(brand) => setBrand(brand)}
                        setDescription={(description) => setDescription(description)}
                        setId={(id) => setId(id)}
                        setAmount={(amount) => setAmount(amount)}
                        setUnit={(unit) => setUnit(unit)}
                        setPrice={(price) => setPrice(price)}
                        setStock={(stock) => setStock(stock)}
                        setImage={(image) => setImage(image)}
                        addToList={() => addToList()}
                        cancel={() => cancel()}
                    />
                </div>
            );
        } else if (editForm) {
            return (
                <div className="container w-75">
                    <EditProduct
                        product={products.find((x) => x.name === item.name)}
                        setDescription={(description) => setDescription(description)}
                        setPrice={(price) => setPrice(price)}
                        setStock={(stock) => setStock(stock)}
                        saveToList={() => saveToList()}
                        cancel={() => cancel()}
                    />
                </div>
            )
        } else {
            return (
                <div className="container w-75">
                    {products.map((product) => (
                        <Product
                            product={products.find((x) => x.name === product.name)}
                            id={product.pId}
                            editItem={() => editItem()}
                            removeFromList={() => removeFromList()}
                        />
                    ))}
                </div>
            );
        }
    }

    function removeFromList() {
        setItem(JSON.parse(localStorage.getItem("product")));
        setShowDeletePopup(true);
    }

    function remove() {
        const index = products.findIndex((x) => x.name === item.name);
        var copy = [...products];
        copy.splice(index, 1);
        setProducts(copy);

        setShowDeletePopup(false);
        setShowDeleteSuccess(true);
    }

    function editItem() {
        setItem(JSON.parse(localStorage.getItem("product")));
        setEditForm(true);
    }

    function saveToList() {
        setShowEditPopup(true);
    }

    function save() {
        const index = products.findIndex((x) => x.name === item.name);
        products[index].description = description;
        products[index].price = price;
        products[index].stock = stock;

        setShowEditPopup(false);
        setShowEditSuccess(true);
        setEditForm(false);
    }

    function addItem() {
        setAddForm(true);
    }

    function addToList() {
        setShowAddPopup(true);
    }

    function add() {
        const newProduct = ({
            brand: brand,
            name: name,
            description: description,
            pId: id,
            measure: amount,
            unit: unit,
            price: price,
            stock: stock,
            image: image,
        });
        products.push(newProduct);

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
                    <NavBar
                        bg="white"
                        style={{
                            marginLeft: "30px",
                            marginRight: "30px",
                            paddingTop: "30px",
                        }}
                    >
                        <Container>
                            <img src={back} alt="back" onClick={navigateAdminDashboard} />
                            <NavBar.Brand>Products</NavBar.Brand>
                            <Nav className="justify-content-end">
                                <Button variant="outline-dark" onClick={() => addItem()}>
                                    Add Item
                                </Button>
                            </Nav>
                        </Container>
                    </NavBar>
                </div>
                {showDeleteSuccess ? (
                    <div className="Alert">
                        <Alert
                            variant="success"
                            onClose={() => setShowDeleteSuccess(false)}
                            dismissible
                        >
                            <Alert.Heading>{name} Deleted From Product List</Alert.Heading>
                        </Alert>
                    </div>
                ) : null}
                {showEditSuccess ? (
                    <div className="Alert">
                        <Alert
                            variant="success"
                            onClose={() => setShowEditSuccess(false)}
                            dismissible
                        >
                            <Alert.Heading>{name} Was Edited</Alert.Heading>
                        </Alert>
                    </div>
                ) : null}
                {showAddSuccess ? (
                    <div className="Alert">
                        <Alert
                            variant="success"
                            onClose={() => setShowAddSuccess(false)}
                            dismissible
                        >
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
                <Modal.Body>{item.name}</Modal.Body>
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
    );
}

export default Products;
