import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from  './PostsList.module.css';

export default function PostList() {

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
    <>
      <NewPost changeBodyHandler={changeBodyHandler} changeAuthorHandler={changeAuthorHandler} />
      <ul className={classes.posts}>
          <Post name={author} text={body}/>
          <Post name={"Mauricio"} text={"knows a little of React"}/>
      </ul>
    </>
  )
}
