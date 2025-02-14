import { DUMMY_NEWS } from '@/dummy-news'
import { notFound } from 'next/navigation';
import React from 'react'

export default function NewsDetails({ params }) {

  const details = DUMMY_NEWS.find(item => item.slug === params.id);
  if (!details) {
    notFound();
  }

  return (
    <article className='news-article'>
      <header>
        <img src={`/images/news/${details.image}`}
          alt={details.title}
        />
        <h1>{details.title}</h1>
        <time dateTime={details.date}>{details.date}</time>
      </header>
      <p>{details.content}</p>
    </article>
  )
}
