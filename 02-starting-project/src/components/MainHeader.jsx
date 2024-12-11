import { MdPostAdd, MdMessage } from 'react-icons/md';

import classes from './MainHeader.module.css';
import { Link } from 'react-router-dom';

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <Link to='/create' className={classes.button} >
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
    </header>
  );
}
