import { useRef } from 'react';
import classes from './newsletter-registration.module.css';

function NewsletterRegistration() {

  const emailInputRef = useRef();

  function registrationHandler(event) {
    event.preventDefault();

    // fetch user input (state or refs)
    const enteredEmail = emailInputRef.current.value;

    // regex validation
    const emailIsValid = /^\S+@\S+\.\S+$/.test(enteredEmail);
    if (!emailIsValid) {
      alert('Email invalid, please try with a valid one.');
      return;
    }
    // send valid data to API
    fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      if (data.error) {
        alert(data.error);
      } else {
        alert('Registration successful!');
        emailInputRef.current.value = ''; // Clear the input field after successful registration
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('There was an error with your registration. Please try again later.');
    });

  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            ref={emailInputRef}
            placeholder='Your email'
            aria-label='Your email'
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
