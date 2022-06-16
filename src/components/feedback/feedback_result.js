import '../../style.css';

import React from "react";
import { Link } from 'react-router-dom';
import Nav from '../nav/nav';
import Foot from '../foot/foot';

function feedbackresult(props) {

    return (
        <React.Fragment>
            <Nav />
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

                </div>
                <Foot />
            </div>
        </React.Fragment>

    );

}

export default feedbackresult;
