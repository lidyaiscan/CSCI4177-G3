/**
 * CSCI 4177 Assignment 3
 * logout function
 * developed by xinlong
 */

import "../../style.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";


function Logout(props) {
    sessionStorage.clear();
    return (
        <div className="App">
            <section id="description">
                <h1>Logout</h1>
            </section>

            <br></br>
            <br></br>
            <div><h2>You have Logout Safely. <a href="/">Welcome back.</a></h2></div>
            <br></br>
            <br></br>
            <br></br>

        </div>
    );
}

export default Logout;