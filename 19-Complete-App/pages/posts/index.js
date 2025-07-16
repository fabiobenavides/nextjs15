import AllPosts from '../../components/posts/all-posts'

export default function AllPostsPage() {
  return (
    <AllPosts posts={[
            {
                title: 'First Post',
                image: 'image1.png',
                excerpt: 'This is the first post excerpt.',
                date: '2023-10-01',
                slug: 'first-post'
            },
            {
                title: 'Second Post',
                image: 'image2.png',
                excerpt: 'This is the second post excerpt.',
                date: '2023-10-02',
                slug: 'second-post'
            }
    ]} />
  )
}
