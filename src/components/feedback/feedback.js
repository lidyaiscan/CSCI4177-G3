import '../../style.css';
import React, { useState } from "react";
import FeedbackResult from '../feedback/feedback_result';
import Nav from '../nav/nav';
import Foot from '../foot/foot';

function Form() {

    const [name, changeName] = useState("");
    const [email, changeEmail] = useState("");
    const [phone, changePhone] = useState("");
    const [message, changeMessage] = useState("");
    const [isvalidate, setValidate] = useState(false);

    const [errorinfo, setErrorInfo] = useState([]);

    /*check the validate */
    function CheckValidate(name_input, email_input, phone_input, message_input) {
        /*regular expression for inputs*/
        const reg_name = new RegExp(/^(([A-Za-z]+)([\s][A-Za-z]+){0,1})$/);
        const reg_email = new RegExp(/^[\w-\.]+@([\w-]*\.)+[\w]{2,6}$/);
        const reg_phone = new RegExp(/^(([0-9]){9,})/);
        /*check the input values */
        const errs = [];
        if (!reg_name.test(name_input)) {
            errs.push("Invalid Name");
        }
        if (!reg_email.test(email_input)) {
            errs.push("Invalid Email");
        }
        if (!reg_phone.test(phone_input)) {
            errs.push("Invalid Phone");
        }
        if (message_input.length === 0) {
            errs.push("Invalid Message");
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
                    <h1>Contact Us</h1>
                </section>
                <Nav />
                <div>
                    <div>
                        <label>Name:</label><span>* Letters only (non-case-sensitive)</span>
                        <br></br>
                        <input type="text" placeholder="Name" name="name" id="name"
                            onChange={(event) => changeName(event.target.value)}
                        ></input>

                        <br></br>
                    </div>
                    <div>
                        <label>Email:</label><span>* Must follow the traditional email format</span>
                        <br></br>
                        <input type="email" placeholder="Email" name="email" id="email"
                            onChange={(event) => changeEmail(event.target.value)}
                        ></input><br></br>
                    </div>
                    <div>
                        <label>Phone:</label><span>* Number only</span>
                        <br></br>
                        <input type="text" placeholder="Phone" name="phone" id="phone"
                            onChange={(event) => changePhone(event.target.value)}
                        ></input><br></br>
                    </div>
                    <div class="message">
                        <label>Message:</label>
                        <br></br>
                        <textarea type="text" placeholder="Input messages" name="message" id="message"
                            onChange={(event) => changeMessage(event.target.value)}
                        ></textarea>
                        <br></br>
                    </div>
                    <button onClick={() => CheckValidate(name, email, phone, message)} type="Submit" id="enter">Contact</button>
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
            <FeedbackResult name={name} email={email} phone={phone} message={message} />
        )

    );
}

export default Form;
