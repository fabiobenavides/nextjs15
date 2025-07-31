import { Fragment } from 'react'
import Hero from '../components/home-page/hero'
import FeaturePosts from '../components/home-page/feature-posts'
import { getFeaturedPosts } from '../lib/posts-util';
import Head from 'next/head'

export default function HomePage(props) {

  const featuredPosts = props.featuredPosts;

  return (
    <Fragment>
        <Head>
          <title>Next.js Blog</title>
          <meta name="description" content="I post about programming and web development." />
        </Head>
        <Hero />
        <FeaturePosts posts={featuredPosts} />
    </Fragment>
  )
}

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      featuredPosts
    },
    revalidate: 1800 // Revalidate every 30 minutes
  }
}
