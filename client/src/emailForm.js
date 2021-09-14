import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import emailjs from "emailjs-com";

export default function EmailForm({ setProjectView}) {
    const [name, setName] = useState(false);
    const [email, setEmail] = useState(false);
    const [emailText, setEmailText] = useState(false);
    const [sending, setSending] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

        useEffect(
            function () {
               setProjectView(false)
            },
            []
        );


    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleEmailTextChange = (e) => {
        setEmailText(e.target.value);
    };

    const sendEmail = () => {
        const templateParams = {
            userName: name,
            userEmail: email,
            text: emailText,
        };
        emailjs
            .send(
                "service_uruuovk",
                "template_vlxhcdm",
                templateParams,
                "user_Y2KOkk3fOb66K8J9CajaN"
            )
            .then(
                (response) => {
                    setSending(false);
                    setSuccess(true);
                    console.log("SUCCESS!", response.status, response.text);
                },
                (err) => {
                    setError(true);
                    setSending(false);
                    console.log("FAILED...", err);
                }
            );
    };

    return (
        <div className="emailFormContainerBack">
            <div className="emailFormContainer">
                <div className="userDetails">
                    <div
                        title="Send Quick Message"
                        className="mail"
                        id="mail"
                        onClick={() => {
                            this.setProject(false);
                        }}
                    ></div>
                    <div className="inputHeadline">Your Name</div>
                    <input
                        autoComplete="none"
                        placeholder="Name"
                        onChange={(e) => handleNameChange(e)}
                    ></input>
                    <div className="inputHeadline">Your Email</div>
                    <input
                        autoComplete="none"
                        placeholder="Email"
                        onChange={(e) => handleEmailChange(e)}
                    ></input>
                    {(!name || !email || !emailText) && (
                        <div className="sendButtonDisabled">Send</div>
                    )}
                    {name && email && emailText && !sending && !success && (
                        <div
                            className="sendButton"
                            onClick={() => {
                                setSending(true);
                                sendEmail();
                                setError(false);
                            }}
                        >
                            Send
                        </div>
                    )}
                    {sending && <div className="sending"></div>}
                    {success && (
                        <Link to={"/"} className="sent">
                            Done !
                        </Link>
                    )}
                </div>
                <div className="textAreaBack">
                    <div className="quickMessage">Get In Touch !</div>
                    <textarea
                        placeholder="Write something..."
                        onChange={(e) => handleEmailTextChange(e)}
                    ></textarea>
                </div>
                <Link to={"/"} className="closeTab" id="closeTab">
                    X
                </Link>
            </div>

            {error && (
                <div className="error">
                    Something Went Wrong, Please Try Again
                </div>
            )}
        </div>
    );
}
