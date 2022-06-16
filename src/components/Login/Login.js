import '../../style.css';

import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Nav from '../nav/nav';
import Foot from '../foot/foot';

function Login(props) {
    const [firstname, changeFirstName] = useState("");
    const [password, changePassword] = useState("");
    const [setValidate] = useState(false);
    const [errorinfo, setErrorInfo] = useState([]);

    /*check the validate */
    function CheckValidate(first_name, password_input) {
        /*regular expression for inputs*/
        const reg_firstname = new RegExp(/^(([A-Za-z]+)([\s][A-Za-z]+){0,1})$/);

        const reg_password = new RegExp(/^((?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[\W]).{3,})/);
        /*check the input values */
        const errs = [];
        if (!reg_firstname.test(first_name)) {
            errs.push("Invalid First Name");
        }
        if (!reg_password.test(password_input)) {
            errs.push("Invalid Password");
        }
        if (errs.length === 0) {
            /*clear the error messages */
            //setErrorInfo(errs);
            setValidate(true);
        }
        else {
            /*show the error messages */
            setValidate(false);
            setErrorInfo(errs);
        }
    }

    return (
        <React.Fragment>
            <div className="App">
                <section id="description">
                    <h1>Login</h1>
                </section>
                <Nav />
                <div>

                    <label>First Name</label>
                    <span>* Letters only (non-case-sensitive)</span>
                    <br></br>
                    <input type="text" placeholder="First Name" name="firstName" id="firstName"
                        onChange={(event) => changeFirstName(event.target.value)}
                    ></input>
                    <br></br>
                    <label>Password</label>
                    <span>* Include at least one number, one uppercase letter, one lowercase letter, and one special character.</span>
                    <br></br>
                    <input type="password" placeholder="Password" name="password" id="password"
                        onChange={(event) => changePassword(event.target.value)}
                    ></input>

                    <br></br>
                    <button onClick={() => CheckValidate(firstname, password)} type="Submit" id="enter">Login</button>
                    <div>
                        {
                            errorinfo.map((item, index) => (
                                <p key={index}>{item}</p>
                            ))
                        }
                    </div>
                    <br></br>

                </div>
                <Foot />
            </div>
        </React.Fragment>

    );

}

export default Login;
