import Link from 'next/link';
import classes from './post-item.module.css';

export default function PostItem({postItem}) {

    const formatedDate = new Date(postItem.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

  return (
    <li className={classes.post}>
        <Link>
            <div className={classes.image}>
                <Image  />
            </div>
            <div className={classes.content}>
                <h3>{postItem.title}</h3>
                <time>{formatedDate}</time>
                <p>{postItem.excerpt}</p>
            </div>
        </Link>
    </li>
  )
}
