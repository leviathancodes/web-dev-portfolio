import React, { useState } from "react"
import { useFormState } from 'react-use-form-state';
import axios from 'axios'

const ContactForm = ({ onSubmit }, props) => {


    const [formState, { text, email, select, textarea }] = useFormState(null, {
        onChange(e, stateValues, nextStateValues) {
            const { name, value } = e.target;
        }
    })

    const [formSent, setFormSent] = useState(false)


    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const data = formState.values
    
            const response = await axios.post('https://lhuddlesto-api.herokuapp.com/email', data)
            setFormSent(true)

        }  catch (e) {
            return e
        }

    }
    if (!formSent) {
        return (
            <form className="form" onSubmit={handleSubmit}>
                <div className="form__names">
                    <input {...text('fname')} className="form__names-fname" placeholder="Your first name..." required />
                    <input {...text('lname')} className="form__names-lname" placeholder="Your last name..." required />
                </div>
                <input {...email('email')} className="form__email" placeholder="Your email..." required />
                <select required {...select("work")} placeholder="Type of work...">
                    <option className="select__default" value="" disabled selected>Type of work...</option>
                    <option value="wordpress">Wordpress Site</option>
                    <option value="part time web dev">Part-Time Web Development Work</option>
                    <option value="full time web dev">Full-Time Web Development Work</option>
                    <option value="web dev feature maintanence">Web-site Maintanence / Features</option>
                </select>
                <textarea rows="50" cols="50" {...textarea('message')} placeholder="Your message..." />
                <button className="form__submit">Submit</button>
            </form>
        )
    }
    
    return (
        <div className="contact__thankYou">
            <h1 className="contact__thankYou-head">Thanks!</h1>
            <p className="contact__thankYou-body">You're message has been sent.  Expect an email back within the next 24 hours.</p>
        </div>
    )

}

export default ContactForm