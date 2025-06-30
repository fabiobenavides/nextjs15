import { useRef, useContext, use } from 'react';
import classes from './newsletter-registration.module.css';
import NotificationContext from '../../store/notification-context';

function NewsletterRegistration() {

  const emailInputRef = useRef();
  const notificationCtx = useContext(NotificationContext);

  function registrationHandler(event) {
    event.preventDefault();

    notificationCtx.showNotification({
      title: 'Signing up...',
      message: 'Registering for newsletter',
      status: 'pending'
    });

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
    // 40X codes and 50X codes are not caught by the fetch API, so we need to handle them manually
    // 40X codes are client errors, 50X codes are server errors
    // fetch will not throw an error for these codes, so we need to check the response status
    // if the response is not ok, we throw an error
    // then we catch the error and show a notification
    // if the response is ok, we parse the response as JSON and show a success notification
    // if the response is not ok, we parse the response as JSON and show an error notification
    // if there is an error in the fetch request, we catch it and show an error notification
    // this way we can handle all possible errors and show appropriate notifications
    .then(response => {
      if (response.ok) { 
        return response.json()
      }
      
      return response.json().then((data) => {
        throw new Error (data.message || 'Something went wrong!');
      });
    })
    .then(data => {
      console.log(data)
      if (data.error) {
        notificationCtx.showNotification({
          title: 'Error!',
          message: data.error,
          status: 'error'
        });
      } else {
        notificationCtx.showNotification({
          title: 'Success!',
          message: 'Successfully registered for the newsletter!',
          status: 'success'
        });
        // Clear the input field after successful registration
        emailInputRef.current.value = '';
      }
    })
    .catch(error => {
      console.error('Error:', error);
      notificationCtx.showNotification({
        title: 'Error!',
        message: 'Registration failed, please try again later.',
        status: 'error'
      });
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
