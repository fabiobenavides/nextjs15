import classes from  './Post.module.css';

const names = ['Max', 'Fab'];

export default function Post({name, text}) {
  return (
    <li className={classes.post}>
        <p className={classes.author}>{name}</p>
        <p className={classes.text}>{text}</p>
    </li>
  );
}
