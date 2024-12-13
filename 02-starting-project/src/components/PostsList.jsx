import Post from "./Post";
import classes from  './PostsList.module.css';
import { useLoaderData } from "react-router-dom";

export default function PostList() {
  const posts = useLoaderData();

  function addPostHandler(postData) {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    // Use this way (arrow funct) if our new state depends on the previous state
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {posts.length > 0 && 
          <ul className={classes.posts}>
          {posts.map((item) => (
            <Post key={item.id} id={item.id} name={item.author} text={item.body}/>
          ))}
        </ul>
      }
      {posts.length === 0 && (
          <div style={{ textAlign: 'center', color: 'white'} }>
            <h2>There are no post yet.</h2>
          </div>  
      )}
      
    </>
  )
}
