import Post from "./post";
import classes from  './PostsList.module.css';

export default function PostList() {
  return (
    <ul className={classes.posts}>
        <Post name={"Fabio"} text={"Learning React"}/>
        <Post name={"Mauricio"} text={"knows a little of React"}/>
    </ul>
  )
}
