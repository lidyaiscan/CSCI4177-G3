import '../../style.css';
import React from "react";
import { Link } from 'react-router-dom';

function Profile(props) {

    return (
        <React.Fragment>
            <div className="App">
                <section id="description">
                    <h1>Profile</h1>
                </section>

                <div>
                    <label>FirstName:{props.in_firstname}</label><br />
                    <label>LastName:{props.in_lastname}</label><br />
                    <label>Email:{props.in_email}</label><br />
                    <br></br>
                    <Link to="/login">Go To Login</Link>
                </div>
            </div>
        </React.Fragment>

    );

}

export default Profile;
