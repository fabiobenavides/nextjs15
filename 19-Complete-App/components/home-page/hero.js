import classes from './hero.module.css';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className={classes.hero}>
        <div className={classes.image}>
            <Image
                src="/images/site/logo.png"
                alt="An image showing a beautiful landscape"
                width={300}
                height={300}
            />
        </div>
        <h1 className="hero-title">Welcome to My Blog</h1>
        <p className="hero-description">Discover the latest insights and stories</p>
        <a href="/posts" className="hero-button">Explore Posts</a>
    </section>
  )
}
