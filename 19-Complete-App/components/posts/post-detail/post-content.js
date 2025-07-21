import Postheader from "./post-header";
import classes from './post-content.module.css';
import ReactMarkdown from 'react-markdown';

export default function PostContent({postData}) {

  const imagePath = `/images/posts/${postData.image}`;

  return (
    <article className={classes.content}>
        <Postheader title={postData.title} image={imagePath} />
        <ReactMarkdown>{postData.content}</ReactMarkdown>
    </article>
  )
}
