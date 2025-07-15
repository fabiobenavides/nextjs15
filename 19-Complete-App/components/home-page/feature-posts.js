import PostsGrid from '../posts/posts-grid';
import classes from './featured-posts.module.css';

export default function FeaturePosts(props) {
  return (
    <section className={classes.latest}>
        <h2>feature-posts</h2>
        <PostsGrid posts={props.posts} />
    </section>
  )
}
