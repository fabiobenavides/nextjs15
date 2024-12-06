import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from  './PostsList.module.css';
import Modal from "./Modal";

export default function PostList() {

  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [modalIsVisible, setModalIsVisible] = useState(true);

  function changeBodyHandler(event) {
      console.log(event.target.value);
      setBody(event.target.value);
  }

  function changeAuthorHandler(event) {
    console.log(event.target.value);
    setAuthor(event.target.value);
  }

  function hideModalHandler(event) {
    setModalIsVisible(false);
  }

  return (
    <>
      { modalIsVisible && <Modal onClose={hideModalHandler}>
          <NewPost 
            changeBodyHandler={changeBodyHandler} 
            changeAuthorHandler={changeAuthorHandler} 
          />
      </Modal> }
      <ul className={classes.posts}>
          <Post name={author} text={body}/>
          <Post name={"Mauricio"} text={"knows a little of React"}/>
      </ul>
    </>
  )
}
