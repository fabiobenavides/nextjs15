import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost({ onCancel, onSubmit }) {

  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');

  function changeBodyHandler(event) {
      console.log(event.target.value);
      setBody(event.target.value);
  }

  function changeAuthorHandler(event) {
    console.log(event.target.value);
    setAuthor(event.target.value);
  }

  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeAuthorHandler}/>
      </p>
      <p className={classes.actions}>
        <button type='button' onClick={onCancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;