import { useContext, useEffect, useState } from 'react';
import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';
import NotificationContext from '../../store/notification-context';

function Comments(props) {
  const { eventId } = props;
  const [comments, setComments] = useState(props.comments || []);
  const [showComments, setShowComments] = useState(false);
  const [isLoadingComments, setIsLoadingComments] = useState(false);
  const notificationCtx = useContext(NotificationContext); 

  useEffect(() => {
    // Fetch comments from API when the component mounts
    if (showComments) {
      setIsLoadingComments(true);
      fetch(`/api/comments/${eventId}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.error) {
            alert(data.error);
          } else {
            setComments(data.comments);
          }
          setIsLoadingComments(false);
        })
        .catch((error) => {
          setIsLoadingComments(false);
          console.error('Error:', error);
          alert('There was an error fetching comments. Please try again later.');
        });
    }
  }, [eventId, showComments, setIsLoadingComments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {

    notificationCtx.showNotification({
      title: 'Sending comment...',
      message: 'Adding your comment',
      status: 'pending'
    });

    // send data to API
    fetch(`/api/comments/${eventId}`, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    // 40X codes and 50X codes are not caught by the fetch API, so we need to handle them manually
    // 40X codes are client errors, 50X codes are server errors
    // fetch will not throw an error for these codes, so we need to check the response status
    // if the response is not ok, we throw an error
    // then we catch the error and show a notification
    // if the response is ok, we parse the response as JSON and show a success notification
    // if the response is not ok, we parse the response as JSON and show an error notification
    // if there is an error in the fetch request, we catch it and show an error notification
    // this way we can handle all possible errors and show appropriate notifications
    .then(response => {
      if (response.ok) { 
        return response.json()
      }
      
      return response.json().then((data) => {
        throw new Error (data.message || 'Something went wrong!');
      });
    })
    .then((data) => {
      console.log(data);
      if (data.error) {
        notificationCtx.showNotification({
          title: 'Error!',
          message: data.error,
          status: 'error'
        });
      } else {
        console.log(data.comment);
        notificationCtx.showNotification({
          title: 'Success!',
          message: 'Comment registered',
          status: 'success'
        });
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      notificationCtx.showNotification({
        title: 'Error!',
        message: 'Registration failed, please try again later.',
        status: 'error'
      });
    });
    
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && isLoadingComments && (
        <p className={classes.loading}>Loading comments...</p>
      )}
      {showComments && !isLoadingComments && <CommentList comments={comments} />}
    </section>
  );
}

export default Comments;
