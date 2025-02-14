import { getAvailableNewsYears } from '@/lib/news'
import Link from 'next/link';
import React from 'react'

export default function Archive() {

  const links = getAvailableNewsYears();

  return (
      <header id="archive-header">
        <nav>
          <ul>
            {links.map(item => 
              <li key={item}>
                <Link href={`/archive/${item}`}>{item}</Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
  )
}
