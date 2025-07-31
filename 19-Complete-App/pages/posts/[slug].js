import { Fragment } from 'react';
import PostContent from '../../components/posts/post-detail/post-content'
import { getPostData, getPostsFiles } from '../../lib/posts-util';
import Head from 'next/head'

export default function PostDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.postData.title}</title>
        <meta name="description" content={props.postData.excerpt} />
      </Head>
      <PostContent postData={props.postData} />
    </Fragment>
  )
}

export async function getStaticProps(context) {
  const { params } = context;
  const postId = params.slug;

  const postData = getPostData(postId);

  return {
    props: {
      postData
    },
    revalidate: 600 // Revalidate every 10 minutes
  }
}

export async function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const paths = postFilenames.map(post => ({
    params: { slug: post.replace(/\.md$/, '') } // Remove the file extension from the slug
  }));

  return {
    paths,
    fallback: false // If a path is not returned, it will show a 404 page
  }
}
