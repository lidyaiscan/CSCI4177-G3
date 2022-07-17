/**
 * CSCI 4177 Assignment 3
 * registration function
 * developed by xinlong
 */
import "../../style.css";
import React, { useState } from "react";
import Profile from "../Profile/Profile";
//import { Form } from "react-bootstrap";
import "../global/global";
import axios from "axios";

function addProfile(firstname, lastname, email, password, api_url) {
    /*submit the regist information */

    console.log(api_url);

    const data = {
        firstName: firstname,
        lastName: lastname,
        email: email,
        password: password
    };

    const add_Profile = async () => {
        await axios.post(api_url, data)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    add_Profile();

}

function Reg_Form() {
    const [firstname, changeFirstName] = useState("");
    const [lastname, changeLastName] = useState("");
    const [email, changeEmail] = useState("");
    const [password, changePassword] = useState("");
    const [isvalidate, setValidate] = useState(false);
    //const [isExist, setExist] = useState(false);
    const [errorinfo, setErrorInfo] = useState([]);

    /*check the validate */
    function CheckValidate(first_name, last_name, email_input, password_input) {
        /*regular expression for inputs*/
        const reg_firstname = new RegExp(/^(([A-Za-z]+)([\s][A-Za-z]+){0,1})$/);
        const reg_lastname = new RegExp(/^(([A-Za-z]+)([\'-][A-Za-z]+){0,1})$/);
        const reg_email = new RegExp(/^[\w-\.]+@([\w-]*\.)+[\w]{2,6}$/);
        const reg_password = new RegExp(
            /^((?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[\W]).{3,})/
        );
        /*check the input values */
        const errs = [];
        if (!reg_firstname.test(first_name)) {
            errs.push("Invalid First Name");
        }
        if (!reg_lastname.test(last_name)) {
            errs.push("Invalid Last Name");
        }
        if (!reg_email.test(email_input)) {
            errs.push("Invalid Email");
        }
        if (!reg_password.test(password_input)) {
            errs.push("Invalid Password");
        }
        if (errs.length === 0) {
            /*clear the error messages */
            let api_url = global.auth_api_server + "/add";
            addProfile(first_name, last_name, email_input, password_input, api_url)
            setValidate(true);

        } else {
            /*show the error messages */
            setValidate(false);
            setErrorInfo(errs);
        }
    }

    return !isvalidate ? (
        <React.Fragment>
            <div className="App">
                <section id="description">
                    <h1>Registration</h1>
                </section>

                <div>

                    <label>First Name</label>
                    <span>* Letters only (non-case-sensitive)</span>
                    <br></br>
                    <input
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        id="firstName"
                        onChange={(event) => changeFirstName(event.target.value)}
                    ></input>
                    <br></br>
                    <label>Last Name</label>
                    <span>* Letters only (non-case-sensitive)</span>
                    <br></br>
                    <input
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        id="lastName"
                        onChange={(event) => changeLastName(event.target.value)}
                    ></input>
                    <br></br>
                    <label>Email</label>
                    <span>* Must follow the traditional email format</span>
                    <br></br>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        id="email"
                        onChange={(event) => changeEmail(event.target.value)}
                    ></input>
                    <br></br>
                    <label>Password</label>
                    <span>
                        * Include at least one number, one uppercase letter, one lowercase
                        letter, and one special character, length at least 8.
                    </span>
                    <br></br>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        id="password"
                        onChange={(event) => changePassword(event.target.value)}
                    ></input>

                    <br></br>
                    <button
                        onClick={() => CheckValidate(firstname, lastname, email, password)}
                        type="Submit"
                        id="enter"
                    >
                        Register
                    </button>

                    <div>
                        {errorinfo.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    ) : (
        <Profile in_firstname={firstname} in_lastname={lastname} in_email={email} />
    );
}

export default Reg_Form;
