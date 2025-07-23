import { useState } from 'react';
import classes from './contact-form.module.css';

export default function ContactForm() {

    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredMessage, setEnteredMessage] = useState('');

    const submitHandler = async (event) => {
        event.preventDefault();

        const contactData = {
            name: enteredName,
            email: enteredEmail,
            message: enteredMessage
        };

        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contactData)
        });

        const data = await response.json();
        if (!response.ok) { 
            throw new Error(data.message || 'Something went wrong!');
        }       

        console.log(data);
        // Optionally, you can reset the form or show a success message 
        event.target.reset();
    };


  return (
    <section className={classes.contact}>
        <h1>How can I help you?</h1>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" required 
                        value={enteredName} 
                        onChange={(event) => setEnteredName(event.target.value)} 
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" required 
                        value={enteredEmail} 
                        onChange={(event) => setEnteredEmail(event.target.value)}
                    />
                </div>
            </div>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="message">Your Message</label>
                    <textarea id="message" rows="5" required
                        value={enteredMessage} 
                        onChange={(event) => setEnteredMessage(event.target.value)}    
                    ></textarea>
                </div>
            </div>
            <div className={classes.actions}>
                <button>Send Message</button>
            </div>
        </form>
    </section>
      
  )
}
