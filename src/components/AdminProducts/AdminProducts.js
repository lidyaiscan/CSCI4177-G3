import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from './Product';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
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

    const [showPopup, setShowPopup] = useState(false);
    const handleClosePopup = () => setShowPopup(false);

    const [showSuccess, setShowSuccess] = useState(false);

    function removeFromList(index) {
        setItem(index);
        var copy = [...products];
        setName(copy[index]);
        console.log(item);
        console.log(name);
        setShowPopup(true);
    }

    function remove() {
        var copy = [...products];
        copy.splice(item, 1);
        setShowPopup(false);
        setShowSuccess(true);
        setProducts(copy);
    }

    return (
        <div className="Products">
            <div className="Content">
                <div className="Header">
                    <img src={back} alt="back" onClick={navigateAdminDashboard} />
                    <h1>Products</h1>
                </div>
                {showSuccess ? (
                    <div className="Alert">
                        <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
                            <Alert.Heading>{name} Deleted From Product List</Alert.Heading>
                        </Alert>
                    </div>
                )
                    : null}
                <div className="container w-75">
                    {products.map((name, index) => (
                        <Product
                            key={index}
                            product={name}
                            index={index}
                            removeFromList={() => removeFromList(index)}
                        />
                    ))}
                </div>
            </div>
            <Modal show={showPopup} onHide={handleClosePopup}>
                <Modal.Header>
                    <Modal.Title>Are you sure you want to delete this item?</Modal.Title>
                </Modal.Header>
                <Modal.Body>{name}</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-dark" onClick={handleClosePopup}>
                        No
                    </Button>
                    <Button variant="outline-dark" onClick={() => remove({ item })}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    )
}

export default Products;