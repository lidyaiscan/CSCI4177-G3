import '../../style.css';

import React from "react";
import { Link } from 'react-router-dom';

function feedbackresult(props) {

    return (
        <React.Fragment>
            <div className="App">
                <section id="description">
                    <h1>Contact Information</h1>
                </section>
                <div>
                    <label>Name:{props.name}</label><br />
                    <label>Email:{props.email}</label><br />
                    <label>Phone:{props.phone}</label><br />
                    <label>Message:{props.message}</label><br />
                    <br></br>
                    <Link to="/">Go To HomePage</Link>
                </div>
            </div>
        </React.Fragment>

    );

}

export default feedbackresult;
