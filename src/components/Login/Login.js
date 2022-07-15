/**
 * CSCI 4177 Assignment 3
 * login function
 * developed by xinlong
 */
import "../../style.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
//import Props from "prop-types";
import axios from "axios";

function Login(props) {
    const [email, changeEmail] = useState("");
    const [password, changePassword] = useState("");
    const [isvalidate, setValidate] = useState(false);
    const [errorinfo, setErrorInfo] = useState([]);
    const [loginresult, setResult] = useState(false);


    /*handle the submit */
    const handleSubmit = (email_input, password_input) => {
        //event.preventDefautl();
        const data = {
            email: email_input,
            password: password_input
        }
        let api_url = global.auth_api_server + "/login";
        axios.post(api_url, data)
            .then(res => {
                console.log(res);
                setResult(true);
                sessionStorage.setItem("username", res.data.username);
                sessionStorage.setItem("id", res.data.id);
                //alert(res.data.username);
            })
            .catch(err => {
                console.log(err);
                setResult(false);
            })
    }

    /*check the validate */
    function CheckValidate(email_input, password_input) {
        /*regular expression for inputs*/
        const reg_email = new RegExp(/^[\w-\.]+@([\w-]*\.)+[\w]{2,6}$/);
        //const reg_firstname = new RegExp(/^(([A-Za-z]+)([\s][A-Za-z]+){0,1})$/);
        const reg_password = new RegExp(
            /^((?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[\W]).{3,})/
        );
        /*check the input values */
        const errs = [];
        if (!reg_email.test(email_input)) {
            errs.push("Invalid Email");
        }
        if (!reg_password.test(password_input)) {
            errs.push("Invalid Password");
        }
        if (errs.length === 0) {
            /*clear the error messages */
            //setErrorInfo(errs);
            handleSubmit(email_input, password_input);
            setValidate(true);
        } else {
            /*show the error messages */
            setValidate(false);
            setErrorInfo(errs);
        }
    }

    //return (
    if (!isvalidate) {
        return (
            <div className="App">
                <section id="description">
                    <h1>Login</h1>
                </section>

                <div>

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
                        letter, and one special character.
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
                        onClick={() => CheckValidate(email, password)}
                        type="Submit"
                        id="enter"
                    >
                        Login
                    </button>
                    <div>
                        {errorinfo.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </div>
                    <br></br>
                    <Link to="/register">New User</Link>
                    <br></br>
                    <Link to="/adminLogin">Admin Login</Link>
                </div>
            </div>
        )
    }
    else {
        if (loginresult) {
            return (
                <div className="App">
                    <section id="description">
                        <h1>Login</h1>
                    </section>


                    <div><h2>welcome {sessionStorage.getItem("username")}</h2></div>
                    <div>you can update your <a href='/updateprofile'>profile</a> or <a href='/logout'>logout</a></div>
                    <div id="readme">This page indicates that I have implemented the front-end and back-end functions of the authentication feature according to the requirements of Assignment3.</div>
                    <div id="readme">Task:(1)Registration(Sign Up) (2) Login in (3) View and Update Profile (4) Update Password (5) Logout.</div>
                    <div id="readme">When submitting the demo, I will complete the interaction between tasks.</div>

                </div>
            );
        }
        else {
            return (
                <div className="App">
                    <section id="description">
                        <h1>Login</h1>
                    </section>


                    <div><h2>Login Fail, Please <a href="/login">relogin</a></h2></div>
                </div>
            );
        }

    }
    //    );
}

export default Login;
