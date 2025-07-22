import Postheader from "./post-header";
import classes from './post-content.module.css';
import ReactMarkdown from 'react-markdown';
import Image from "next/image";

export default function PostContent({postData}) {

  const imagePath = `/images/posts/${postData.image}`;

  const customRenderes = {
    p(paragraph) {
      const {node} = paragraph;
      if (node.children[0].tagName === 'img') {
        const image = node.children[0];
        return (
          <div className={classes.image}>
            <Image src={`/images/posts/${image.properties.src}`} alt={image.properties.alt} 
              width={600} height={300}/>
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    }
  };

  return (
    <article className={classes.content}>
        <Postheader title={postData.title} image={imagePath} />
        <ReactMarkdown components={customRenderes}>{postData.content}</ReactMarkdown>
    </article>
  )
}
