import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from  './PostsList.module.css';
import Modal from "./Modal";

export default function PostList({ modalIsVisible, onHideModal }) {

  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    // Use this way (arrow funct) if our new state depends on the previous state
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      { modalIsVisible && <Modal onClose={onHideModal}>
          <NewPost 
            onCancel={onHideModal}
            onAddPost={addPostHandler}
          />
      </Modal> }
      {posts.length > 0 && 
          <ul className={classes.posts}>
          {posts.map((item) => (
            <Post key={item.body} name={item.author} text={item.body}/>
          ))}
        </ul>
      }
      {posts.length === 0 && (
          <div style={{ textAling: 'center', color: 'white'} }>
            <h2>There are no post yet.</h2>
          </div>  
      )}
      
    </>
  )
}
