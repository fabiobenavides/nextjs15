import Link from 'next/link'
import React from 'react'
import { DUMMY_NEWS } from '@/dummy-news'

export default function NewsPage() {
  return (
    <>
        <div>Welcome to my News Page</div>
        <ul className='news-list'>
          {DUMMY_NEWS.map((item) =>
            <li key={item} >
              <Link href={`/news/${item.slug}`}>
                <img
                  src={`/images/news/${item.image}`} 
                  alt={item.title}
                />
                <span>{item.title}</span>
              </Link>
            </li>
          )}
        </ul>
    </>
  )
}
