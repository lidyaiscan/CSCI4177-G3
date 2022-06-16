import '../../style.css';

import React from "react";
import { Link } from 'react-router-dom';
import Nav from '../nav/nav';
import Foot from '../foot/foot';

function Profile(props) {

    return (
        <React.Fragment>
            <div className="App">
                <section id="description">
                    <h1>Profile</h1>
                </section>
                <Nav />
                <div>
                    <label>FirstName:{props.in_firstname}</label><br />
                    <label>LastName:{props.in_lastname}</label><br />
                    <label>Email:{props.in_email}</label><br />
                    <br></br>
                    <Link to="/login">Go To Login</Link>
                </div>
            </div>
            <Foot />
        </React.Fragment>

    );

}

export default Profile;
