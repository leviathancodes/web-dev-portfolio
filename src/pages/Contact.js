import React from "react"
import ContactForm from "../components/ContactForm"

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact__grid">
                <div className="contactIntro">
                <h1 className="contactIntro__head">We’ll do great work.</h1>
                <p className="contactIntro__subhead">Please provide your name, email, the type of service you are looking for and a message with details about what exactly you are looking for.  After that, expect an email from me within the next 24 hours and we will continue our discussion around providing you with the best web development services possible.  Thanks for taking the time to reach out!</p>
                </div>
                <ContactForm />
            </div>
        </div>

    )
}

export default Contact