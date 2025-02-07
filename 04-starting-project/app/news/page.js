import Link from 'next/link'
import React from 'react'

export default function NewsPage() {
  return (
    <>
        <div>Welcome to my News Page</div>
        <Link href="/news/test"> Test news link</Link>
    </>
  )
}
