import { useRef } from 'react';
import classes from './profile-form.module.css';

function ProfileForm(props) {

  const currentPasswordRef = useRef();
  const newPasswordRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
   
    const enteredCurrentPassword = currentPasswordRef.current.value;
    const enteredNewPassword = newPasswordRef.current.value;

    // optional: Add validation

    props.onChangePassword({
      currentPassword: enteredCurrentPassword,
      newPassword: enteredNewPassword,
    });
    
    
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPasswordRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='current-password'>Current Password</label>
        <input type='password' id='current-password' ref={currentPasswordRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
