import Postheader from "./post-header";
import classes from './post-content.module.css';
import ReactMarkdown from 'react-markdown';

export default function PostContent() {
    const content = "# This is the content of the post.";
    const imagePath = `/images/posts/image1.png`;

  return (
    <article className={classes.content}>
        <Postheader title="Test post" image={imagePath} />
        <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  )
}
