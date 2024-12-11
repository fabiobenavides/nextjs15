import { useEffect, useState } from "react";
import Post from "./Post";
import classes from  './PostsList.module.css';

export default function PostList() {

  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch('http://localhost:8080/posts');
      const resData = await response.json();
      setPosts(resData.posts);
      setIsFetching(false);
    }

    fetchPosts();
  }, []);

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

  if (isFetching) { 
    return (
      <div style={{ textAlign: 'center', color: 'white'} }>
        <p>Loading the data</p>
      </div>
    )   
  };

  return (
    <>
      {posts.length > 0 && 
          <ul className={classes.posts}>
          {posts.map((item) => (
            <Post key={item.body} name={item.author} text={item.body}/>
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
