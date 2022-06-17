/* Code modified from the tutorial by Saleh Mubashar, from: https://dev.to/salehmubashar/search-bar-in-react-js-545l */
import * as React from 'react'
import Navigation from '../nav/nav';
import data from "./ListData.json"
import '../../App.css';
import chocolate from "../../assets/chocolate.jpg"
import { useNavigate } from "react-router-dom";
import { Form, Dropdown, DropdownButton } from 'react-bootstrap';

function Search(props) {
    const navigate = useNavigate();

    const navigateListing = () => {
        navigate("/listing");
    };
    //This function is used to filter listing by keyword. It's currently unused.
    const filteredData = data.filter((el) => {
        //if there's no input, return the original list of data
        if (props.input === '') {
            return el;
        }
        //return the item(s) which contain(s) the user input
        else {
            return el.name.toLowerCase().includes(props.input)
        }
    })
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



            <div className='tile-listings col-md-12'>
                {filteredData.map((item) => (
                    <div key={item.id}>
                        <img src={chocolate} alt="chocolate" className='listing-photo' />
                        <p>{item.name}</p>
                        <p>{item.rating} stars</p>
                        <p>${item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Search;