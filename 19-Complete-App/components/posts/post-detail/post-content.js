import Postheader from "./post-header";

export default function PostContent() {
    const content = "#This is the content of the post.";
    const imagePath = `/images/posts/image1.png`;

  return (
    <article>
        <Postheader title="Test post" image={imagePath} />
        {content}
    </article>
  )
}
