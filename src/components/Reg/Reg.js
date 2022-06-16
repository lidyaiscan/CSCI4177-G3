import '../../style.css';
import React, { useState } from "react";
import Profile from '../Profile/Profile';
import Nav from '../nav/nav';
import Foot from '../foot/foot';

function Form() {
    const [firstname, changeFirstName] = useState("");
    const [lastname, changeLastName] = useState("");
    const [email, changeEmail] = useState("");
    const [password, changePassword] = useState("");
    const [isvalidate, setValidate] = useState(false);

    const [errorinfo, setErrorInfo] = useState([]);

    /*check the validate */
    function CheckValidate(first_name, last_name, email_input, password_input) {
        /*regular expression for inputs*/
        const reg_firstname = new RegExp(/^(([A-Za-z]+)([\s][A-Za-z]+){0,1})$/);
        const reg_lastname = new RegExp(/^(([A-Za-z]+)([\'-][A-Za-z]+){0,1})$/);
        const reg_email = new RegExp(/^[\w-\.]+@([\w-]*\.)+[\w]{2,6}$/);
        const reg_password = new RegExp(/^((?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[\W]).{3,})/);
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
        !isvalidate ? (
            <div className="App">
                <section id="description">
                    <h1>Registration</h1>
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
                    <label>Last Name</label>
                    <span>* Letters only (non-case-sensitive)</span>
                    <br></br>
                    <input type="text" placeholder="Last Name" name="lastName" id="lastName"
                        onChange={(event) => changeLastName(event.target.value)}
                    ></input>
                    <br></br>
                    <label>Email</label>
                    <span>* Must follow the traditional email format</span>
                    <br></br>
                    <input type="email" placeholder="Email" name="email" id="email"
                        onChange={(event) => changeEmail(event.target.value)}
                    ></input>
                    <br></br>
                    <label>Password</label>
                    <span>* Include at least one number, one uppercase letter, one lowercase letter, and one special character.</span>
                    <br></br>
                    <input type="password" placeholder="Password" name="password" id="password"
                        onChange={(event) => changePassword(event.target.value)}
                    ></input>

                    <br></br>
                    <button onClick={() => CheckValidate(firstname, lastname, email, password)} type="Submit" id="enter">Register</button>
                    <div>
                        {
                            errorinfo.map((item, index) => (
                                <p key={index}>{item}</p>
                            ))
                        }
                    </div>
                </div>
                <Foot />
            </div>

        ) : (
            <Profile in_firstname={firstname} in_lastname={lastname} in_email={email} />
        )

    );
}

export default Form;
