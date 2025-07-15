import { Fragment } from 'react'
import Hero from '../components/home-page/hero'
import FeaturePosts from '../components/home-page/feature-posts'

export default function HomePage() {
  return (
    <Fragment>
        <Hero />
        <FeaturePosts posts={[
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
    </Fragment>
  )
}
