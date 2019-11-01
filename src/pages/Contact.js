import React from "react"
import { Helmet } from "react-helmet";
import ContactForm from "../components/ContactForm"

const Contact = () => {
    return (
        <div className="contact">
            <Helmet>
                <title>Contact A Web Developer - Let's build your website - Lance Huddleston II</title>
                <meta name="author" content="Lance Huddleston II" />
                <meta name="description" content="Get in contact with a web developer today. Lance Huddleston II can help you build web sites and web applications for your business.
                With his experience, the job will get done and it'll be done well."/>
                <meta property="og:title" content="Contact A Web Developer - Let's build your website - Lance Huddleston II" />
                <meta property="og:description" content="Get in contact with a web developer today. Lance Huddleston II can help you build web sites and web applications for your business.
                With his experience, the job will get done and it'll be done well." />
                <meta name="twitter:title" content="Contact A Web Developer - Let's build your website - Lance Huddleston II"/>
            </Helmet>
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