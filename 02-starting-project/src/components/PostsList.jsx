import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from  './PostsList.module.css';
import Modal from "./Modal";

export default function PostList({ modalIsVisible, onHideModal }) {

  return (
    <>
      { modalIsVisible && <Modal onClose={onHideModal}>
          <NewPost 
            onCancel={onHideModal}
          />
      </Modal> }
      <ul className={classes.posts}>
          <Post name={"Mauricio"} text={"knows a little of React"}/>
      </ul>
    </>
  )
}
