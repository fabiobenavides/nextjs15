import classes from './comment-list.module.css';

function CommentList({comments}) {
  return (
    <ul className={classes.comments}>
      {comments || comments.length === 0 && (
        <li className={classes.noComments}>No comments yet!</li>
      )}
      {comments && comments.length > 0 && (
        comments.map((comment) => (
          <li key={comment.id}>
            <p>{comment.text}</p>
            <div>
              By <address>{comment.name}</address>
            </div>
          </li>
        ))
      )}
    </ul>
  );
}

export default CommentList;
