import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from './Product';
import AddProduct from './AddProduct';
import NavBar from 'react-bootstrap/NavBar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';
import back from '../../assets/back.jpg';

function Products() {

    const [products, setProducts] = useState([
        "Honey Crisp Apples",
        "Gala Apples",
        "Granny Smith Apples",
        "McIntosh Apples",
        "Blueberries",
        "Strawberries",
    ]);

    const navigateAdminDashboard = () => {
        navigate('/adminDashboard')
    }

    const navigate = useNavigate();

    const [item, setItem] = useState();
    const [name, setName] = useState();

    const [addForm, setAddForm] = useState(false);

    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const handleCloseDeletePopup = () => setShowDeletePopup(false);

    const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);

    const [showAddPopup, setShowAddPopup] = useState(false);
    const handleCloseAddPopup = () => setShowAddPopup(false);

    const [showAddSuccess, setShowAddSuccess] = useState(false);

    function addItem() {
        setAddForm(true);
    }

    function removeFromList(index) {
        setItem(index);
        var copy = [...products];
        setName(copy[index]);
        setShowDeletePopup(true);
    }

    function addToList(name) {
        setName(name);
        setShowAddPopup(true);
    }

    function remove() {
        var copy = [...products];
        copy.splice(item, 1);
        setShowDeletePopup(false);
        setShowDeleteSuccess(true);
        setProducts(copy);
    }

    function add() {
        var copy = [...products];
        copy.push(name);
        setShowAddPopup(false);
        setShowAddSuccess(true);
        setAddForm(false);
        setProducts(copy);
    }

    function cancel() {
        setAddForm(false);
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
                {showAddSuccess ? (
                    <div className="Alert">
                        <Alert variant="success" onClose={() => setShowAddSuccess(false)} dismissible>
                            <Alert.Heading>{name} Added To Product List</Alert.Heading>
                        </Alert>
                    </div>
                ) : null}
                {addForm ? (
                    <div className="container w-75">
                        <AddProduct
                            addToList={() => addToList(name)}
                            cancel={() => cancel()}
                        />
                    </div>
                ) : (<div className="container w-75">
                    {products.map((name, index) => (
                        <Product
                            key={index}
                            product={name}
                            index={index}
                            removeFromList={() => removeFromList(index)}
                        />
                    ))}
                </div>)}
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