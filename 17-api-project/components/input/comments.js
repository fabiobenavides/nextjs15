import { use, useEffect, useState } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';

function Comments(props) {
  const { eventId } = props;
  const [comments, setComments] = useState(props.comments || []);
  const [showComments, setShowComments] = useState(false);


  useEffect(() => {
    // Fetch comments from API when the component mounts
    if (showComments) {
      fetch(`/api/comments/${eventId}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.error) {
            alert(data.error);
          } else {
            setComments(data.comments);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('There was an error fetching comments. Please try again later.');
        });
    }
  }, [eventId, showComments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {

    // send data to API
    fetch(`/api/comments/${eventId}`, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.error) {
        alert(data.error);
      } else {
        //alert('Comment added successfully!');
        //setComments((prevComments) => [data.comment, ...prevComments]);
        console.log(data.comment);
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('There was an error adding your comment. Please try again later.');
    });
    
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList comments={comments} />}
    </section>
  );
}

export default Comments;
