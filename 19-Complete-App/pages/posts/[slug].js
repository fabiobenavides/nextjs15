import PostContent from '../../components/posts/post-detail/post-content'
import { getPostData, getPostsFiles } from '../../lib/posts-util';

export default function PostDetails(props) {
  return <PostContent postData={props.postData} />
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
