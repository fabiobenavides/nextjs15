import { DUMMY_NEWS } from '@/dummy-news'
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react'

export default function NewsDetails({ params }) {

  const selectedItem = React.use(params);
  //console.log(params);
  const details = DUMMY_NEWS.find(item => item.slug === selectedItem.id);
  if (!details) {
    notFound();
  }

  return (
    <article className='news-article'>
      <header>
        <Link href={`/news/${details.slug}/image`}>
          <img src={`/images/news/${details.image}`}
              alt={details.title}
            />
        </Link>
        
        <h1>{details.title}</h1>
        <time dateTime={details.date}>{details.date}</time>
      </header>
      <p>{details.content}</p>
    </article>
  )
}
