import Link from 'next/link';
import classes from './post-item.module.css';
import Image from 'next/image';

export default function PostItem({post}) {

    console.log('PostItem', post);
    const formatedDate = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const imagePath = `/images/posts/${post.image}`;

  return (
    <li className={classes.post}>
        <Link href={`/posts/${post.slug}`}>
            <div className={classes.image}>
                <Image src={imagePath} alt={post.title} width={300} height={200} layout='responsive' />
            </div>
            <div className={classes.content}>
                <h3>{post.title}</h3>
                <time>{formatedDate}</time>
                <p>{post.excerpt}</p>
            </div>
        </Link>
    </li>
  )
}
