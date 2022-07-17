/**
 * CSCI 4177 Assignment 3
 * update profile function
 * developed by xinlong
 */
import '../../style.css';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";



function Profile(props) {

    const [profile, setProfile] = useState("");
    const [firstname, changeFirstName] = useState("");
    const [lastname, changeLastName] = useState("");
    const [email, changeEmail] = useState("");
    const [password, changePassword] = useState("");
    const [isvalidate, setValidate] = useState(false);
    //const [isExist, setExist] = useState(false);
    const [errorinfo, setErrorInfo] = useState([]);
    const [updateresult, setResult] = useState(false);

    //update profile
    function updateProfile(firstname, lastname, email, password, api_url) {

        console.log(api_url);

        const data = {
            firstName: firstname,
            lastName: lastname,
            email: email,
            password: password
        };

        const update_Profile = async () => {
            await axios.put(api_url, data)
                .then(res => {
                    console.log(res);
                    setResult(true);
                })
                .catch(err => {
                    console.log(err);
                    setResult(false);
                })
        }

        update_Profile();

    }

    //get user profile 
    useEffect(() => {

        const get_Profile = async () => {
            let api_url = global.auth_api_server + "/user/" + sessionStorage.getItem("id");
            await axios.get(api_url)
                .then(res => {
                    console.log(res);
                    //setProfile(JSON.stringify(res.data.user));
                    changeFirstName(res.data.user.firstName);
                    changeLastName(res.data.user.lastName);
                    changeEmail(res.data.user.email);

                })
                .catch(err => {
                    console.log(err);
                })
        }

        get_Profile();
        //console.log(profile);
        //alert(JSON.parse(profile).firstName);

    }, [])

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
            let api_url = global.auth_api_server + "/update/" + sessionStorage.getItem("id");
            updateProfile(first_name, last_name, email_input, password_input, api_url)
            setValidate(true);

        } else {
            /*show the error messages */
            setValidate(false);
            setErrorInfo(errs);
        }
    }


    if (!isvalidate) {

        return (

            <div className="App">
                <section id="description">
                    <h1>Your Profile</h1>
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
                        value={firstname}
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
                        value={lastname}
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
                        value={email}
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
                        Update
                    </button>

                    <div>
                        {errorinfo.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </div>
                </div>
            </div>

        )
    }
    else {
        if (updateresult) {
            return (
                <div className="App">
                    <section id="description">
                        <h1>Update Profile</h1>
                    </section>


                    <div><h2>You have update your profile successfully.</h2></div>
                    <div>You can update your <a href='/updateprofile'>profile</a> again or <a href='/'>visit HomePage</a></div>

                </div>
            );
        } else {
            return (
                <div className="App">
                    <section id="description">
                        <h1>Update Profile</h1>
                    </section>

                    <div><h2>You Failed to modify profile</h2></div>
                    <div>You can update your <a href='/updateprofile'>profile</a> again. </div>
                </div>
            );
        }

    }
}

export default Profile;
