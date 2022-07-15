/* Written by Song Pho
Code modified from the tutorial by Saleh Mubashar, from: https://dev.to/salehmubashar/search-bar-in-react-js-545l */
import * as React from 'react'
import '../../App.css';
import chocolate from "../../assets/chocolate.jpg"
import { useNavigate } from "react-router-dom";
import { Form, Dropdown, DropdownButton } from 'react-bootstrap';

function Search(props) {
    const navigate = useNavigate();

    const navigateListing = () => {
        navigate("/listing");
    };

    const [products, setProducts] = React.useState([{
        name: '',
        measure: '',
        unit: '',
        price: '',
        rating: '',
        ratingCount: '',
        image: ''
    }])
    React.useEffect(() => {
        fetch("/products").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setProducts(jsonRes));
    })
    return (
        <div>
            <Form>
                <Form.Group controlId="searchBar">
                    <Form.Control id="search" type="text" placeholder="Search products" fullwidth />
                    <button type="Submit" value="Submit" className='Submit'>Submit</button>
                </Form.Group>
            </Form>
            <h2>Showing 3 results for chocolate</h2>
            <h3>Applied filters:</h3>
            <div className="searchResults">
                <div className='filterButton'>
                    <DropdownButton title="Category" className="filter">
                        <Dropdown.Item as="button">Category 1</Dropdown.Item>
                        <Dropdown.Item as="button">Category 2</Dropdown.Item>
                        <Dropdown.Item as="button">Category 3</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton title="Brand" className="filter">
                        <Dropdown.Item as="button">Brand 1</Dropdown.Item>
                        <Dropdown.Item as="button">Brand 2</Dropdown.Item>
                        <Dropdown.Item as="button">Brand 3</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton title="Rating" className="filter">
                        <Dropdown.Item as="button">⭐⭐⭐⭐⭐</Dropdown.Item>
                        <Dropdown.Item as="button">⭐⭐⭐⭐ & up</Dropdown.Item>
                        <Dropdown.Item as="button">⭐⭐⭐ & up</Dropdown.Item>
                        <Dropdown.Item as="button">⭐⭐ & up</Dropdown.Item>
                        <Dropdown.Item as="button">⭐ & up</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton title="Price" className="filter">
                        <Dropdown.Item as="button">Min</Dropdown.Item>
                        <Dropdown.Item as="button">Max</Dropdown.Item>
                    </DropdownButton>
                </div>
                <div className="tile-listings col-md-9">
                    {products.map(product =>
                        <div className="listing">
                            <a href="/listing" onClick={navigateListing}>
                                <img src={product.image} alt="" className="listing-photo" />
                                <p>{product.name}</p>
                                <p>{product.measure}{product.unit}</p>
                                <p>{product.rating} stars ({product.ratingCount})</p>
                                <p>${product.price}</p>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Search;