"use client";

import { useOptimistic } from 'react';
import { formatDate } from '@/lib/format';
import LikeButton from './like-icon';
import { togglePostLikeStatus } from '@/actions/posts';
import Image from 'next/image';

function imageLoader(config) {
  //console.log(config);
  //this is only for cloundinary, other provider will be diff
  // this code is requesting cloundinary to generate a image with these specification
  // in that way the image will be smaller and optimize at cloundinary and we download 
  // a smaller and optimized image to display
  const srcStart = config.src.split('upload/')[0];
  const srcEnd = config.src.split('upload/')[1];
  const transformation = `w_200,q_${config.quality}`
  return `${srcStart}upload/${transformation}/${srcEnd}`;
}

function Post({ post, action }) {
  return (
    <article className="post">
      <div className="post-image">
        <Image loader={imageLoader} src={post.image} fill alt={post.title} quality={50} />
      </div>
      <div className="post-content">
        <header>
          <div>
            <h2>{post.title}</h2>
            <p>
              Shared by {post.userFirstName} on{' '}
              <time dateTime={post.createdAt}>
                {formatDate(post.createdAt)}
              </time>
            </p>
          </div>
          <div>
            <form
              action={action.bind(null, post.id)}
              className={post.isLiked ? 'liked' : ''}
            >
              <LikeButton />
            </form>
          </div>
        </header>
        <p>{post.content}</p>
      </div>
    </article>
  );
}

export default function Posts({ posts }) {
  const [optimisticPosts, updateOptimisticPosts] = useOptimistic(posts, (prevPosts, updatedPostId) => {
    const updatedPostIndex = prevPosts.findIndex(post => post.id === updatedPostId);

    if (updatedPostIndex === -1) {
      return prevPosts;
    }

    const updatedPost = { ...prevPosts[updatedPostIndex] };
    updatedPost.likes = updatedPost.likes + (updatedPost.isLiked ? -1 : 1);
    updatedPost.isLiked = !updatedPost.isLiked;
    const newPosts = [...prevPosts];
    newPosts[updatedPostIndex] = updatedPost;
    return newPosts;
  })

  if (!optimisticPosts || optimisticPosts.length === 0) {
    return <p>There are no posts yet. Maybe start sharing some?</p>;
  }

  async function updatePost(postId) {
    updateOptimisticPosts(postId);
    await togglePostLikeStatus(postId);
  }

  return (
    <ul className="posts">
      {optimisticPosts.map((post) => (
        <li key={post.id}>
          <Post post={post} action={updatePost} />
        </li>
      ))}
    </ul>
  );
}
