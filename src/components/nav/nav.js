/* Written by Song Pho */
import React, { useState } from "react";
import ReactDOM from 'react-dom';
import "../../style.css";
import '../../App.css';
import "../../styles/navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";

export default function Navigation() {
    const navigate = useNavigate();
    //search function
    const [search, setSearch] = useState('');
    const navigateSearch = () => {
        navigate(`/search?searchQuery=${search}`);
    };
    return (
        <div>
            <div id="top">
                <div>
                    <Form id="search">
                        <Form.Group controlId="searchBar">
                            <Form.Control
                                name="searchQuery"
                                type="text"
                                placeholder="Search products"
                                fullwidth
                            />
                            <span><button
                                type="Submit"
                                value="Submit"
                                className="Submit"
                                onClick={navigateSearch}
                            >
                                Submit
                            </button></span>
                        </Form.Group>
                    </Form>
                </div>
                <div className="top-links">
                    <a href="/register">Sign up</a>
                </div>
                <div className="top-links">
                    <a href="/login">Log in</a>
                </div>
                <div className="top-links">
                    <a href="/cart">Cart</a>
                </div>
            </div>
            <nav className="navigation">
                <div className="navigation-menu">
                    <ul>
                        <li>
                            <Link to="">Products</Link>
                        </li>
                        <li>
                            <Link to="/flyers">Flyers</Link>
                        </li>
                        <li>
                            <Link to="/delivery">Delivery & pick-up</Link>
                        </li>
                        <li>
                            <Link to="/favourites">Favourites</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
