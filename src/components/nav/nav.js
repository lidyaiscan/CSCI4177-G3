/* Code modified from the tutorial by Remix, from: https://v5.reactrouter.com/web/guides/quick-start */
import "../../styles/navbar.css"
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { Form } from 'react-bootstrap';

import Search from "../list/Search";

export default function Navigation() {
    const navigate = useNavigate();

    const navigateSearch = () => {
        navigate('/search');
    };
    return (
        <div>
            <Form id="search">
                <Form.Group controlId="searchBar">
                    <Form.Control id="search" type="text" placeholder="Search products" fullwidth />
                    <button type="Submit" value="Submit" className='Submit' onClick={navigateSearch}>Submit</button>
                </Form.Group>
            </Form>
            <span id="top-links">
                <a href="/login">Log in</a>
                <a href="/cart">Cart</a>
            </span>
            <nav className="navigation">
                <div className="navigation-menu">
                    <ul>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                        <li>
                            <Link to="/flyers">Flyers</Link>
                        </li>
                        <li>
                            <Link to="/delivery">Delivery & pick-up</Link>
                        </li>
                        <li>
                            <Link to="/about">Our Story</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}