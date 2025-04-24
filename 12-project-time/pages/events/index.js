import Link from 'next/link'

export default function index() {
  return (
    <div>
      <h1>Events page</h1>
      <ul>
        <li>
          <Link href="/events/1">Event 1</Link>
        </li>
        <li>
          <Link href="/events/2">Event 2</Link>
        </li>
        <li>
          <Link href="/events/3">Event 3</Link>
        </li>
      </ul>
    </div>
  )
}
