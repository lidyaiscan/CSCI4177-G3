/* Code modified from the tutorial by Saleh Mubashar, from: https://dev.to/salehmubashar/search-bar-in-react-js-545l */
import * as React from 'react'
import Navigation from '../nav/nav';
import data from "./ListData.json"
import '../../App.css';
import chocolate from "../../assets/chocolate.jpg"
import { Form, Dropdown, DropdownButton } from 'react-bootstrap';

function Search(props) {
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