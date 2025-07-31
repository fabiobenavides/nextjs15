import { Fragment } from 'react';
import AllPosts from '../../components/posts/all-posts'
import { getAllPosts } from '../../lib/posts-util';
import Head from 'next/head'

export default function AllPostsPage(props) {

  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A list of all programming-related posts." />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts
    },
    revalidate: 1800 // Revalidate every 30 minutes
  }
}
