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
    return (
        <div>
            <Form>
                <Form.Group controlId="searchBar">
                    <Form.Control id="search" type="text" placeholder="Search products" fullwidth />
                    <button type="Submit" value="Submit" className='Submit'>Submit</button>
                </Form.Group>
            </Form>
            <h2>Showing 1-30 of 33 results for chocolate</h2>
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
                    <div className="listing">
                        <a href="/listing" onClick={navigateListing}>
                            <img src={chocolate} alt="chocolate" className="listing-photo" />
                            <p>Chocolate 1</p>
                            <p>300gr</p>
                            <p>⭐⭐⭐⭐ (41)</p>
                            <p>$5.49</p>
                        </a>
                    </div>
                    <div>
                        <a href="/listing" onClick={navigateListing}>
                            <img src={chocolate} alt="chocolate" className="listing-photo" />
                            <p>Chocolate 2</p>
                            <p>700gr</p>
                            <p>⭐⭐⭐⭐⭐ (20)</p>
                            <p>$7.99</p>
                        </a>
                    </div>
                    <div>
                        <a href="/listing" onClick={navigateListing}>
                            <img src={chocolate} alt="chocolate" className="listing-photo" />
                            <p>Chocolate 3</p>
                            <p>500gr</p>
                            <p>⭐⭐⭐⭐ (3)</p>
                            <p>$4.99</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;